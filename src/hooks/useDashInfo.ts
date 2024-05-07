import { utils } from 'ethers'
import { useTokenBalances } from 'state/wallet/hooks'
import tokens from 'config/constants/tokens'
import { getTreasuryAddress } from 'utils/addressHelpers'
import { useScadsTotalSupply, useCaratTotalSupply, useCaratRewardRate } from 'hooks/useCaratTrade'
import { useCaratPrice } from 'hooks/useBUSDPrice'

// from the current swap inputs, compute the best trade and return it.
export function useDashInfo() {
  const treasuryAddr = getTreasuryAddress()
  const totalSupplyScads = useScadsTotalSupply()
  const totalSupplyCarat = useCaratTotalSupply()
  const { caratPrice } = useCaratPrice()
  const rewardSpeed = useCaratRewardRate()

  const treasuryTokenBalances = useTokenBalances(treasuryAddr, [tokens.cake, tokens.carat, tokens.usdt, tokens.usdc])
  const scadsBalanceInTreasury = treasuryTokenBalances[tokens.cake.address]
  const caratBalanceInTreasury = treasuryTokenBalances[tokens.carat.address]
  const usdtBalanceInTreasury = treasuryTokenBalances[tokens.usdt.address]
  const usdcBalanceInTreasury = treasuryTokenBalances[tokens.usdc.address]

  const totalCaratAmount = totalSupplyCarat !== undefined ? parseFloat(utils.formatEther(totalSupplyCarat?.toString())) : 0

  const totalScadsAmount =
    totalSupplyScads !== undefined ? parseFloat(utils.formatEther(totalSupplyScads?.toString())) : 0

  const usdtAmountOfTreasury =
    usdtBalanceInTreasury !== undefined ? parseFloat(usdtBalanceInTreasury?.toExact().toString()) : 0
  const usdcAmountOfTreasury =
    usdcBalanceInTreasury !== undefined ? parseFloat(usdcBalanceInTreasury?.toExact().toString()) : 0
  const scadsAmountOfTreasury =
    scadsBalanceInTreasury !== undefined ? parseFloat(scadsBalanceInTreasury?.toExact().toString()) : 0
  const caratAmountOfTreasury =
    caratBalanceInTreasury !== undefined ? parseFloat(caratBalanceInTreasury?.toExact().toString()) : 0
  const lockedBalance =
    usdtAmountOfTreasury + usdcAmountOfTreasury + scadsAmountOfTreasury + caratAmountOfTreasury * caratPrice

  const parseRewardRate = rewardSpeed !== undefined ? parseFloat(utils.formatEther(rewardSpeed?.toString())) : 0

  return {
    heldScadsAmount: totalScadsAmount,
    totalCarat: totalCaratAmount,
    lockedBalance,
    treasuryTokenBalances,
    rewardSpeed: parseRewardRate,
  }
}
