import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"
import { NewCard } from 'components/Card'
import ThemeSwitcher from '../ThemeSwitcher/index'
import Hamburger from './Hamburger'
import UserMenu from '../UserMenu'

const navLinks = [
  {
    id: 'n0',
    text: 'Home',
    path: '/',
  },
  {
    id: 'n1',
    text: 'Documents',
    path: '/',
  },
  {
    id: 'n2',
    text: 'News',
    path: '/news',
  },
  {
    id: 'n3',
    text: 'Invest',
    path: '/invest',
  },
  {
    id: 'n4',
    text: 'How To',
    path: '/howto',
  },
]

function MobileModal({ theme, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className='fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-50'
    >
      <NewCard
        className="modal w-auto min-w-[320px] max-w-full max-h-screen rounded-3xl p-4"
        theme={theme}
      >
        <div
          className={`modal-content flex flex-col justify-center gap-4 ${
            theme ? 'text-white' : 'text-black'
          }`}
        >
          <p className="text-xs font-medium break-words">
            Scads: 0x6D036B813C63c2c2D84De16369F2b532a37A5E97
          </p>
          <p className="text-xs font-medium break-words">
            Twine: 0xa86C718a38515699773a1FEB9c3A891A2BE982A1
          </p>
          <p className="text-xs font-medium break-words">
            USDT: 0x55d398326f99059ff775485246999027b3197955
          </p>
          <p className="text-xs font-medium break-words">
            USDC: 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
          </p>
        </div>
      </NewCard>
    </div>
  )
}
  
function MobileDocumentsModal({ value, isOpen, onClose }) {
  const { theme, setIsOpen } = value
  const { t } = useTranslation()
  if (!isOpen) return null

  return (
    <div
      className='fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-50'
    >
      <NewCard
        className="modal w-auto min-w-[320px] max-w-full max-h-screen rounded-3xl p-4"
        theme={theme}
      >
        <div
          className={`modal-documents-content flex flex-col justify-center gap-4 items-center ${
            theme ? 'text-white' : 'text-black'
          }`}
        >
          <Link
            to="/roadmap"
            className="text-xl font-medium"
            onClick={() => {
              setIsOpen(false)
              onClose()
            }}
          >
            {t("Roadmap")}
          </Link>
          <Link
            to="/usecases"
            className="text-xl font-medium"
            onClick={() => {
              setIsOpen(false)
              onClose()
            }}
          >
            {t("Use Cases")}
          </Link>
          <Link
            to="/whitepaper"
            className="text-xl font-medium"
            onClick={() => {
              setIsOpen(false)
              onClose()
            }}
          >
            {t("Whitepaper")}
          </Link>
          <Link
            to="/gitbook"
            className="text-xl font-medium"
            onClick={() => {
              setIsOpen(false)
              onClose()
            }}
          >
            {t("Gitbook")}
          </Link>
        </div>
      </NewCard>
    </div>
  )
}

function MobileLangModal({ theme, isOpen, onClose }) {
  const { setLanguage } = useTranslation()
  if (!isOpen) return null

  return (
    <div
      className='fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-50'
    >
      <NewCard
        className="modal w-auto min-w-[320px] max-w-full max-h-screen rounded-3xl p-4"
        theme={theme}
      >
        <div
          className={`mobile-lang-popup flex flex-col justify-center gap-4 ${
            theme ? 'text-white' : 'text-black'
          }`}
        >
          {languageList.map((lang) => (
            <button
              type='button'
              className="text-lg lg:text-base font-['Montserrat'] font-medium hover:text-[#B52761] transition-all duration-200"
              key={lang.locale}
              onClick={() => {
                  setLanguage(lang)
                  onClose()
              }}
              style={{ cursor: 'pointer' }}
            >
              {lang.language}
            </button>
          ))}
        </div>
      </NewCard>
    </div>
  )
}

const MobileNav = ({ value }) => {
  const { isOpen, setIsOpen, toggleTheme, theme } = value
  const { t } = useTranslation()

  const [isMobliModalOpen, setIsMobileModalOpen] = useState(false)
  const openMobileModal = () => {
      setIsMobileModalOpen(true)
  }

  const closeMobileModal = () => {
      setIsMobileModalOpen(false)
  }

  const [isMobliDocuentsModalOpen, setIsMobileDocumentsModalOpen] = useState(false)
  const openMobileDocumentsModal = () => {
      setIsMobileDocumentsModalOpen(true)
  }

  const closeMobileDocumentsModal = () => {
      setIsMobileDocumentsModalOpen(false)
  }

  const [isMobliLangSelectorOpen, setIsMobileLangSelectorOpen] = useState(false)
  const openMobileLangSelector = () => {
      setIsMobileLangSelectorOpen(true)
  }

  const closeMobileLangSelector = () => {
      setIsMobileLangSelectorOpen(false)
  }

  useEffect(() => {
    function handleClickOutsideMobileModal(event) {
      const modalContent = document.querySelector('.modal-content')
      if (modalContent && !modalContent.contains(event.target)) {
        closeMobileModal()
      }
    }

    if (isMobliModalOpen) {
      document.addEventListener('mousedown', handleClickOutsideMobileModal)
    } else {
      document.removeEventListener('mousedown', handleClickOutsideMobileModal)
    }

    function handleClickOutsideMobileDocumentsModal(event) {
      const modalContent = document.querySelector('.modal-documents-content')
      if (modalContent && !modalContent.contains(event.target)) {
        closeMobileDocumentsModal()
      }
    }

    if (isMobliDocuentsModalOpen) {
      document.addEventListener('mousedown', handleClickOutsideMobileDocumentsModal)
    } else {
      document.removeEventListener('mousedown', handleClickOutsideMobileDocumentsModal)
    }

    function handleClickOutsideMobileLangSelector(event) {
      const modalContent = document.querySelector('.mobile-lang-popup')
      if (modalContent && !modalContent.contains(event.target)) {
        closeMobileLangSelector()
      }
    }

    if (isMobliLangSelectorOpen) {
      document.addEventListener('mousedown', handleClickOutsideMobileLangSelector)
    } else {
      document.removeEventListener('mousedown', handleClickOutsideMobileLangSelector)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobileModal)
      document.removeEventListener('mousedown', handleClickOutsideMobileDocumentsModal)
      document.removeEventListener('mousedown', handleClickOutsideMobileLangSelector)
    }
  }, [isMobliModalOpen, isMobliDocuentsModalOpen, isMobliLangSelectorOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setIsMobileModalOpen(!isMobliModalOpen)
      setIsMobileDocumentsModalOpen(!isMobliDocuentsModalOpen)
      setIsMobileLangSelectorOpen(!isMobliLangSelectorOpen)
    }
  }
  
  return (
    <>
      <nav className="container fixed top-0 z-50 flex flex-col items-center justify-center mx-auto -translate-x-1/2 left-1/2">
        <NewCard
          className={`flex justify-between w-11/12 font-['Montserrat'] items-center lg:hidden px-2 py-3 mt-2 ${
            theme ? "bg-[#191919]" : "bg-[#E2E6E9]"}
          `}
          theme={theme}
        >
          <h3>
            <Link to="/">
              <link
                rel="preload"
                href={theme ? '/images/home/logo_dark.webp' : '/images/home/logo_light.webp'}
                as="image"
              />
              <img
                src={theme ? '/images/home/logo_dark.webp' : '/images/home/logo_light.webp'}
                className="max-w-[180px] max-h-[55px]"
                loading="eager"
                alt="logo"
              />
            </Link>
          </h3>
          <Hamburger
            value={{ theme, setIsOpen, isOpen }}
          />
        </NewCard>
        <AnimatePresence mode="wait">
          {isOpen && 
            <motion.div
              initial={{
                height: 0,
                overflow: "hidden",
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: 0,
                overflow: "hidden",
              }}
              transition={{ duration: 0.3 }}
              className="mobileNavBar w-11/12 py-5"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.1 }}
              >
                <NewCard
                  theme={theme}
                  className={`flex flex-col items-center justify-center w-full gap-7 py-10 backdrop-blur-[96px] ${
                      theme ? "text-[#B6B6B6]" : "text-black"
                  }`}
                >
                  <ThemeSwitcher
                    theme={theme}
                    toggleTheme={toggleTheme}
                    setIsOpen={setIsOpen}
                  />
                  <ul className="list-none uppercase flex flex-col items-center justify-center gap-7">
                    {navLinks.map((item, index) => (
                      <li key={item.id}>
                        {index === 1 ?
                          <div
                            id="open-documents-button"
                            className="text-xl font-medium hover:text-[#B52761] transition-all duration-200"
                            role="button"
                            onKeyDown={handleKeyDown}
                            onClick={openMobileDocumentsModal}
                            tabIndex={0}
                            aria-label="Documents"
                          >
                            {t(item.text)}
                          </div> : 
                          <Link
                            to={item.path}
                            className="text-xl font-medium hover:text-[#B52761] transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {t(item.text)}
                          </Link>
                        }
                      </li>
                    ))}
                  </ul>
                  <div
                    id="open-button"
                    role="button"
                    onKeyDown={handleKeyDown}
                    onClick={openMobileModal}
                    tabIndex={0}
                    aria-label="Open wallets"
                  >
                    <img
                      src="/images/home/wallets.svg"
                      className={`image-hover transition-all duration-200 ${!theme && 'invert'}`} 
                      alt="Wallets"
                    />
                  </div>
                  <div
                    id="lang-button"
                    role="button"
                    onKeyDown={handleKeyDown}
                    onClick={openMobileLangSelector}
                    tabIndex={0}
                    aria-label="Open LangSelector"
                  >
                    <img
                      src="/images/home/globe.svg"
                      className={`image-hover transition-all duration-200 ${theme && 'invert'}`}
                      alt="LangSelector"
                    />
                  </div>
                  <UserMenu theme={theme} />
                </NewCard>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>

      <MobileModal
        theme={theme}
        isOpen={isMobliModalOpen}
        onClose={closeMobileModal} 
      />
      <MobileDocumentsModal
        value={{theme, setIsOpen}}
        isOpen={isMobliDocuentsModalOpen} 
        onClose={closeMobileDocumentsModal} 
      />
      <MobileLangModal
        theme={theme}
        isOpen={isMobliLangSelectorOpen}
        onClose={closeMobileLangSelector}
      />
    </>
  )
}

export default MobileNav