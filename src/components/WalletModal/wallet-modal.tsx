import React, { useState } from 'react'
import { Wallet } from 'lucide-react'
import { useWeb3React } from '@scads-io/wagmi'
import { cn } from 'lib/utils'
import { useTranslation } from 'contexts/Localization'
import { RU } from 'config/localization/languages'
import { useWalletModal } from 'hooks/use-wallet-modal'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import WalletDetails from './wallet-details'
import WalletList from './wallet-list'

const WalletModal: React.FC<{ navigation?: boolean }> = ({ navigation }) => {
  const { account } = useWeb3React()
  const walletModal = useWalletModal()
  const { t, currentLanguage } = useTranslation()

  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(navigation && 'mx-auto max-w-40', currentLanguage === RU && navigation && 'max-w-44')}
      >
        {account ? (
          <>
            <Wallet className="hidden size-7 transition-transform hover:scale-110 md:block md:size-5 lg:size-6" />
            <span className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white/20 px-4 py-2 text-xl text-white transition-colors duration-300 hover:bg-white/40 md:hidden">
              {t('Wallet')}
            </span>
          </>
        ) : (
          <span
            className={cn(
              'inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-white transition-colors duration-300',
              navigation
                ? 'button-primary border border-[#8a6cff] text-xs font-bold md:text-sm'
                : 'bg-white/10 text-xl font-medium hover:bg-white/20 md:text-base',
            )}
          >
            {t('Connect wallet')}
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[340px] space-y-4 rounded-3xl border-none bg-dark-blue backdrop-blur-2xl md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">{account ? 'Your wallet' : 'Wallets'}</DialogTitle>
        </DialogHeader>
        {account ? <WalletDetails onDismiss={() => setOpen(false)} /> : <WalletList onDismiss={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  )
}

export default WalletModal
