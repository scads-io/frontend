import React from "react"
import styled from "styled-components"
import { Grid, Box } from "@scads-io/uikit"
import { NewCard } from "components/Card"
import { useThemeManager } from 'state/user/hooks'
import { ModalBody, ModalCloseButton, ConnectModalContainer, ModalHeader, ModalTitle } from "../Modal"
import WalletCard from "./WalletCard"
import config, { walletLocalStorageKey } from "./config"
import { Config, Login } from "./types"

interface Props {
  login: Login
  onDismiss?: () => void
  displayCount?: number
  t: (key: string) => string
}

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
`

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
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

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, t }) => {
  const [isDark] = useThemeManager()
  const sortedConfig = getPreferredConfig(config)

  return (
    <ConnectModalContainer className='connectWallet' minWidth="320px">
      <NewCard
        className={`lg:!px-0 lg:backdrop-blur-3xl !bg-opacity-60 ${
          isDark && "!bg-[#2B2B37]"
        } relative`}
        theme={isDark}
      >
        <ModalHeader>
          <ModalTitle>
            <StyledDiv>
              <StyledH1>{t('Connect Wallet')}</StyledH1>
            </StyledDiv>
          </ModalTitle>
          <ModalCloseButton onDismiss={onDismiss} />
        </ModalHeader>
        <ModalBody>
          <Box py="24px" maxHeight="453px" overflowY="auto">
            <Grid gridTemplateColumns="1fr 1fr">
              {sortedConfig.map((wallet) => (
                <Box key={wallet.title}>
                  <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
                </Box>
              ))}
            </Grid>
          </Box>
        </ModalBody>
      </NewCard>
    </ConnectModalContainer>
  )
}

export default ConnectModal
