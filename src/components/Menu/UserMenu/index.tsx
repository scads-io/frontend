import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { useModal, UserMenu as UIKitUserMenu } from '@scads/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import WalletModal, { WalletView } from './WalletModal'

const UserMenu = () => {
  const { account } = useWeb3React()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const avatarSrc = null

  if (!account) {
    return <ConnectWalletButton scale='sm' />
  }

  return (
    <div onClick={onPresentWalletModal} className="magicHelper" onKeyDown={onPresentWalletModal} role="presentation"> 
      <UIKitUserMenu account={account} avatarSrc={avatarSrc} />
    </div>
  )
}

export default UserMenu
