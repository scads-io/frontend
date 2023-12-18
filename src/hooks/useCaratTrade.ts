import { Token, TokenAmount } from '@scads/sdk'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useCaratTokenContract, useScadsContract, useCaratContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'
import useActiveWeb3React from './useActiveWeb3React'
/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */
export function useCaratBuyAmount(tokenAmount: TokenAmount, token1: Token): TokenAmount | null {
  const inputTokenAddress = tokenAmount?.token?.address
  const contract = useCaratTokenContract(inputTokenAddress, false)

  const value = new BigNumber(tokenAmount?.toFixed(0)).toString()
  const inputs = [value]
  const result = useSingleCallResult(contract, 'calculateBuyAmount', inputs).result
  return useMemo(() => {
    const requireAmount = new BigNumber(result?.toString() ?? 0) ?? 0
    return requireAmount ? new TokenAmount(token1, requireAmount.toString()) : undefined
  }, [token1, result])
}

export function useScadsBuyAmount(tokenAmount: TokenAmount, token1: Token): TokenAmount | null {
  const inputTokenAddress = tokenAmount?.token?.address
  const contract = useScadsContract()

  const value = new BigNumber(tokenAmount?.toFixed(0)).toString()
  const inputs = [value]
  const result = useSingleCallResult(contract, 'calculateBuyAmount', inputs).result
  return useMemo(() => {
    const requireAmount = new BigNumber(result?.toString() ?? 0) ?? 0
    return requireAmount ? new TokenAmount(token1, requireAmount.toString()) : undefined
  }, [token1, result])
}

export function useCaratBuyBackAmount(tokenAmount: TokenAmount, token1: Token): TokenAmount | null {
  const inputTokenAddress = tokenAmount?.token?.address
  const contract = useCaratTokenContract(inputTokenAddress, false)

  const value = new BigNumber(tokenAmount?.toFixed(0)).toString()

  const inputs = [value]
  const result = useSingleCallResult(contract, 'calculateRedeemAmount', inputs).result
  return useMemo(() => {
    const requireAmount = new BigNumber(result?.toString() ?? 0).times(DEFAULT_TOKEN_DECIMAL) ?? 0
    return requireAmount ? new TokenAmount(token1, requireAmount.toString()) : undefined
  }, [token1, result])
}

export function useScadsBuyBackAmount(tokenAmount: TokenAmount, token1: Token): TokenAmount | null {
  const contract = useScadsContract()

  const value = new BigNumber(tokenAmount?.toFixed(0)).toString()

  const inputs = [value]
  const result = useSingleCallResult(contract, 'calculateRedeemAmount', inputs).result
  return useMemo(() => {
    const requireAmount = new BigNumber(result?.toString() ?? 0).times(DEFAULT_TOKEN_DECIMAL) ?? 0
    return requireAmount ? new TokenAmount(token1, requireAmount.toString()) : undefined
  }, [token1, result])
}

export function useScadsTotalSupply() {
  const contract = useScadsContract()
  const result = useSingleCallResult(contract, 'totalSupply', []).result
  return result
}

export function useCaratTotalSupply() {
  const contract = useCaratContract()
  const result = useSingleCallResult(contract, 'totalSupply', []).result
  return result
}

export function useScadsLatestMintInfo() {
  const { account } = useActiveWeb3React()
  const contract = useScadsContract()
  const result = useSingleCallResult(contract, '_lastestMintInfo', [account]).result
  return result
}

export function useScadsLatestSellInfo() {
  const { account } = useActiveWeb3React()
  const contract = useScadsContract()
  const result = useSingleCallResult(contract, '_lastestSellInfo', [account]).result
  return result
}

export function useCaratRewardRate() {
  const contract = useCaratContract()
  const result = useSingleCallResult(contract, 'currentRewardSpeed', []).result
  return result
}

export function useLatestBoughtInfo() {
  const { account } = useActiveWeb3React()
  const contract = useCaratContract()
  const result = useSingleCallResult(contract, 'getTimeLatestRewardClaimed', [account]).result
  return result
}

export function useMintedCaratAmount() {
  const { account } = useActiveWeb3React()
  const contract = useCaratContract()
  const result = useSingleCallResult(contract, 'userMintedCaratAmount', [account]).result
  return result
}

export function useLatestRewardAmount() {
  const { account } = useActiveWeb3React()
  const contract = useCaratContract()
  const result = useSingleCallResult(contract, 'getLatestRewardAmount', [account]).result
  return result
}

export function useCompoundAddressExist() {
  const { account } = useActiveWeb3React()
  const contract = useCaratContract()
  const result = useSingleCallResult(contract, 'autoCompoundAddressExists', [account]).result

  return result !== undefined && result[0]
}
