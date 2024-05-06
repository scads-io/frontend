import { Chain } from 'wagmi'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0x72dba3Fa54C73D9EDB493e9F4eDf884439B1eBC4',
    blockCreated: 20455688,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xb66a4fE12138C4391A98F29E34EFE4Cc7A445AE5',
    blockCreated: 21965366,
  },
  testnet: true,
}

export const CHAINS_TESTNET = [
  bscTest,
]

export const CHAINS = [
  bsc,
  bscTest,
]
export const CHAIN_IDS = CHAINS.map((c) => c.id)
