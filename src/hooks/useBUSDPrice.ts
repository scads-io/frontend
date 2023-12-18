import { ChainId, Currency, currencyEquals, JSBI, Price, TokenAmount } from '@scads/sdk'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import tokens, { mainnetTokens } from 'config/constants/tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { utils } from 'ethers'
import { useTradeExactIn } from 'hooks/Trades'
import { useCaratBuyAmount, useCaratBuyBackAmount } from 'hooks/useCaratTrade'
import { useBtcUSDPrice, useEthUSDPrice } from 'utils/calls/usdPrice'
import { tryParseAmount } from 'state/swap/hooks'
import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { multiplyPriceByAmount } from 'utils/prices'
import { wrappedCurrency } from '../utils/wrappedCurrency'
import { PairState, usePairs } from './usePairs'

const BUSD_MAINNET = mainnetTokens.usdt
const { wbnb: WBNB } = tokens

/**
 * Returns the price in BUSD of the input currency
 * @param currency currency to compute the BUSD price of
 */
export default function useBUSDPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WBNB, wrapped) ? undefined : currency, chainId ? WBNB : undefined],
      [wrapped?.equals(BUSD_MAINNET) ? undefined : wrapped, chainId === ChainId.MAINNET ? BUSD_MAINNET : undefined],
      [chainId ? WBNB : undefined, chainId === ChainId.MAINNET ? BUSD_MAINNET : undefined],
    ],
    [chainId, currency, wrapped],
  )
  const [[ethPairState, ethPair], [busdPairState, busdPair], [busdEthPairState, busdEthPair]] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WBNB)) {
      if (busdPair) {
        const price = busdPair.priceOf(WBNB)
        return new Price(currency, BUSD_MAINNET, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle busd
    if (wrapped.equals(BUSD_MAINNET)) {
      return new Price(BUSD_MAINNET, BUSD_MAINNET, '1', '1')
    }

    const ethPairETHAmount = ethPair?.reserveOf(WBNB)
    const ethPairETHBUSDValue: JSBI =
      ethPairETHAmount && busdEthPair ? busdEthPair.priceOf(WBNB).quote(ethPairETHAmount).raw : JSBI.BigInt(0)

    // all other tokens
    // first try the busd pair
    if (
      busdPairState === PairState.EXISTS &&
      busdPair &&
      busdPair.reserveOf(BUSD_MAINNET).greaterThan(ethPairETHBUSDValue)
    ) {
      const price = busdPair.priceOf(wrapped)
      return new Price(currency, BUSD_MAINNET, price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && busdEthPairState === PairState.EXISTS && busdEthPair) {
      if (busdEthPair.reserveOf(BUSD_MAINNET).greaterThan('0') && ethPair.reserveOf(WBNB).greaterThan('0')) {
        const ethBusdPrice = busdEthPair.priceOf(BUSD_MAINNET)
        const currencyEthPrice = ethPair.priceOf(WBNB)
        const busdPrice = ethBusdPrice.multiply(currencyEthPrice).invert()
        return new Price(currency, BUSD_MAINNET, busdPrice.denominator, busdPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, ethPair, ethPairState, busdEthPair, busdEthPairState, busdPair, busdPairState, wrapped])
}

export const useCakeBusdPrice = (): Price | undefined => {
  const cakeBusdPrice = useBUSDPrice(tokens.cake)
  return cakeBusdPrice
}

export const useBUSDCurrencyAmount = (currency: Currency, amount: number): number | undefined => {
  const { chainId } = useActiveWeb3React()
  const busdPrice = useBUSDPrice(currency)
  const wrapped = wrappedCurrency(currency, chainId)
  if (busdPrice) {
    return multiplyPriceByAmount(busdPrice, amount, wrapped.decimals)
  }
  return undefined
}

export const useBUSDCakeAmount = (amount: number): number | undefined => {
  const cakeBusdPrice = useCakeBusdPrice()
  if (cakeBusdPrice) {
    return multiplyPriceByAmount(cakeBusdPrice, amount)
  }
  return undefined
}

export const useBNBBusdPrice = (): Price | undefined => {
  const bnbBusdPrice = useBUSDPrice(tokens.wbnb)
  return bnbBusdPrice
}

// from the current swap inputs, compute the best trade and return it.
export function useCaratPrice() {
  const caratPrice = useCaratBuyBackAmount(
    new TokenAmount(
      tokens.carat,
      JSBI.multiply(JSBI.BigInt(utils.parseEther('1')), JSBI.BigInt(DEFAULT_TOKEN_DECIMAL)),
    ),
    tokens.cake,
  )
  const scadsAmount = tryParseAmount('1', tokens.cake)
  const scadsPrice = useTradeExactIn(scadsAmount, tokens.usdt)

  return {
    caratPrice: parseFloat(utils.formatEther(caratPrice.toExact().toString())),
  }
}

export function useCaratAmountUSD(amount: BigNumber) {
  const caratPrice = useCaratBuyAmount(new TokenAmount(tokens.carat, JSBI.BigInt(amount)), tokens.cake)
  const scadsAmount = tryParseAmount('1', tokens.cake)
  const scadsPrice = useTradeExactIn(scadsAmount, tokens.usdt)

  return parseFloat(caratPrice?.toExact() ?? '0') * parseFloat(scadsPrice?.outputAmount?.toExact() ?? '0')
}

export function useEthSnacksAmountUSD(amount: BigNumber) {
  const ethsnacksPrice = useCaratBuyAmount(new TokenAmount(tokens.ethsnacks, JSBI.BigInt(amount)), tokens.weth)
  const ethusdPrice = useEthUSDPrice()

  return parseFloat(ethsnacksPrice?.toExact() ?? '0') * ethusdPrice
}

export function useBtcSnacksAmountUSD(amount: BigNumber) {
  const btcsnacksPrice = useCaratBuyAmount(new TokenAmount(tokens.btcsnacks, JSBI.BigInt(amount)), tokens.wbtc)
  const btcusdPrice = useBtcUSDPrice()

  return parseFloat(btcsnacksPrice?.toExact() ?? '0') * btcusdPrice
}
