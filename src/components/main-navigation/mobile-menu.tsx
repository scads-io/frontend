import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'contexts/Localization'
import { cn } from 'lib/utils'
import { RU } from 'config/localization/languages'
import AddressDropdown from './address-dropdown'
import WalletModal from '../WalletModal/wallet-modal'
import Socials from '../socials'
import LanguageDropdown from './language-dropdown'

interface MobileMenuProps {
  close: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ close }) => {
  const { t, currentLanguage } = useTranslation()

  return (
    <div className="pb-8 space-y-8 text-white md:hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className={cn('mt-24 flex justify-center gap-x-8 text-xl font-medium', currentLanguage === RU && 'text-base')}
      >
        <div className="flex flex-col items-start gap-y-4">
          <Link href="/tokenomics" onClick={close}>
            {t('Tokenomics')}
          </Link>
          <AddressDropdown />
          <LanguageDropdown />
        </div>
        <div className={cn('flex flex-col gap-y-4')}>
          <Link href="/use-cases" onClick={close}>
            {t('Use cases')}
          </Link>
          <Link href="/whitepaper" onClick={close} className="whitespace-nowrap">
            {t('Whitepaper')}
          </Link>
          <Link href="/faq" onClick={close}>
            {t('FAQ')}
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center"
      >
        <WalletModal />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Socials navigation />
      </motion.div>
    </div>
  )
}

export default MobileMenu
