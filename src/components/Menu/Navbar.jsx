import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"
import Card from 'components/NewCard'
import ThemeSwitcher from './ThemeSwitcher/index'
import Hamburger from './Hamburger'
import UserMenu from './UserMenu'

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
      <Card
        className="modal w-auto min-w-[320px] max-w-full max-h-screen rounded-3xl p-4"
        theme={theme}
       >
        <div
          className={`modal-content flex flex-col justify-center items-center ${theme ? 'text-white' : 'text-black'}`}
        >
          <p className="text-[13px] font-medium break-words">
            Scads: 0x6D036B813C63c2c2D84De16369F2b532a37A5E97
          </p>
          <p className="text-[13px] font-medium break-words mt-4">
            Twine: 0xa86C718a38515699773a1FEB9c3A891A2BE982A1
          </p>
          <p className="text-[13px] font-medium break-words mt-4">
            USDT: 0x55d398326f99059ff775485246999027b3197955
          </p>
          <p className="text-[13px] font-medium break-words mt-4">
            USDC: 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
          </p>
        </div>
      </Card>
    </div>
  )
}

function MobileDocumentsModal({ value, isOpen, onClose }) {
  const { isDark, setIsOpen } = value
  const { t } = useTranslation()
  if (!isOpen) return null

  return (
    <div
      className='fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-50'
    >
      <Card
        className="modal w-auto min-w-[320px] max-w-full max-h-screen rounded-3xl p-4"
        theme={isDark}
       >
        <div
          className={`modal-documents-content flex flex-col justify-center items-center ${isDark ? 'text-white' : 'text-black'}`}
        >
          <Link
          to="/roadmap"
          className="text-xl font-medium"
          onClick={() => {
            setIsOpen(false)
            onClose()
            }
          }
        >
          {t("Roadmap")}
        </Link>
        <Link
          to="/usecases"
          className="text-xl font-medium mt-4"
          onClick={() => {
            setIsOpen(false)
            onClose()
            }
          }
        >
          {t("Use Cases")}
        </Link>
        <Link
          to="/whitepaper"
          className="text-xl font-medium mt-4"
          onClick={() => {
            setIsOpen(false)
            onClose()
            }
          }
        >
          {t("Whitepaper")}
        </Link>
        <Link
          to="/gitbook"
          className="text-xl font-medium mt-4"
          onClick={() => {
            setIsOpen(false)
            onClose()
            }
          }
        >
          {t("Gitbook")}
        </Link>
        </div>
      </Card>
    </div>
  )
}

function DesktopPopup({ theme, isOpen, onClose }) {
  if (!isOpen) return null

  const calculateTransform = () => {
    const buttonRect = document.getElementById('open-button').getBoundingClientRect()
    const translateX = buttonRect.left + buttonRect.width / 2 - 460 / 2
    const translateY = 125

    return `translate(${translateX}px, ${translateY}px)`
  }

  return (
    <div
      className="popup fixed z-50"
      style={{
        transform: calculateTransform(),
      }}
    >
      <Card
        className='p-4'
        theme={theme}
      >
        <div
          className={`popup-content flex flex-col justify-center ${theme ? 'text-white' : 'text-black'}`}
        >
          <p className="text-[15px] font-medium">
            Scads: 0x6D036B813C63c2c2D84De16369F2b532a37A5E97
          </p>
          <p className="text-[15px] font-medium mt-4">
            Twine: 0xa86C718a38515699773a1FEB9c3A891A2BE982A1
          </p>
          <p className="text-[15px] font-medium mt-4">
            USDT: 0x55d398326f99059ff775485246999027b3197955
          </p>
          <p className="text-[15px] font-medium mt-4">
            USDC: 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
          </p>
        </div>
      </Card>
    </div>
  )
}

function DesktopPopupDocuments({ value, isOpen, onClose }) {
  const { isDark, setOnScreen } = value
  const { t } = useTranslation()
  if (!isOpen) return null

  const calculateTransform = () => {
    const buttonRect = document.getElementById('documents-button').getBoundingClientRect()
    const translateX = buttonRect.left + buttonRect.width / 2 - 150 / 2
    const translateY = 125

    return `translate(${translateX}px, ${translateY}px)`
  }

  return (
    <div
      className="popup fixed z-50"
      style={{
        transform: calculateTransform(),
      }}
    >
      <Card
        className='p-4'
        theme={isDark}
      >
        <div
          className={`popup-document-content flex flex-col justify-center items-center ${isDark ? 'text-white' : 'text-black'}`}
        >
          <Link
            to="/roadmap"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Roadmap")}
          </Link>
          <Link
            to="/usecases"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200 mt-4"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Use Cases")}
          </Link>
          <Link
            to="/whitepaper"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200 mt-4"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Whitepaper")}
          </Link>
          <Link
            to="/gitbook"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200 mt-4"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Gitbook")}
          </Link>
        </div>
      </Card>
    </div>
  )
}

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { isDark, toggleTheme, setOnScreen, onScreen } = value
  const { t } = useTranslation()

  let textClass = 'text-[#B6B6B6]'

  let bgClass = '' // eslint-disable-line

  if (isDark) {
    textClass = 'text-[#B6B6B6]'
  } else {
    textClass = 'text-black'
  }
  
  const [isMobliModalOpen, setIsMobileModalOpen] = useState(false)

  const openMobileModal = () => {
    setIsMobileModalOpen(true)
  }

  const closeMobileModal = () => {
    setIsMobileModalOpen(false)
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const popupOpen = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const [isPopupDocumntsOpen, setIsPopupDocumntsOpen] = useState(false)

  const popupDocumentsOpen = () => {
    setIsPopupDocumntsOpen(true)
  }

  const closeDocumentsPopup = () => {
    setIsPopupDocumntsOpen(false)
  }

  const [isMobliDocuentsModalOpen, setIsMobileDocumentsModalOpen] = useState(false)

  const openMobileDocumentsModal = () => {
    setIsMobileDocumentsModalOpen(true)
  }

  const closeMobileDocumentsModal = () => {
    setIsMobileDocumentsModalOpen(false)
  }

  useEffect(() => {
    function handleClickOutsidePopup(event) {
      const popupContent = document.querySelector('.popup-content')
      if (popupContent && !popupContent.contains(event.target)) {
        closePopup()
      }
    }

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutsidePopup)
    } else {
      document.removeEventListener('mousedown', handleClickOutsidePopup)
    }

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

    function handleClickOutsidePopupDocuments(event) {
      const popupContent = document.querySelector('.popup-document-content')
      if (popupContent && !popupContent.contains(event.target)) {
        closeDocumentsPopup()
      }
    }

    if (isPopupDocumntsOpen) {
      document.addEventListener('mousedown', handleClickOutsidePopupDocuments)
    } else {
      document.removeEventListener('mousedown', handleClickOutsidePopupDocuments)
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

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidePopup)
      document.removeEventListener('mousedown', handleClickOutsideMobileModal)
      document.removeEventListener('mousedown', handleClickOutsidePopupDocuments)
      document.removeEventListener('mousedown', handleClickOutsideMobileDocumentsModal)
    }
  }, [isPopupOpen, isMobliModalOpen, isPopupDocumntsOpen, isMobliDocuentsModalOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setIsPopupOpen(!isPopupOpen)
      setIsPopupDocumntsOpen(!isPopupDocumntsOpen)
    }
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="container mx-auto flex justify-center">
        <Card
          className={`hidden lg:flex justify-between rounded-2xl mt-6 items-center fixed top-0 z-20 font-['Poppins'] w-10/12 py-3 px-28 transition-all duration-300 backdrop-blur-lg ${textClass} ${bgClass}`}
          theme={isDark}
        >
          <Link to="/">
            <img
              src={isDark ? '/images/home/logo_dark.svg' : '/images/home/logo_light.svg'}
              className='max-w-[240px]'
              alt="logo"
            />
          </Link>
          <div className="flex items-center xl:gap-9 lg:gap-[15px]">
            <ul className="list-none flex xl:gap-9 lg:gap-[15px]">
              <li>
                <div
                  id="documents-button"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  role="button"
                  onKeyDown={handleKeyDown}
                  onClick={popupDocumentsOpen}
                  tabIndex={0}
                  aria-label="Documents"
                >
                  {t("Documents")}
                </div>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  {t("News")}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setOnScreen(!onScreen)}
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                >
                  {t("Invest")}
                </button>
              </li>
              <li>
                <Link
                  to="/howto"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  {t("How To")}
                </Link>
              </li>
            </ul>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} setIsOpen={setIsOpen} />
            <div
              id="open-button"
              role="button"
              onKeyDown={handleKeyDown}
              onClick={popupOpen}
              tabIndex={0}
              aria-label="Open wallets"
            >
              <img src="/images/home/wallets.svg" className={`${isDark && 'invert'}`} alt="" />
            </div>
            <UserMenu />
          </div>
        </Card>
      </div>

      <DesktopPopup theme={isDark} isOpen={isPopupOpen} onClose={closePopup} />
      <DesktopPopupDocuments value={value} isOpen={isPopupDocumntsOpen} onClose={closeDocumentsPopup} />

      {/* MOBILE NAVBAR */}
      <div className="container mx-auto flex flex-col items-center justify-center fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <Card
          className={`flex justify-between w-11/12 items-center font-['Montserrat'] lg:hidden px-2 py-3 mt-2 ${
            isDark && "bg-[#191919]"
          } ${isDark === false && "bg-[#E2E6E9]"}`}
          theme={isDark}
        >
          <h3>
            <Link to="/">
              <img
                src={isDark ? '/images/home/logo_dark.svg' : '/images/home/logo_light.svg'}
                className="max-w-[180px]"
                alt="logo"
              />
            </Link>
          </h3>
          <Hamburger value={{ isDark, setIsOpen, isOpen }} />
        </Card>
        <AnimatePresence mode="wait">
          {isOpen && (
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
              className="w-11/12 py-6"
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
                <Card
                  theme={isDark}
                  className={`flex flex-col items-center justify-center w-full gap-10 py-10 backdrop-blur-[96px] ${
                    isDark ? "text-[#B6B6B6]" : "text-black"
                  }`}
                >
                  <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} setIsOpen={setIsOpen} />
                  <ul className="list-none uppercase flex flex-col items-center justify-center gap-10">
                  {navLinks.map((item, index) => (
                    <li key={item.id}>
                      {index === 1 ?
                        <div
                          id="open-documents-button"
                          className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                          role="button"
                          onKeyDown={handleKeyDown}
                          onClick={openMobileDocumentsModal}
                          tabIndex={0}
                          aria-label="Documents"
                        >
                          {t(item.text)}
                        </div> : 
                        <Link to={item.path} className="text-xl font-medium" onClick={() => setIsOpen(false)}>
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
                    <img src="/images/home/wallets.svg" className={`${isDark && 'invert'}`} alt="" />
                  </div>
                  <div>
                    <UserMenu />
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MobileModal theme={isDark} isOpen={isMobliModalOpen} onClose={closeMobileModal} />
      <MobileDocumentsModal value={{isDark, setIsOpen}} isOpen={isMobliDocuentsModalOpen} onClose={closeMobileDocumentsModal} />
    </>
  )
}

export default Navbar
