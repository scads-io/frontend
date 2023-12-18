import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { CurrencyAmount, Token, Trade } from '@scads/sdk'
import { Button, useModal, Flex } from '@scads/uikit'
import { utils, BigNumber } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import SwapWarningTokens from 'config/constants/swapWarningTokens'
import tokens from 'config/constants/tokens'
// import AddressInputPanel from './components/AddressInputPanel'
import useToast from 'hooks/useToast'
import Column from '../../components/Layout/Column'
import CurrencyInputPanel, { CurrencyInputPanelRight } from '../../components/CurrencyInputPanel'
import { AutoRow, RowBetween } from '../../components/Layout/Row'
import { SwapCallbackError } from './components/styleds'
import ProgressSteps from './components/ProgressSteps'
import { ConnectWalletButtonInvest } from '../../components/ConnectWalletButton'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { useCurrency, useAllTokens } from '../../hooks/Tokens'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import useWrapCallback, { WrapType } from '../../hooks/useWrapCallback'
import { Field } from '../../state/swap/actions'
import {
  useDefaultsFromURLSearch,
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
  useScadsLatestSellDate,
  useCaratSellPermission,
} from '../../state/swap/hooks'
import { useExpertModeManager } from '../../state/user/hooks'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import CircleLoader from '../../components/Loader/CircleLoader'
import SwapWarningModal from './components/SwapWarningModal'
import useScadsMint from './hooks/useScadsMint'

const StyledButton = styled(Button)`
  color: ${({ theme }) => (theme.isDark ? 'white' : 'black')};
  background-color: ${({ theme }) => (theme.isDark ? 'rgba(255,255,255,0.08)' : '#E9EAEB')};
  font-family: 'Poppins';
`

export default function ScadsMint() {
  const { theme } = useTheme()

  const loadedUrlParams = useDefaultsFromURLSearch()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const latestSellDate = useScadsLatestSellDate()
  const allowCaratSell = useCaratSellPermission()

  // token warning stuff
  const [loadedInputCurrency, loadedOutputCurrency] = [
    useCurrency(loadedUrlParams?.inputCurrencyId),
    useCurrency(loadedUrlParams?.outputCurrencyId),
  ]
  const urlLoadedTokens: Token[] = useMemo(
    () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c instanceof Token) ?? [],
    [loadedInputCurrency, loadedOutputCurrency],
  )

  // dismiss warning if all imported tokens are in active lists
  const defaultTokens = useAllTokens()
  const importTokensNotInDefault =
    urlLoadedTokens &&
    urlLoadedTokens.filter((token: Token) => {
      return !(token.address in defaultTokens)
    })

  const { account } = useActiveWeb3React()

  // for expert mode
  const [isExpertMode] = useExpertModeManager()

  // swap state
  const { independentField, typedValue, recipient } = useSwapState()
  const { v2Trade, currencyBalances, parsedAmount, currencies, inputError: swapInputError } = useDerivedSwapInfo()
  // Price data
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()

  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(currencies[Field.INPUT], currencies[Field.OUTPUT], typedValue)
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE

  const trade = showWrap ? undefined : v2Trade

  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
      }

  const { onSwitchTokens, onCurrencySelection, onUserInput, onChangeRecipient } = useSwapActionHandlers()
  const isValid = !swapInputError
  const dependentField: Field = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput],
  )
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput],
  )

  // modal and loading
  const [{ tradeToConfirm, swapErrorMessage, attemptingTxn, txHash }, setSwapState] = useState<{
    tradeToConfirm: Trade | undefined
    attemptingTxn: boolean
    swapErrorMessage: string | undefined
    txHash: string | undefined
  }>({
    tradeToConfirm: undefined,
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  })

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ''
      : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }
  // check whether the user has approved the router on the input token
  // const [approval, approveCallback] = useApproveCallbackFromTrade(trade, allowedSlippage)

  const [approval, approveCallback] = useApproveCallback(parsedAmounts[Field.INPUT], tokens.cake.address)
  // check if user has gone through approval process, used to show two step buttons, reset on token change
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false)

  // mark when a user has submitted an approval, reset onTokenSelection for input field
  useEffect(() => {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true)
    }
  }, [approval, approvalSubmitted])

  const maxAmountInput: CurrencyAmount | undefined = maxAmountSpend(currencyBalances[Field.INPUT])

  const { scadsMint, scadsSell } = useScadsMint()
  const handleSwap = async () => {
    const InputCoin = currencies[Field.INPUT] as Token
    const OutputCoin = currencies[Field.OUTPUT] as Token
    const StableCoins = [tokens.usdt.address, tokens.usdc.address]
    if (InputCoin.address === tokens.cake.address && StableCoins.includes(OutputCoin.address)) {
      try {
        await scadsSell(formattedAmounts[Field.INPUT], OutputCoin.address)
      } catch (e) {
        console.log(e)
      }
    } else if (StableCoins.includes(InputCoin.address) && OutputCoin.address === tokens.cake.address) {
      if (allowCaratSell[0].gte(BigNumber.from(utils.parseEther('5500000')))) {
        toastError(t('Error'), t('TWINE amount more than 5.5M in market'))
      } else {
        try {
          await scadsMint(formattedAmounts[Field.INPUT], InputCoin.address)
        } catch (e) {
          console.log(e)
        }
      }
    } else {
      toastError(t('Error'), t('Only SCADS or Stable Coins can be purchased!'))
    }
  }

  // show approve flow when: no error on inputs, not approved or pending, or approved in current session
  // never show if price impact is above threshold in non expert mode

  const showApproveFlow =
    !swapInputError &&
    (approval === ApprovalState.NOT_APPROVED ||
      approval === ApprovalState.PENDING ||
      (approvalSubmitted && approval === ApprovalState.APPROVED))
  // swap warning state
  const [swapWarningCurrency, setSwapWarningCurrency] = useState(null)
  const [onPresentSwapWarningModal] = useModal(<SwapWarningModal swapCurrency={swapWarningCurrency} />)

  const shouldShowSwapWarning = (swapCurrency) => {
    const isWarningToken = Object.entries(SwapWarningTokens).find((warningTokenConfig) => {
      const warningTokenData = warningTokenConfig[1]
      return swapCurrency.address === warningTokenData.address
    })
    return Boolean(isWarningToken)
  }

  useEffect(() => {
    onCurrencySelection(Field.INPUT, tokens.usdt)
    onCurrencySelection(Field.OUTPUT, tokens.cake)
  }, [onCurrencySelection])

  useEffect(() => {
    if (swapWarningCurrency) {
      onPresentSwapWarningModal()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapWarningCurrency])

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      setApprovalSubmitted(false) // reset 2 step UI for approvals
      onCurrencySelection(Field.INPUT, inputCurrency)
      const showSwapWarning = shouldShowSwapWarning(inputCurrency)
      if (showSwapWarning) {
        setSwapWarningCurrency(inputCurrency)
      } else {
        setSwapWarningCurrency(null)
      }
    },
    [onCurrencySelection],
  )

  const handleMaxInput = useCallback(() => {
    if (maxAmountInput) {
      onUserInput(Field.INPUT, maxAmountInput.toSignificant(6))
    }
  }, [maxAmountInput, onUserInput])

  const handleOutputSelect = useCallback(
    (outputCurrency) => {
      onCurrencySelection(Field.OUTPUT, outputCurrency)
      const showSwapWarning = shouldShowSwapWarning(outputCurrency)
      if (showSwapWarning) {
        setSwapWarningCurrency(outputCurrency)
      } else {
        setSwapWarningCurrency(null)
      }
    },

    [onCurrencySelection],
  )

  const amountToDisplay = formattedAmounts[Field.INPUT] || '0.0';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto flex justify-center"
    >
      <div
        className={`flex flex-col items-center mx-auto font-['Poppins'] lg:h-[420px] xl:h-5/6 ${
          theme.isDark ? "text-white" : "text-black"
        } relative`}
      >
        <div
          className={`flex flex-col md:flex-row justify-between px-5 border rounded-3xl font-['Poppins'] max-w-[330px] md:max-w-none md:w-full relative ${
            theme.isDark ? "border-white" : "border-black"
          }`}
        >
          <CurrencyInputPanel
            theme={theme.isDark}
            label={t('From (estimated)')}
            value={formattedAmounts[Field.INPUT]}
            showMaxButton={!false}
            currency={currencies[Field.INPUT]}
            onUserInput={handleTypeInput}
            onMax={handleMaxInput}
            onCurrencySelect={handleInputSelect}
            otherCurrency={currencies[Field.OUTPUT]}
            disableCurrencySelect={false}
            id="swap-currency-input"
            onlyInteger={false}
          />
          <div
            className={`w-full h-[1px] md:w-[1px] md:h-full border ${
              theme.isDark ? "border-white" : "border-black"
            } absolute left-0 top-1/2 md:top-0 md:left-1/2 z-0`}
          />
          <button 
            type="button" 
            className="rounded-full w-[40px] h-[40px] border flex md:flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 bg-[#2B2B37]"
            onClick={() => {
              setApprovalSubmitted(false)
              onSwitchTokens()
            }}
          >
            <img src="/images/home/switch_arrow.svg" alt="swap" className="rotate-90 md:rotate-0" />
            <img
              src="/images/home/switch_arrow.svg"
              className="-rotate-90 md:rotate-180"
              alt="swap"
            />
          </button>
          <CurrencyInputPanelRight
            theme={theme.isDark}
            value={formattedAmounts[Field.INPUT]}
            onUserInput={handleTypeOutput}
            label={t('To')}
            showMaxButton={false}
            currency={currencies[Field.OUTPUT]}
            onCurrencySelect={handleOutputSelect}
            otherCurrency={currencies[Field.INPUT]}
            disableCurrencySelect={false}
            id="swap-currency-output"
            onlyInteger={!false}
          />
        </div>
        <p className="opacity-60 mt-3">1 USDT = 1 SCADS</p>
        <div
          className={`flex justify-between w-full border rounded-3xl px-6 py-2 mt-10 md:mt-28 ${
            theme.isDark ? "border-white" : "border-black"
          }`}
        >
          <p>{t("You Recieve")}</p>
          <p><span className='font-bold'>{amountToDisplay}</span> {currencies[Field.OUTPUT]?.symbol}</p>
        </div>
        <Flex
          justifyContent="center" 
          mt="1.5rem"
          mb="0.5rem"
        >
          {!account ? (
            <ConnectWalletButtonInvest />
          ) : showApproveFlow ? (
            <RowBetween>
              <StyledButton
                variant={approval === ApprovalState.APPROVED ? 'success' : 'primary'}
                onClick={approveCallback}
                disabled={approval !== ApprovalState.NOT_APPROVED || approvalSubmitted}
                width="48%"
              >
                {approval === ApprovalState.PENDING ? (
                  <AutoRow gap="6px" justify="center">
                    {t('Enabling')} <CircleLoader stroke="white" />
                  </AutoRow>
                ) : approvalSubmitted && approval === ApprovalState.APPROVED ? (
                  t('Enabled')
                ) : (
                  t('Enable %asset%', { asset: currencies[Field.INPUT]?.symbol ?? '' })
                )}
              </StyledButton>
              <StyledButton
                variant="primary"
                onClick={() => {
                  handleSwap()
                }}
                width="48%"
                id="swap-button"
                disabled={!isValid || approval !== ApprovalState.APPROVED}
              >
                {t('Buy')}
              </StyledButton>
            </RowBetween>
          ) : (
            <StyledButton
              variant="primary"
              onClick={() => {
                handleSwap()
              }}
              id="swap-button"
              width="100%"
              disabled={!isValid}
            >
              {t('Buy')}
            </StyledButton>
          )}
          {showApproveFlow && (
            <Column style={{ marginTop: '1rem' }}>
              <ProgressSteps steps={[approval === ApprovalState.APPROVED]} />
            </Column>
          )}
          {swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
        </Flex>
      </div>
    </motion.div>
  )
}
