import React from 'react'
import { Currency, Pair } from '@scads/sdk'
import { Button, useModal, useMatchBreakpoints } from '@scads/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'
import { Input as NumericalInput } from './NumericalInput'

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
  border: 1px solid;
  border-color: ${({ theme }) => theme.isDark ? "rgb(255 255 255 / 1)" : "rgb(0 0 0 / 1)"};
`

interface CurrencyInputPanelProps {
  theme: boolean
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
  onlyInteger?: boolean
}

export default function CurrencyInputPanel({
  theme,
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
  onlyInteger = false,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const balance = selectedCurrencyBalance?.toExact().toString() !== '0' ? parseFloat(selectedCurrencyBalance?.toExact()).toFixed(3) : 0

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (
    <div
        className={`flex flex-col justify-between py-3 w-full ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <div className="flex flex-col gap-1">
          <button
            type="button"
            className={`flex items-center w-fit text-base gap-2 border rounded-3xl p-2 ${
              theme ? "border-white" : "border-black"
            }`}
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal()
              }
            }}
          >
            {pair ? (
              <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
            ) : currency ? (
              <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
            ) : null}
            {pair ? (
              <p id="pair" className='font-bold'>
                {pair?.token0.symbol}:{pair?.token1.symbol}
              </p>
            ) : (
              <p id="pair" className='font-bold'>
                {(currency && currency.symbol && currency.symbol.length > 20
                  ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                      currency.symbol.length - 5,
                      currency.symbol.length,
                    )}`
                  : currency?.symbol) || t('Select a currency')}
              </p>
            )}
            <img
              src="/images/home/accrodion_arrow.svg"
              width={16}
              height={16}
              alt="Dropdown Arrow"
              className={`${theme && "invert"}`}
            />
          </button>
          {account && (
            <p className="text-sm">
              <span className="opacity-60">{t("Balance")}: </span>
              <span className='font-bold'>{balance ?? t('Loading')}</span>
            </p>
          )}
        </div>
        <div className={`mt-14 flex flex-row items-center ${ isMobile ? "" : "pr-10" }`}>
        <NumericalInput
          className={`token-amount-input marker:bg-transparent text-[28px] focus:outline-none font-medium text-right ${
            theme ? "placeholder:text-white" : "placeholder:text-black"
          } ${ account && currency && showMaxButton ? "md:max-w-[75%]" : "" }`}
          value={value}
          onlyInteger={onlyInteger}
          onUserInput={(val) => {
            onUserInput(val)
          }}
        />
        {account && currency && showMaxButton && label !== 'To' && (
          <StyledButton
            scale="sm"
            variant="secondary"
            onClick={onMax}
          >
            MAX
          </StyledButton>
        )}
        </div>
      </div>
  )
}

export function CurrencyInputPanelRight({
  theme,
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
  onlyInteger = false,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()

  const balance = selectedCurrencyBalance?.toExact().toString() !== '0' ? parseFloat(selectedCurrencyBalance?.toExact()).toFixed(3) : 0

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (
    <div
        className={`flex flex-col justify-between py-3 ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <div className="flex flex-col md:items-end gap-1">
          <button
            type="button"
            className={`flex items-center w-fit text-base gap-2 border rounded-3xl p-2 ${
              theme ? "border-white" : "border-black"
            }`}
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal()
              }
            }}
          >
            {pair ? (
              <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
            ) : currency ? (
              <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
            ) : null}
            {pair ? (
              <p id="pair" className='font-bold'>
                {pair?.token0.symbol}:{pair?.token1.symbol}
              </p>
            ) : (
              <p id="pair" className='font-bold'>
                {(currency && currency.symbol && currency.symbol.length > 20
                  ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                      currency.symbol.length - 5,
                      currency.symbol.length,
                    )}`
                  : currency?.symbol) || t('Select a currency')}
              </p>
            )}
            <img
              src="/images/home/accrodion_arrow.svg"
              width={16}
              height={16}
              alt="Dropdown Arrow"
              className={`${theme && "invert"}`}
            />
          </button>
          {account && (
            <p className="text-sm">
              <span className="opacity-60">{t("Balance")}: </span>
              <span className='font-bold'>{balance ?? t('Loading')}</span>
            </p>
          )}
        </div>
        <div className='mt-14 flex flex-row items-center'>
        <NumericalInput
          className={`token-amount-input marker:bg-transparent text-[28px] focus:outline-none font-medium text-right ${
            theme ? "placeholder:text-white" : "placeholder:text-black"
          } ${ account && currency && showMaxButton ? "md:max-w-[75%]" : "" }`}
          value={value}
          onlyInteger={onlyInteger}
          onUserInput={(val) => {
            onUserInput(val)
          }}
        />
        </div>
      </div>
  )
}
