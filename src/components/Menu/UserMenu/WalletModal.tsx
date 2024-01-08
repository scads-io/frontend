import React, { useState } from 'react'
import {
  CloseIcon,
  IconButton,
  InjectedModalProps,
  ModalBody,
  ConnectModalContainer,
  ModalHeader as UIKitModalHeader,
  ModalTitle,
} from '@scads/uikit'
import useTheme from 'hooks/useTheme'
import { parseUnits } from 'ethers/lib/utils'
import { useTranslation } from 'contexts/Localization'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import WalletInfo from './WalletInfo'
import WalletTransactions from './WalletTransactions'

export enum WalletView {
  WALLET_INFO,
  TRANSACTIONS,
}

interface WalletModalProps extends InjectedModalProps {
  initialView?: WalletView
}

export const LOW_BNB_BALANCE = parseUnits('2', 'gwei')

const WalletModal: React.FC<WalletModalProps> = ({ initialView = WalletView.WALLET_INFO, onDismiss }) => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { balance, fetchStatus } = useGetBnbBalance()
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)

  const [active, setIsActive] = useState(false);

  const walletBtnClickHandler = () => {
    setIsActive(false);
  };

  const transactionBtnClickHandler = () => {
    setIsActive(true);
  };

  return (
    <ConnectModalContainer className='connectWallet' title={t('Welcome!')} minWidth='320px'>
      <UIKitModalHeader>
        <ModalTitle>
          <div
            className={`${theme.isDark ? "text-white" : "text-black"}`}
            >
            <h1 className="text-center text-2xl font-semibold">Your Wallet</h1>
          </div>
        </ModalTitle>
        <IconButton variant='text' onClick={onDismiss}>
          <CloseIcon width='32px' />
        </IconButton>
      </UIKitModalHeader>
      <div className={`${theme.isDark ? "text-white" : "text-black"} flex justify-center gap-10 lg:gap-10`}>
        <button
          type='button'
          onClick={walletBtnClickHandler}
          className={`${
            active
              ? "opacity-50"
              : "underline underline-offset-8 opacity-100"
          }`}
        >
          SCADS
        </button>
        <button
          type='button'
          onClick={transactionBtnClickHandler}
          className={
            active
              ? "underline underline-offset-8 opacity-100"
              : " opacity-50"
          }
        >
          TWINE
        </button>
      </div>
      <ModalBody p='24px' maxWidth='400px' width='100%'>
        {!active && <WalletInfo hasLowBnbBalance={hasLowBnbBalance} onDismiss={onDismiss} />}
        {active && <WalletTransactions />}
      </ModalBody>
    </ConnectModalContainer>
  )
}

export default WalletModal
