import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, InjectedModalProps, LinkExternal, Skeleton, Text, WarningIcon } from '@scads/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import useTokenBalance, { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { getBscScanLink } from 'utils'
import { getFullDisplayBalance, formatBigNumber } from 'utils/formatBalance'
import tokens from 'config/constants/tokens'
import CopyAddress from './CopyAddress'

interface WalletInfoProps {
  hasLowBnbBalance: boolean
  onDismiss: InjectedModalProps['onDismiss']
}

const StyledFlex= styled(Flex)`
  display: flex;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;
  margin-bottom: 24px;
  background: #FFB23719;
  border-color: #e68e00;
`

const StyledFlexImg= styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
  font-family: 'Poppins';
`

const StyledLinkExternal = styled(LinkExternal)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
  font-family: 'Poppins';
`

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
  background-color:  ${({ theme }) => theme.isDark ? "rgba(255,255,255,0.08)" : "#E9EAEB"};
  font-family: 'Poppins';
`

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowBnbBalance, onDismiss }) => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { balance, fetchStatus } = useGetBnbBalance()
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useTokenBalance(tokens.cake.address)
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss()
    logout()
  }

  return (
    <>
      <div
        className={`${theme.isDark ? "text-white" : "text-black"} font-['Poppins']`}
        >
        <h1 className="text-2 font-semibold">YOUR ADDRESS</h1>
      </div>
      <CopyAddress account={account} mb='24px' />
      {hasLowBnbBalance && (
        <StyledFlex mb='24px'>
          <Box>
            <StyledFlexImg>
              <WarningIcon color={`${theme.isDark && "invert"}`} marginRight='5px' />
              <StyledText bold>{t('BNB Balance Low')}</StyledText>
            </StyledFlexImg>
            <StyledText bold>{t('You need BNB for transaction fees.')}</StyledText>
          </Box>
        </StyledFlex>
      )}
      <Flex alignItems='center' justifyContent='space-between'>
        <StyledText bold>{t('BNB Balance')}</StyledText>
        {fetchStatus !== FetchStatus.SUCCESS ? (
          <Skeleton height='22px' width='60px' />
        ) : (
          <StyledText bold>{formatBigNumber(balance, 6)}</StyledText>
        )}
      </Flex>
      <Flex alignItems='center' justifyContent='space-between' mb='24px'>
        <StyledText bold>{t('Scads Balance')}</StyledText>
        {cakeFetchStatus !== FetchStatus.SUCCESS ? (
          <Skeleton height='22px' width='60px' />
        ) : (
          <StyledText bold>{getFullDisplayBalance(cakeBalance, 18, 3)}</StyledText>
        )}
      </Flex>
      <Flex alignItems='center' justifyContent='end' mb='24px'>
        <StyledLinkExternal href={getBscScanLink(account, 'address')}>{t('View on BscScan')}</StyledLinkExternal>
      </Flex>
      <StyledButton width='100%' onClick={handleLogout}>
        {t('Disconnect Wallet')}
      </StyledButton>
    </>
  )
}

export default WalletInfo
