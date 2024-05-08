import React from 'react'
import { Currency } from '@scads/sdk'
import Image from 'next/image'
import { cn } from 'lib/utils'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from 'state/wallet/hooks'
import { Input as NumericalInput } from './NumericalInput'
import TokenSelect from './token-select'

interface InputProps {
  className: string
  balanceClassName: string
  tokenClassName: string
  value: string
  onUserInput: (value: string) => void
  onCurrencySelect: (currency: Currency) => void
  currency: Currency | null
  otherCurrency?: Currency | null
  disableCurrencySelect?: boolean
}

const Input: React.FC<InputProps> = ({
  className,
  balanceClassName,
  tokenClassName,
  value,
  onUserInput,
  onCurrencySelect,
  currency,
  otherCurrency,
  disableCurrencySelect = false,
}) => {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()

  const balance =
    selectedCurrencyBalance?.toExact().toString() !== '0'
      ? parseFloat(selectedCurrencyBalance?.toExact()).toFixed(3)
      : 0

  return (
    <div className={cn('flex flex-col justify-between h-[160px] 2xl:h-[200px]', className)}>
      <div className="flex flex-col gap-y-1">
        {!disableCurrencySelect ? (
          <TokenSelect
            onCurrencySelect={onCurrencySelect}
            selectedCurrency={currency}
            otherSelectedCurrency={otherCurrency}
          />
        ) : (
          <div className="flex w-fit flex-row items-center justify-between rounded-3xl border border-white/10 px-4 py-2 text-white">
            <div className="flex items-center gap-x-2">
              <div className="relative h-4 w-[10px]">
                <Image src={`/images/currency/${currency?.symbol}.svg`} alt="currency placeholder" fill />
              </div>
              <span className={tokenClassName}>{currency?.symbol}</span>
            </div>
          </div>
        )}
        <div className={cn('flex gap-x-1 text-sm', balanceClassName)}>
          <p className="opacity-70">Balance:</p>
          <span>{balance ?? t('Loading')}</span>
        </div>
      </div>
      <NumericalInput
        type="number"
        className={cn('w-11/12 bg-transparent text-2xl font-bold focus:outline-none', className)}
        placeholder="0.0"
        value={value}
        onUserInput={(val) => {
          onUserInput(val)
        }}
      />
    </div>
  )
}

export default Input
