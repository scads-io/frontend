import React, { useState } from 'react'
import {
  CloseIcon,
  IconButton,
} from '@scads/uikit'
import { parseUnits } from 'ethers/lib/utils'
import { useTranslation } from 'contexts/Localization'
import { NewCard } from 'components/Card'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import WalletInfo from './WalletInfo'
import WalletTransactions from './WalletTransactions'
import { ModalBody, ModalHeader, ModalTitle, ConnectModalContainer } from '../../Modal/styles'
import { InjectedModalProps } from "../../Modal"

interface WalletModalProps extends InjectedModalProps {
  theme: boolean
}

export const LOW_BNB_BALANCE = parseUnits('2', 'gwei')

const WalletModal: React.FC<WalletModalProps> = ({ theme, onDismiss }) => {
  const { t } = useTranslation()
  const { balance, fetchStatus } = useGetBnbBalance()
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)

  const [active, setIsActive] = useState(false)

  const walletBtnClickHandler = () => {
    setIsActive(false)
  }

  const transactionBtnClickHandler = () => {
    setIsActive(true)
  }

  return (
    <ConnectModalContainer className='connectWallet' minWidth='320px'>
      <NewCard
        className={`lg:!px-0 lg:backdrop-blur-3xl !bg-opacity-60 ${
          theme && "!bg-[#2B2B37]"
        } relative`}
        theme={theme}
      >
        <ModalHeader>
          <ModalTitle>
            <div
              className={`${theme ? "text-white" : "text-black"}`}
              >
              <h1 className="text-center text-2xl font-semibold">{t('Your Wallet')}</h1>
            </div>
          </ModalTitle>
          <IconButton variant='text' onClick={onDismiss}>
            <CloseIcon width='32px' />
          </IconButton>
        </ModalHeader>
        <div className={`${theme ? "text-white" : "text-black"} flex justify-center gap-10 lg:gap-10`}>
          <button
            type='button'
            onClick={walletBtnClickHandler}
            className={`${
              active
                ? "opacity-50"
                : "underline underline-offset-8 opacity-100"
            }`}
          >
            {t('Wallet')}
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
            {t('Transactions')}
          </button>
        </div>
        <ModalBody p='24px' maxWidth='400px' width='100%'>
          {active ?
            <WalletTransactions theme={theme} /> :
            <WalletInfo
              theme={theme}
              hasLowBnbBalance={hasLowBnbBalance}
              onDismiss={onDismiss}
            />
          }
        </ModalBody>
      </NewCard>
    </ConnectModalContainer>
  )
}

export default WalletModal
