import React from "react"
import styled from "styled-components"
import { Button } from "@scads-io/uikit"
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config"
import { Login, Config, ConnectorNames } from "./types"

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
}

const WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" })`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

const StyledP = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig

  return (
    <WalletButton
      variant="tertiary"
      onClick={() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === "Trust Wallet" && isIOS) {
          login(ConnectorNames.WalletConnect)
        } else {
          login(walletConfig.connectorId)
        }

        localStorage.setItem(walletLocalStorageKey, walletConfig.title)
        localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId)
        onDismiss()
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}>
      <Icon color="secondary" width="40px" mb="8px" />
      <StyledP>{title}</StyledP>
    </WalletButton>
  )
}

export default WalletCard
