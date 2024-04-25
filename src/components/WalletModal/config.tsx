import { MetamaskIcon, WalletConnect, TrustWallet, BinanceChain } from "@scads-io/uikit"

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
    title: "Binance Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 4,
  }
]

export default connectors
export const connectorLocalStorageKey = "connectorIdv2"
export const walletLocalStorageKey = "wallet"
