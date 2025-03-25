import { configureChains, createClient } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { bsc } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [
    // publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: process.env.NEXT_PUBLIC_NODE_1,
        // webSocket: 'wss://your-custom-ws-rpc-url.com' 
      })
    })
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
    projectId: '0eb93e1311bacfc188ea2df6c42d02fe',
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
