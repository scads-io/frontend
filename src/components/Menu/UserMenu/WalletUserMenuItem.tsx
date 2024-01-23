import React from 'react'
import { Flex, WarningIcon } from '@scads/uikit'
import { useTranslation } from 'contexts/Localization'
import { UserMenuItem } from './styles'

interface WalletUserMenuItemProps {
  hasLowBnbBalance: boolean
  onPresentWalletModal: () => void
}

const WalletUserMenuItem: React.FC<WalletUserMenuItemProps> = ({ hasLowBnbBalance, onPresentWalletModal }) => {
  const { t } = useTranslation()

  return (
    <UserMenuItem as='button' onClick={onPresentWalletModal}>
      <Flex alignItems='center' justifyContent='space-between' width='100%'>
        {t('Wallet')}
        {hasLowBnbBalance && <WarningIcon color='warning' width='24px' />}
      </Flex>
    </UserMenuItem>
  )
}

export default WalletUserMenuItem
