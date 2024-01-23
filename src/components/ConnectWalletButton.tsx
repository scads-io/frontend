import React from 'react'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { useWalletModal } from 'components/WalletModal/index'

export const ConnectWalletButtonInvest = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <button
      type='button' 
      className="text-black text-xl bg-[#D9D9D9] px-16 py-3 rounded-3xl font-semibold hover:bg-opacity-40 transition duration-300"
      onClick={onPresentConnectModal} {...props}
    >
      {t('Connect Wallet')}
    </button>
  )
}

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <button 
      type='button' 
      className="font-bold text-[20px]" 
      onClick={onPresentConnectModal} {...props}
    >
      {t('Connect Wallet')}
    </button>
  )
}

export default ConnectWalletButton
