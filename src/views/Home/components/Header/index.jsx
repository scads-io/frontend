import React from 'react'
import { NextLinkFromReactRouter } from 'components/Menu/NextLink'
import { useTranslation } from 'contexts/Localization'

const headerText = {
  title: `Save and grow your capital with money you own`,
  subTitle: "Protect your assets, hold your SCADS and mint TWINE!",
  slogan: "World first non fiat based stable coin based on Proof of hold.",
  text: [
    "Truly decentralized, non-governed money created for you.",
    "The only asset that brings stability and confidence, can’t be hacked or dumped.",
    "Mint TWINE that grows in time.",
    "Brings stability and confidence to Crypto holders, traders, investors and institutional organizations.",
  ],
}

const Header = ({ value }) => {
  const { theme, setOnScreen } = value
  const { t } = useTranslation()

  const handleClickScroll = () => {
    const element = document.getElementById("textSection")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`${theme === false && "bg-[E2E6E9]"} `}>
      <div className="container mx-auto flex justify-center items-center pb-20 pt-32 2xl:h-screen lg:pb-0 relative overflow-hidden">
        <div
          className={`flex flex-col justify-center items-center lg:items-start gap-8 lg:py-20 xl:mx-20 z-10 lg:w-1/2 ${
            theme ? "text-[#B6B6B6]" : "text-black"
          }`}
        >
          <h1 className="text-[26px] lg:text-4xl 2xl:text-5xl font-black max-w-[300px] lg:max-w-none text-center lg:text-start">
            {t(headerText.title)}
          </h1>
          <h2 className="max-w-[300px] md:max-w-none font-semibold text-xl lg:max-w-none text-center lg:text-start">
            {t(headerText.slogan)}
          </h2>
          <h3 className="text-xl font-semibold max-w-[350px] lg:max-w-none 2xl:max-w-[700px] text-center lg:text-start">
            {t(headerText.subTitle)}
          </h3>
          <ul className="text-base font-light lg:font-normal text-center lg:text-start lg:text-base 2xl:text-lg flex flex-col list-none max-w-[330px] mx-auto lg:max-w-[700px] 2xl:max-w-[700px]">
            <li>{t(headerText.text[0])}</li>
            <li>{t(headerText.text[1])}</li>
            <li>{t(headerText.text[2])}</li>
            <li>{t(headerText.text[3])}</li>
          </ul>
          <div className="flex items-center gap-2 md:gap-10">
            <button
              type='button'
              onClick={() => setOnScreen(true)}
              className="hidden lg:block text-white text-base 2xl:text-lg font-bold rounded-[30px] py-4 px-8 bg-gradient-to-r from-[#655780] via-[#BF205D] to-[#BF205D] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
            >
              {t("Invest Now")}
            </button>
            <button
              type='button'
              className="text-center py-3 px-4 md:py-4 md:px-8 border-2 border-[#BF205D] transition-all duration-300 hover:border-[#655780] rounded-3xl md:rounded-[30px] text-[#BF205D] hover:text-[#655780] text-sm md:text-base 2xl:text-lg font-bold"
              onClick={handleClickScroll}
            >
               {t("Read more")}
            </button>
            <NextLinkFromReactRouter
              to="/story"
              className="text-center py-3 px-4 md:py-4 md:px-8 border-2 border-[#BF205D] transition-all duration-300 hover:border-[#655780] rounded-3xl md:rounded-[30px] text-[#BF205D] hover:text-[#655780] text-sm md:text-base 2xl:text-lg font-bold"
            >
               {t("Our story")}
            </NextLinkFromReactRouter>
            <NextLinkFromReactRouter
              to="/invest"
              className="flex text-center items-center text-white text-sm md:text-base font-bold rounded-3xl md:rounded-[30px] py-3 px-4 md:py-4 md:px-8 bg-gradient-to-r from-[#655780] via-[#BF205D] to-[#C01F5C] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 lg:hidden"
            >
              {t("Invest Now")}
            </NextLinkFromReactRouter>
          </div>
        </div>
        <link
          rel="preload"
          href={theme ? "/images/home/header_img_dark.svg" : "/images/home/header_cube_light.svg"}
          as="image"
        />
        <img
          src={theme ? "/images/home/header_img_dark.svg" : "/images/home/header_cube_light.svg"}
          className="hidden lg:block lg:w-1/2"
          loading="eager"
          alt="header"
        />
      </div>
    </div>
  )
}

export default Header
