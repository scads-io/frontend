import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Hamburger from 'components/main-navigation/hamburger'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from './mobile-menu'
import clsx from 'clsx'
import AddressDropdown from './address-dropdown'
import WalletModal from '../WalletModal/wallet-modal'
import NavLinks from './navlinks'
import SwapModal from '../swap/swap-modal'
import LanguageDropdown from './language-dropdown'

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [isOpen])

  const navClasses = clsx(
    'fixed top-0 z-50 flex w-screen items-center justify-between transition-all text-white',
    scrolled ? 'bg-white/[.02] backdrop-blur-lg' : 'bg-transparent',
  )

  return (
    <nav className={navClasses}>
      <div className="mx-auto flex w-full justify-between py-2 md:max-w-[768px] md:py-4 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <div className="flex min-w-full items-center justify-between gap-x-12 px-4 md:min-w-0 md:justify-normal lg:px-0">
          <Link href="/" className="z-50 flex items-center gap-x-2 text-base font-bold text-white md:text-xl">
            <div className="relative size-6 md:size-9">
              <Image src="/images/logo.svg" alt="logo" fill className="object-cover" />
            </div>{' '}
            SCADS
          </Link>
          <div className="flex items-center gap-x-2 md:hidden">
            <SwapModal navigation />
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        <div className="absolute left-1/2 md:-translate-x-[60%] lg:-translate-x-1/2">
          <NavLinks />
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-3 lg:gap-x-6">
          <AddressDropdown />
          <LanguageDropdown />
          <WalletModal navigation />
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                  'fixed left-1/2 top-0 z-40 w-auto -translate-x-1/2 overflow-hidden rounded-b-3xl bg-dark-blue px-12',
                )}
              >
                <MobileMenu close={() => setIsOpen(!isOpen)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default MainNavigation
