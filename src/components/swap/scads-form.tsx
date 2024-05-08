import React, { useState, useEffect, useCallback } from 'react'
import { AiOutlineSwap } from "react-icons/ai";
import { Button as UiKitButton } from '@scads-io/uikit'
import { Token, Trade } from '@scads/sdk'
import { utils, BigNumber } from 'ethers'
import { cn } from 'lib/utils'
import { useTranslation } from 'contexts/Localization'
import tokens from 'config/constants/tokens'
import useToast from 'hooks/useToast'
import { AutoRow, RowBetween } from 'components/Layout/Row'
import ProgressSteps from 'views/ScadsMint/components/ProgressSteps'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import useWrapCallback, { WrapType } from 'hooks/useWrapCallback'
import useScadsMint from 'hooks/useScadsMint'
import { Field } from 'state/swap/actions'
import {
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
  useCaratSellPermission,
} from 'state/swap/hooks'
import CircleLoader from 'components/Loader/CircleLoader'
import Taxes from './taxes'
import WalletModal from '../WalletModal/wallet-modal'
import { Button } from '../ui/button'
import Input from './input'
import { Separator } from "../ui/separator";

const ScadsForm: React.FC = () => {
  const { t } = useTranslation()
  const { toastError } = useToast()
  const allowCaratSell = useCaratSellPermission()

  const { account } = useActiveWeb3React()

  // swap state
  const { independentField, typedValue } = useSwapState()
  const { v2Trade, currencyBalances, parsedAmount, currencies, inputError: swapInputError } = useDerivedSwapInfo()

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

  const { onSwitchTokens, onCurrencySelection, onUserInput } = useSwapActionHandlers()
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

  const { scadsMint, scadsSell } = useScadsMint()
  const handleSwap = async () => {
    const InputCoin = currencies[Field.INPUT] as Token
    const OutputCoin = currencies[Field.OUTPUT] as Token
    const StableCoins = [tokens.usdt.address, tokens.usdc.address]
    if (InputCoin.address === tokens.cake.address && StableCoins.includes(OutputCoin.address)) {
      try {
        await scadsSell(formattedAmounts[Field.INPUT], OutputCoin.address)
      } catch (e) {
        console.error(e)
      }
    } else if (StableCoins.includes(InputCoin.address) && OutputCoin.address === tokens.cake.address) {
      if (allowCaratSell[0].gte(BigNumber.from(utils.parseEther('5500000')))) {
        toastError(t('Error'), t('TWINE amount more than 5.5M in market'))
      } else {
        try {
          await scadsMint(formattedAmounts[Field.INPUT], InputCoin.address)
        } catch (e) {
          console.error(e)
        }
      }
    } else {
      toastError(t('Error'), t('Only SCADS or Stable Coins can be purchased!'))
    }
  }

  const showApproveFlow =
  !swapInputError &&
  (approval === ApprovalState.NOT_APPROVED ||
    approval === ApprovalState.PENDING ||
    (approvalSubmitted && approval === ApprovalState.APPROVED))

  useEffect(() => {
    onCurrencySelection(Field.INPUT, tokens.usdt)
    onCurrencySelection(Field.OUTPUT, tokens.cake)
  }, [onCurrencySelection])

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      setApprovalSubmitted(false) // reset 2 step UI for approvals
      onCurrencySelection(Field.INPUT, inputCurrency)
    },
    [onCurrencySelection],
  )

  const handleOutputSelect = useCallback(
    (outputCurrency) => {
      onCurrencySelection(Field.OUTPUT, outputCurrency)
    },

    [onCurrencySelection],
  )

  const amountToDisplay = formattedAmounts[Field.INPUT] || '0.0'

  return (
    <form
      className="mt-2 flex flex-col gap-y-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
       <div className="relative flex h-full justify-between rounded-3xl border border-black border-white/10 bg-transparent px-4 lg:w-[460px]">
      <Input
        className={cn(
          "items-start pb-1 pt-4 text-white placeholder:text-white",
        )}
        balanceClassName={cn("justify-start text-white")}
        tokenClassName="text-white"
        value={formattedAmounts[Field.INPUT]}
        currency={currencies[Field.INPUT]}
        onUserInput={handleTypeInput}
        onCurrencySelect={handleInputSelect}
        otherCurrency={currencies[Field.OUTPUT]}
        disableCurrencySelect={false}
      />
      <Separator
        orientation="vertical"
        className="absolute left-1/2 -translate-x-1/2 bg-white/10"
      />
      <button
        type="button"
        aria-label="swap"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0c0e22] p-1 text-white transition hover:text-indigo-600"
        onClick={() => {
          setApprovalSubmitted(false)
          onSwitchTokens()
        }}
      >
        <AiOutlineSwap size={24} />
      </button>
      <Input
        className="items-end pb-1 pt-4 text-end text-white placeholder:text-white"
        balanceClassName="justify-end text-white"
        tokenClassName="text-white"
        value={formattedAmounts[Field.INPUT]}
        onUserInput={handleTypeOutput}
        currency={currencies[Field.OUTPUT]}
        onCurrencySelect={handleOutputSelect}
        otherCurrency={currencies[Field.INPUT]}
        disableCurrencySelect={false}
      />
    </div>
      <div className="flex w-full justify-between text-sm text-white">
        <p className="text-[#B4BCD0]">1 SCADS = 1 USDT</p>
        <p>
          <span className="pr-1 text-[#B4BCD0]">You receive:</span>
          {amountToDisplay} {" "} {currencies[Field.OUTPUT]?.symbol}
        </p>
      </div>
      <Taxes />
      <div className='justify-center'
        >
          {!account ? (
            <WalletModal />
          ) : showApproveFlow ? (
            <RowBetween>
              <UiKitButton
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
              </UiKitButton>
              <UiKitButton
                variant="primary"
                onClick={() => {
                  handleSwap()
                }}
                width="48%"
                id="swap-button"
                disabled={!isValid || approval !== ApprovalState.APPROVED}
              >
                {t('Buy')}
              </UiKitButton>
            </RowBetween>
          ) : (
            <UiKitButton
              variant="primary"
              onClick={() => {
                handleSwap()
              }}
              id="swap-button"
              width="100%"
              disabled={!isValid}
            >
              {t('Buy')}
            </UiKitButton>
          )}
          {showApproveFlow && (
            <div className="flex flex-col justify-start">
              <ProgressSteps steps={[approval === ApprovalState.APPROVED]} />
            </div>
          )}
        </div>
    </form>
  )
}

export default ScadsForm
