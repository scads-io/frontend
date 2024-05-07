import React from "react";
import useAuth from 'hooks/useAuth'
import config, { walletLocalStorageKey } from "./config"
import { Config } from "./types"
import WalletCard from "./WalletCard";

interface Props {
  onDismiss: () => void
}

const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey)
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority)

  if (!preferredWalletName) {
    return sortedConfig
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName)

  if (!preferredWallet) {
    return sortedConfig
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ]
}

const WalletList: React.FC<Props> = ({ onDismiss }) => {
  const { login } = useAuth()
  const sortedConfig = getPreferredConfig(config)

  return (
    <ul className="flex flex-wrap items-center justify-center gap-y-8 md:justify-between md:gap-x-4">
      {sortedConfig.map((wallet) => (
        <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
      ))}
    </ul>
  );
};

export default WalletList;
