import { MetamaskIcon, WalletConnect, TrustWallet, MathWallet, TokenPocket, BinanceChain, SafePal, Coin98 } from "@scads-io/uikit"

import { Config, ConnectorNames } from "./types"

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: MetamaskIcon,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 3,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },

  {
    title: "Binance Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
]

export default connectors
export const connectorLocalStorageKey = "connectorIdv2"
export const walletLocalStorageKey = "wallet"
