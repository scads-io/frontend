import { JSBI, TokenAmount } from '@scads/sdk'
import { utils } from 'ethers'
import { useTokenBalances } from 'state/wallet/hooks'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import tokens from 'config/constants/tokens'
import { getPulseAddress } from 'utils/addressHelpers'
import { useCaratBuyBackAmount, useCaratRewardRate } from 'hooks/useCaratTrade'
import { useCaratPrice } from 'hooks/useBUSDPrice'
// import BigNumber from 'bignumber.js'

// from the current swap inputs, compute the best trade and return it.
export function usePulseInfo() {
  const addr = getPulseAddress()
  const { caratPrice } = useCaratPrice()

  const relevantTokenBalances = useTokenBalances(addr, [tokens.cake, tokens.carat])
  const caratBalance = relevantTokenBalances[tokens.carat.address]
  const scadsBalance = relevantTokenBalances[tokens.cake.address]
  const rewardRate = useCaratRewardRate()
  const parseRewardRate = rewardRate !== undefined ? parseFloat(utils.formatEther(rewardRate?.toString())) : 0

  let nextRewardAmount = 0
  nextRewardAmount =
    scadsBalance !== undefined ? parseFloat(scadsBalance?.toSignificant().toString()) * 1440 * parseRewardRate * 0.8 : 0

  let inputCaratTotalAmount = 0
  if (caratBalance === undefined) {
    inputCaratTotalAmount = 0
  } else {
    inputCaratTotalAmount = parseFloat(caratBalance?.toExact()) + nextRewardAmount
  }

  const parsedCaratTokenAmount = new TokenAmount(
    tokens.carat,
    inputCaratTotalAmount !== 0
      ? JSBI.multiply(
          JSBI.BigInt(utils.parseEther(inputCaratTotalAmount.toFixed(18).toString())),
          JSBI.BigInt(DEFAULT_TOKEN_DECIMAL),
        )
      : '0',
  )

  const nextPulseAmount = useCaratBuyBackAmount(parsedCaratTokenAmount, tokens.cake)

  const scadsAmountOfPulse = scadsBalance !== undefined ? parseFloat(scadsBalance?.toExact().toString()) : 0
  const caratAmountOfPulse = caratBalance !== undefined ? parseFloat(caratBalance?.toExact().toString()) : 0
  const lockedBalance = scadsAmountOfPulse + caratAmountOfPulse * caratPrice

  return {
    nextPulsePartAmount: utils.formatEther(nextPulseAmount?.toExact()),
    lockedBalanceOfPulse: lockedBalance,
    scadsAmountOfPulse,
  }
}
