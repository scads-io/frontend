import { configureChains, createClient } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { bsc } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [
    publicProvider(),
  ],
)

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId: process.env.NODE_ENV !== 'production' ?
      '0eb93e1311bacfc188ea2df6c42d02fe' : '74251247fff43babdb46edbab5b2a868' ,
    showQrModal: true,
    qrModalOptions: {
      themeMode: 'dark',
    }
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
})

export const client = createClient({
  autoConnect: false,
  provider,
  webSocketProvider,
  connectors: [
    metaMaskConnector,
    injectedConnector,
    walletConnectConnector,
  ],
})
