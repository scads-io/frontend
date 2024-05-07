import React from "react"
import { isDesktop } from "react-device-detect";
import { connectorLocalStorageKey, walletLocalStorageKey, walletConnectConfig } from "./config"
import { Login, Config } from "./types"

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
}

const WalletCard: React.FC<Props> = ({ walletConfig, login, onDismiss }) => {
  const { title, icon: Icon } = walletConfig

  return (
    <li
      key={title}
      className="mx-auto flex min-w-32 justify-center md:min-w-0"
    >
      <button
        type="button"
        className="group flex flex-col items-center"
        onClick={() => {
          if (title === "Trust Wallet" && walletConnectConfig && isDesktop) {
            login(walletConnectConfig.connectorId);
            localStorage?.setItem(walletLocalStorageKey, walletConnectConfig.title);
            localStorage?.setItem(connectorLocalStorageKey, walletConnectConfig.connectorId);
            onDismiss();
            return;
          }
          if (!window.ethereum && walletConfig.href) {
            window.open(walletConfig.href, "_blank", "noopener noreferrer");
          } else {
            login(walletConfig.connectorId);
            localStorage?.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage?.setItem(connectorLocalStorageKey, walletConfig.connectorId);
          }
        }}
         >
        <Icon
          width="48px"
          heigh="48px"
          className="transition-transform group-hover:-translate-y-1 group-hover:scale-105"
        />
        <span className="text-white transition-opacity group-hover:opacity-70">
          {title}
        </span>
      </button>
    </li>
  )
}

export default WalletCard
