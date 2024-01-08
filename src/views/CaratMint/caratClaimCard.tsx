import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { Button, Flex, Toggle } from '@scads/uikit'
import { utils } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import tokens from 'config/constants/tokens'
import { useCurrencyBalance } from 'state/wallet/hooks'
import { ConnectWalletButtonInvest } from '../../components/ConnectWalletButton'
import {
  useLatestBoughtData,
  useUserMintedCaratAmount,
  useUserLatestRewardAmount,
  useUserCompoundExist,
} from '../../state/swap/hooks'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import useCaratMint from './hooks/useCaratMint'

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
  background-color:  ${({ theme }) => theme.isDark ? "rgba(255,255,255,0.08)" : "#E9EAEB"};
`

export default function CaratClaimCard() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const userMintedCaratAmount = useUserMintedCaratAmount()
  const claimedTWINE = userMintedCaratAmount ? parseFloat(utils.formatEther(userMintedCaratAmount.toString())) !== 0 ? parseFloat(utils.formatEther(userMintedCaratAmount.toString())).toFixed(3).toString() : 0 : 0
  const userLatestRewardAmount = useUserLatestRewardAmount()
  const compoundExistStatus = useUserCompoundExist()
  const latestRewardAmount = userLatestRewardAmount !== undefined ? parseFloat(utils.formatEther(userLatestRewardAmount.toString())) !== 0 ? parseFloat(utils.formatEther(userLatestRewardAmount.toString())).toFixed(3).toString() : 0 : 0

  const latestBoughtData = useLatestBoughtData()
  const latestBoughtMintDate = latestBoughtData && parseInt(latestBoughtData?.toString())
  const diffTime = latestRewardAmount === 0 ? 0 : Math.floor(latestBoughtMintDate / 60)

  const remainTime = {
    days: Math.floor(diffTime / (60 * 24)),
    hours: Math.floor((diffTime / 60) % 24),
    minutes: Math.floor(diffTime % 60),
  }

  const { account } = useActiveWeb3React()
  const scadsBalance = useCurrencyBalance(account ?? undefined, tokens.cake ?? undefined)

  const scadsOwned = scadsBalance === undefined ? '0' : parseFloat(scadsBalance?.toExact()).toFixed(3).toString()

  const { caratClaim, addCompoundAddress, removeCompoundAddress } = useCaratMint()
  const handleClaim = async () => {
    await caratClaim()
  }
  
  const [autoCompound, setAutoCompound] = useState(false)

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
      console.log(e)
    }
  }
  return (
    <div
        className={`flex flex-col items-center mx-auto w-full ${
          theme.isDark ? "text-white" : "text-black"
        } relative`}
      >
        <div className="mt-4 flex items-center">
          <Toggle id="Auto-compound" checked={autoCompound} onChange={() => startAutoCompounding()} scale="sm" />
          <p>
            &nbsp;
            {t('Auto-compound')}
          </p>
        </div>
        <p className="mt-4">{t("SCADS Owned:")} <span className='font-bold'>&nbsp;{scadsOwned}</span> Scads</p>
        <div className="flex flex-col items-center gap-3 w-full mt-4 text-xs md:text-base">
          <div className="flex justify-between w-full md:w-3/4">
            <p>{t("Time Invested")}</p>
            <span>&nbsp;{remainTime.days && remainTime.days >= 0 ? remainTime.days : 0} {t('Days')}{' '}
                {remainTime.hours && remainTime.hours >= 0 ? remainTime.hours : 0} {t('Hours')}{' '}
                {remainTime.minutes && remainTime.minutes >= 0 ? remainTime.minutes : 0} {t('Minutes')}</span>
          </div>
          <div className="flex justify-between w-full md:w-3/4">
            <p>{t("TWINE Minted:")}</p>
            <span>&nbsp;{latestRewardAmount}</span>
          </div>
          <div className="flex justify-between w-full md:w-3/4">
            <p>{t("TWINE Claimed:")}</p>
            <span>&nbsp;{claimedTWINE}</span>
          </div>
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
              id="swap-button"
              onClick={() => {
                handleClaim()
              }}
            >
              {t('Claim')}
            </StyledButton>
          )}
      </Flex>
    </div>
  )
}
