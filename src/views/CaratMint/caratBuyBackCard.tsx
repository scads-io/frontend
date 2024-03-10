import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { JSBI, TokenAmount } from '@scads/sdk'
import { Button, Flex } from '@scads-io/uikit'
import { utils } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import tokens from 'config/constants/tokens'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import CurrencyInputPanel, { CurrencyInputPanelRight } from '../../components/CurrencyInputPanel'
import { ConnectWalletButtonInvest } from '../../components/ConnectWalletButton'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { Field } from '../../state/swap/actions'
import { useCaratBuyBackInfo, useScadsBuyBackInfo } from '../../state/swap/hooks'
import useCaratMint from './hooks/useCaratMint'

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
  background-color:  ${({ theme }) => theme.isDark ? "rgba(255,255,255,0.08)" : "#E9EAEB"};
`

export default function CaratBuyBackCard({ theme }) {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()
  // carat amount
  const [amountInput, setAmountInput] = useState<string>()
  // scads amount
  const [amountOutput, setAmountOutput] = useState<string>()

  const parsedCaratTokenAmount = new TokenAmount(
    tokens.carat,
    amountInput ? JSBI.multiply(JSBI.BigInt(utils.parseEther(amountInput)), JSBI.BigInt(DEFAULT_TOKEN_DECIMAL)) : '0',
  )

  const parsedScadsTokenAmount = new TokenAmount(
    tokens.cake,
    amountOutput ? JSBI.multiply(JSBI.BigInt(utils.parseEther(amountOutput)), JSBI.BigInt(DEFAULT_TOKEN_DECIMAL)) : '0',
  )

  const {
    currencyBalances,
    redeemScadsAmount,
    inputError: swapInputError,
  } = useCaratBuyBackInfo(parsedCaratTokenAmount, tokens.cake)

  const caratBalance = currencyBalances[Field.INPUT]?.toSignificant()

  const { redeemCaratAmount } = useScadsBuyBackInfo(parsedScadsTokenAmount, tokens.carat)

  const isValid = !swapInputError

  // input carat amount on carat input
  const handleAmountInput = useCallback((value: string) => {
    setAmountInput(value)
    setAmountOutput('0.0')
  }, [])

  const handleAmountOutput = useCallback((value: string) => {
    setAmountInput('0.0')
    setAmountOutput(value)
  }, [])

  const { caratRedeem } = useCaratMint()
  const handleSwap = async () => {
    if (amountInput === '0.0') {
      const res = redeemCaratAmount?.toExact()
      await caratRedeem(res.toString())
    } else if (amountInput !== '0.0') {
      const res = utils.parseEther(amountInput)
      await caratRedeem(res.toString())
    }
  }

  const handleMaxInput = () => {
    setAmountInput(caratBalance)
    setAmountOutput('0.0')
  }

  return (
    <div className="w-full">
      <div
        className={`flex flex-col md:flex-row justify-between px-5 w-full border rounded-3xl max-w-[330px] md:max-w-none md:w-full relative ${
          theme ? "border-white" : "border-black"
        }`}
      >
        <CurrencyInputPanel
          theme={theme}
          label={t('From (estimated)')}
          value={amountInput === '0.0' ? utils.formatEther(redeemCaratAmount?.toExact()) : amountInput}
          showMaxButton
          currency={tokens.carat}
          onUserInput={handleAmountInput}
          onMax={() => handleMaxInput()}
          onCurrencySelect={() => console.error('input currency select')}
          otherCurrency={tokens.cake}
          disableCurrencySelect
          onlyInteger={false}
          showArrow={false}
        />
        <div
          className={`w-full h-[1px] md:w-[1px] md:h-full border ${
            theme ? "border-white" : "border-black"
          } absolute left-0 top-1/2 md:top-0 md:left-1/2 z-0`} 
        />
        <CurrencyInputPanelRight
          theme={theme}
          value={amountOutput === '0.0' ? utils.formatEther(redeemScadsAmount?.toExact()) : amountOutput}
          onUserInput={handleAmountOutput}
          label={t('To')}
          showMaxButton={false}
          currency={tokens.cake}
          onCurrencySelect={() => console.error('output currency select')}
          otherCurrency={tokens.carat}
          disableCurrencySelect
          showArrow={false}
        />
      </div>
      <Flex
        justifyContent='center'
        mt="1.5rem"
        mb="0.5rem"
      >
        {!account ? (
          <ConnectWalletButtonInvest />
        ) : (
          <StyledButton
            variant="primary"
            onClick={() => {
              handleSwap()
            }}
            id="swap-button"
            disabled={!isValid}
          >
            {t('Sell')}
          </StyledButton>
        )}
      </Flex>
    </div>
  )
}
