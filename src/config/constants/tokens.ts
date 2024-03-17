import { ChainId, Token } from '@scads/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = defineTokens({
  wbnb: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x6D036B813C63c2c2D84De16369F2b532a37A5E97',
    18,
    'Scads',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  carat: new Token(
    MAINNET,
    '0xa86C718a38515699773a1FEB9c3A891A2BE982A1',
    18,
    'TWINE',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  bscdefi: new Token(
    MAINNET,
    '0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3',
    18,
    'BSCDEFI',
    'BSC Defi blue chips token',
    'https://powerpool.finance/',
  ),
  safemoon: new Token(
    MAINNET,
    '0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3',
    9,
    'SAFEMOON',
    'Safemoon Token',
    'https://safemoon.net/',
  ),
  bondly: new Token(
    MAINNET,
    '0x96058f8C3e16576D9BD68766f3836d9A33158f89',
    18,
    'BONDLY',
    'Bondly Token',
    'https://www.bondly.finance/',
  ),
  dai: new Token(
    MAINNET,
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  usdt: new Token(
    MAINNET,
    '0x55d398326f99059fF775485246999027B3197955',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  btcb: new Token(
    MAINNET,
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    18,
    'BTCB',
    'Binance BTC',
    'https://bitcoin.org/',
  ),
  ust: new Token(
    MAINNET,
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    18,
    'UST',
    'Wrapped UST Token',
    'https://mirror.finance/',
  ),
  eth: new Token(
    MAINNET,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'ETH',
    'Binance-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    MAINNET,
    '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    18,
    'USDC',
    'Binance-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),
  syrup: new Token(
    MAINNET,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  wbtc: new Token(
    MAINNET,
    '0xf486789B0B704470EFc2d5Bc295C3eCbc80882f3',
    18,
    'WBTC',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  weth: new Token(
    MAINNET,
    '0xd26ddc719E157f67b7f194Bccddb6023328239DE',
    18,
    'WETH',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  ethsnacks: new Token(
    MAINNET,
    '0x56B35F561EC6A7943974C652De6f495353053b6A',
    18,
    'ETHSNACKS',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  btcsnacks: new Token(
    MAINNET,
    '0xF038bcAeC46D92498e8Ce7C06e96Bc7086360aC7',
    18,
    'BTCSNACKS',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
} as const)

export const testnetTokens = defineTokens({
  wbnb: new Token(
    TESTNET,
    '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  cake: new Token(
    TESTNET,
    '0x8Ab5A56AfB69B31ACFbb2AC29bd2B131e2601f9F',
    18,
    'Scads',
    'Scads Token',
    'https://scads.io/',
  ),
  usdt: new Token(TESTNET, '0xb06D957d777e3dC7f3794e732DB45092AC8C5cF0', 18, 'USDT', 'USDT Token', 'https://usdt.fi/'),
  usdc: new Token(TESTNET, '0x497303D3573B20B75724D7C3f1B39B19E72a0f53', 18, 'USDC', 'USDC Token', 'https://usdc.fi/'),
  carat: new Token(
    TESTNET,
    '0xF5284a7C7c47BAb1C98959786D389a4C60c94Faf',
    18,
    'TWINE',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  ethsnacks: new Token(
    TESTNET,
    '0xbA0EDe81112Fdd46690FA5C7e014d8aB313679d5',
    18,
    'ETHSNACKS',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  btcsnacks: new Token(
    TESTNET,
    '0x3721783B82f50cA9ed77d65117930066c57C1cFD',
    18,
    'BTCSNACKS',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  syrup: new Token(
    TESTNET,
    '0xF896e5a311438e474958bd685dACfC2b3C4eE1C0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  wbtc: new Token(
    TESTNET,
    '0xf486789B0B704470EFc2d5Bc295C3eCbc80882f3',
    18,
    'WBTC',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
  weth: new Token(
    TESTNET,
    '0xd26ddc719E157f67b7f194Bccddb6023328239DE',
    18,
    'WETH',
    'ScadsSwap Token',
    'https://scads.io/',
  ),
} as const)

const tokens = () => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens
