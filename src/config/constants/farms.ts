import { serializeTokens } from './tokens'

const serializedTokens = serializeTokens()

const farms = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Scads',
    lpAddresses: {
      97: '0x8Ab5A56AfB69B31ACFbb2AC29bd2B131e2601f9F',
      56: '0x6D036B813C63c2c2D84De16369F2b532a37A5E97',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 1,
  //   lpSymbol: 'Scads-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 1,
    lpSymbol: 'Scads-BUSD LP',
    lpAddresses: {
      97: '0x948BE14e58e0C864A84340663E44f435273a85c9',
      56: '',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
    isCommunity: true,
  },
  // {
  //   pid: 2,
  //   lpSymbol: 'Scads-TWINE LP',
  //   lpAddresses: {
  //     97: '0x75aeA230DBBB176BC75974e81f21C86b5B822136',
  //     56: '',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.carat,
  //   isCommunity: true,
  // },
  {
    pid: 2,
    lpSymbol: 'Scads-USDT LP',
    lpAddresses: {
      97: '0x82ed3866dD95A7FF24070Df32E1069a15E42D12c',
      56: '',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
    isCommunity: true,
  },
  {
    pid: 3,
    lpSymbol: 'Scads-USDC LP',
    lpAddresses: {
      97: '0xF4FAf4eE271BB6Ea7d49E356a7E85E026934AFD4',
      56: '',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdc,
    isCommunity: true,
  },
]

export default farms
