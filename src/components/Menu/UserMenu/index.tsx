import React from 'react'
import { useWeb3React } from '@scads-io/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useModal } from "../../Modal"
import WalletModal from './WalletModal'
import Menu from './Menu'

const UserMenu = ({ theme }) => {
  const { account } = useWeb3React()
  const [onPresentWalletModal] = useModal(<WalletModal theme={theme} />)

  if (!account) {
    return <ConnectWalletButton scale='sm' />
  }

  return (
    <div
      onClick={onPresentWalletModal}
      className="magicHelper"
      onKeyDown={onPresentWalletModal}
      role="presentation"
    > 
      <Menu account={account} />
    </div>
  )
}

export default UserMenu
