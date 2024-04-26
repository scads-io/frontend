import React from 'react'
import { NextLinkFromReactRouter } from 'components/NextLink'
import Footer from 'components/Footer'
import { useTranslation } from 'contexts/Localization'
import { PageMeta } from 'components/Layout/PageMeta'

const NotFound = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <div
        className="flex items-center flex-col justify-center"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <h1 className="text-[80px] font-black bg-gradient-to-r  from-[#655780] via-[#BF205D] to-[#BF205D] text-transparent bg-clip-text">
          {404}
        </h1>
        <h1 className={`text-[26px] text-center 2xl:text-5xl font-black max-w-[329px] lg:max-w-[350px] 2xl:max-w-[600px] mb-6 ${
            theme ? "text-[#B6B6B6]" : "text-black"
          }`}>
          {t('Oops, page not found')}
        </h1>
        <button
          type='button'
          className="bg-[#B52761] py-[14px] px-9 rounded-[30px] font-semibold text-white text-xl hover:bg-[#655780] transition-all duration-300 focus:ring-0 focus:outline-none"
        >
          <NextLinkFromReactRouter to='/'>{t('Back Home')}</NextLinkFromReactRouter>
        </button>
      </div>
      <Footer theme={theme} className="mt-0" />
    </div>
  )
}

export default NotFound
