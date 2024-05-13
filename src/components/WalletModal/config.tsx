import { MetamaskIcon, WalletConnect, TrustWallet } from "@scads-io/uikit"

import { Config, ConnectorNames } from "./types"

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: MetamaskIcon,
    connectorId: ConnectorNames.MetaMask,
    priority: 1,
    href: "https://metamask.app.link/dapp/scads.io/"
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
    href: "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://scads.io/",
  },
]

export default connectors
export const connectorLocalStorageKey = "connectorIdv2"
export const walletLocalStorageKey = "wallet"
