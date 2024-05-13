import React, { useState, useEffect, useCallback } from 'react'
import { JSBI, TokenAmount } from '@scads/sdk'
import toast from 'react-hot-toast'
import { utils } from 'ethers'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { RU } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useCaratMint from 'hooks/useCaratMint'
import tokens from 'config/constants/tokens'
import { cn } from 'lib/utils'
import { Separator } from 'components/ui/separator'
import { useCurrencyBalance } from 'state/wallet/hooks'
import {
  useLatestBoughtData,
  useUserMintedCaratAmount,
  useUserLatestRewardAmount,
  useUserCompoundExist,
  useCaratBuyBackInfo,
  useScadsBuyBackInfo,
} from 'state/swap/hooks'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import Taxes from './taxes'
import WalletModal from '../WalletModal/wallet-modal'
import { Button } from '../ui/button'
import Input from './input'

const TwineForm: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const { account } = useActiveWeb3React()

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

  const { redeemScadsAmount, inputError: swapInputError } = useCaratBuyBackInfo(parsedCaratTokenAmount, tokens.cake)

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
    if (amountInput !== '0.0' && amountInput !== undefined) {
      const res = utils.parseEther(amountInput)
      await caratRedeem(res.toString()).catch((error) => {
        toast.error('Transaction rejected')
      })
    }
  }

  const userMintedCaratAmount = useUserMintedCaratAmount()
  const claimedTWINE = userMintedCaratAmount
    ? parseFloat(utils.formatEther(userMintedCaratAmount.toString())) !== 0
      ? parseFloat(utils.formatEther(userMintedCaratAmount.toString())).toFixed(3).toString()
      : 0
    : 0
  const userLatestRewardAmount = useUserLatestRewardAmount()
  const compoundExistStatus = useUserCompoundExist()
  const latestRewardAmount =
    userLatestRewardAmount !== undefined
      ? parseFloat(utils.formatEther(userLatestRewardAmount.toString())) !== 0
        ? parseFloat(utils.formatEther(userLatestRewardAmount.toString())).toFixed(3).toString()
        : 0
      : 0

  const latestBoughtData = useLatestBoughtData()
  const latestBoughtMintDate = latestBoughtData && parseInt(latestBoughtData?.toString())
  const diffTime = latestRewardAmount === 0 ? 0 : Math.floor(latestBoughtMintDate / 60)

  const remainTime = {
    days: Math.floor(diffTime / (60 * 24)),
    hours: Math.floor((diffTime / 60) % 24),
    minutes: Math.floor(diffTime % 60),
  }

  const [autoCompound, setAutoCompound] = useState(false)
  const scadsBalance = useCurrencyBalance(account ?? undefined, tokens.cake ?? undefined)
  const scadsOwned = scadsBalance === undefined ? '0' : parseFloat(scadsBalance?.toExact()).toFixed(3).toString()

  const { caratClaim, addCompoundAddress, removeCompoundAddress } = useCaratMint()
  const handleClaim = async () => {
    await caratClaim().catch((error) => {
      toast.error('Transaction rejected')
    })
  }

  useEffect(() => {
    if (compoundExistStatus === true) {
      setAutoCompound(true)
    } else {
      setAutoCompound(false)
    }
  }, [compoundExistStatus])

  const startAutoCompounding = async () => {
    try {
      if (autoCompound) {
        await removeCompoundAddress()
      } else {
        await addCompoundAddress()
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form
      className="mt-2 flex flex-col gap-y-4 2xl:gap-y-6"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="relative flex h-full justify-between rounded-3xl border border-black border-white/10 bg-transparent px-2 md:px-4 lg:w-[460px]">
        <Input
          className={cn('items-start pb-1 pt-4 text-white placeholder:text-white')}
          balanceClassName={cn('items-start text-white')}
          tokenClassName="text-white"
          value={amountInput === '0.0' ? utils.formatEther(redeemCaratAmount?.toExact()) : amountInput}
          onCurrencySelect={() => console.error('input currency select')}
          currency={tokens.carat}
          onUserInput={handleAmountInput}
          disableCurrencySelect
        />
        <Separator orientation="vertical" className="absolute left-1/2 -translate-x-1/2 bg-white/10" />
        <Input
          className="items-end pb-1 pt-4 text-end text-white placeholder:text-white"
          balanceClassName="items-end text-white"
          tokenClassName="text-white"
          value={amountOutput === '0.0' ? utils.formatEther(redeemScadsAmount?.toExact()) : amountOutput}
          onUserInput={handleAmountOutput}
          onCurrencySelect={() => console.error('input currency select')}
          currency={tokens.cake}
          disableCurrencySelect
        />
      </div>
      <Taxes />
      {account ? (
        <Button
          onClick={() => {
            handleSwap()
          }}
          id="swap-button"
          disabled={!isValid}
          variant="ghost"
          className="w-full rounded-xl bg-white/20 text-base text-white hover:bg-white/40 hover:text-white"
        >
          {t('Buy')}
        </Button>
      ) : (
        <WalletModal />
      )}
      <div className="flex items-center justify-center space-x-2 text-white">
        <Switch
          id="auto-compound"
          className="bg-white/5"
          checked={autoCompound}
          onCheckedChange={() => startAutoCompounding()}
        />
        <Label htmlFor="auto-compound" className="text-white">
          Auto-compound
        </Label>
      </div>
      <div className="flex flex-col items-center gap-y-2 text-sm text-white">
        <p>
          <span className="text-[#B4BCD0]">SCADS owned:</span>
          {scadsOwned}
        </p>
        <div className="w-full space-y-2 text-start whitespace-nowrap">
          <p className={cn('flex justify-between', currentLanguage === RU && 'flex-col items-center md:flex-row')}>
            <span className="text-[#B4BCD0]">{t('Time invested')}:</span>
            {remainTime.days && remainTime.days >= 0 ? remainTime.days : 0} {t('Days')}{' '}
            {remainTime.hours && remainTime.hours >= 0 ? remainTime.hours : 0} {t('Hours')}{' '}
            {remainTime.minutes && remainTime.minutes >= 0 ? remainTime.minutes : 0} {t('Minutes')}
          </p>
          <p className="flex justify-between">
            <span className="text-[#B4BCD0]">{t('TWINE minted')}:</span>
            {latestRewardAmount}
          </p>
          <p className="flex justify-between">
            <span className="text-[#B4BCD0]">{t('TWINE claimed')}:</span>
            {claimedTWINE}
          </p>
        </div>
      </div>
      {account ? (
        <Button
          id="swap-button"
          onClick={() => {
            handleClaim()
          }}
          variant="ghost"
          className="w-full rounded-xl bg-white/20 text-base text-white hover:bg-white/40 hover:text-white"
        >
          {t('Claim')}
        </Button>
      ) : (
        <WalletModal />
      )}
    </form>
  )
}

export default TwineForm
