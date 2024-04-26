import React, { useState, useEffect } from 'react'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import { NewCard } from 'components/Card'
import ThemeSwitcher from './ThemeSwitcher/index'
import UserMenu from './UserMenu'
import MobileNav from './MobileNav'

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
      <NewCard
        className='p-4'
        theme={theme}
      >
        <div
          className={`popup-content flex flex-col justify-center gap-4 ${
            theme ? 'text-white' : 'text-black'
          }`}
        >
          <p className="text-sm font-medium">
            Scads: 0x6D036B813C63c2c2D84De16369F2b532a37A5E97
          </p>
          <p className="text-sm font-medium">
            Twine: 0xa86C718a38515699773a1FEB9c3A891A2BE982A1
          </p>
          <p className="text-sm font-medium">
            USDT: 0x55d398326f99059ff775485246999027b3197955
          </p>
          <p className="text-sm font-medium">
            USDC: 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
          </p>
        </div>
      </NewCard>
    </div>
  )
}

function DesktopPopupDocuments({ value, isOpen, onClose }) {
  const { theme, setOnScreen } = value
  const { t } = useTranslation()
  if (!isOpen) return null

  const calculateTransform = () => {
    const buttonRect = document.getElementById('documents-button').getBoundingClientRect()
    const translateX = buttonRect.left + buttonRect.width / 2 - 160 / 2
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
      <NewCard
        className='p-4'
        theme={theme}
      >
        <div
          className={`popup-document-content flex flex-col justify-center gap-4 items-center ${
            theme ? 'text-white' : 'text-black'
          }`}
        >
          <NextLinkFromReactRouter
            to="/roadmap"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Roadmap")}
          </NextLinkFromReactRouter>
          <NextLinkFromReactRouter
            to="/usecases"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Use Cases")}
          </NextLinkFromReactRouter>
          <NextLinkFromReactRouter
            to="/whitepaper"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Whitepaper")}
          </NextLinkFromReactRouter>
          <NextLinkFromReactRouter
            to="/gitbook"
            className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
            onClick={() => {
              setOnScreen(false)
              onClose()
              }
            }
          >
            {t("Gitbook")}
          </NextLinkFromReactRouter>
        </div>
      </NewCard>
    </div>
  )
}

function DesktopLangPopup({ theme, isOpen, onClose }) {
  const { setLanguage } = useTranslation()
  if (!isOpen) return null

  const calculateTransform = () => {
    const buttonRect = document.getElementById('lang-button').getBoundingClientRect()
    const translateX = buttonRect.left + buttonRect.width / 2 - 140 / 2
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
      <NewCard
        className='p-4'
        theme={theme}
      >
        <div
          className={`lang-content flex flex-col justify-center gap-4 ${
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

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { theme, toggleTheme, setOnScreen, onScreen } = value
  const { t } = useTranslation()

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

  const [isLangSelectorOpen, setIsLangSelectorOpen] = useState(false)
  const LangSelectorPopupOpen = () => {
    setIsLangSelectorOpen(true)
  }

  const closeLangSelectorPopup = () => {
    setIsLangSelectorOpen(false)
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

    function handleClickOutsideLangSelectorPopup(event) {
      const popupContent = document.querySelector('.lang-content')
      if (popupContent && !popupContent.contains(event.target)) {
        closeLangSelectorPopup()
      }
    }

    if (isLangSelectorOpen) {
      document.addEventListener('mousedown', handleClickOutsideLangSelectorPopup)
    } else {
      document.removeEventListener('mousedown', handleClickOutsideLangSelectorPopup)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidePopup)
      document.removeEventListener('mousedown', handleClickOutsidePopupDocuments)
      document.removeEventListener('mousedown', handleClickOutsideLangSelectorPopup)
    }
  }, [isPopupOpen, isPopupDocumntsOpen, isLangSelectorOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setIsPopupOpen(!isPopupOpen)
      setIsPopupDocumntsOpen(!isPopupDocumntsOpen)
      setIsLangSelectorOpen(!isLangSelectorOpen)
    }
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="container mx-auto flex justify-center">
        <NewCard
          className={`hidden lg:flex justify-between rounded-2xl mt-6 items-center fixed top-0 z-20 w-10/12 py-3 px-28 transition-all duration-300 backdrop-blur-lg ${
            theme ? "text-[#B6B6B6]" : "text-black"}`}
          theme={theme}
        >
          <NextLinkFromReactRouter to="/">
            <img
              src={theme ? '/images/home/logo_dark.webp' : '/images/home/logo_light.webp'}
              className='max-w-[240px] max-h-[55px]'
              alt="logo"
            />
          </NextLinkFromReactRouter>
          <div className="flex items-center lg:gap-3 xl:gap-7">
            <ul className="list-none flex lg:gap-3 xl:gap-7">
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
                <NextLinkFromReactRouter
                  to="/news"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  {t("News")}
                </NextLinkFromReactRouter>
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
                <NextLinkFromReactRouter
                  to="/howto"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  {t("How To")}
                </NextLinkFromReactRouter>
              </li>
            </ul>
            <ThemeSwitcher
              theme={theme}
              toggleTheme={toggleTheme} 
              setIsOpen={setIsOpen}
            />
            <div
              id="open-button"
              role="button"
              onKeyDown={handleKeyDown}
              onClick={popupOpen}
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
              onClick={LangSelectorPopupOpen}
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
          </div>
        </NewCard>
      </div>

      <DesktopPopup
        theme={theme}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
      <DesktopPopupDocuments
        value={value} 
        isOpen={isPopupDocumntsOpen}
        onClose={closeDocumentsPopup}
      />
      <DesktopLangPopup
        theme={theme}
        isOpen={isLangSelectorOpen}
        onClose={closeLangSelectorPopup}
      />

      <MobileNav
        value={{ isOpen, setIsOpen, toggleTheme, theme }}
      />
    </>
  )
}

export default Navbar
