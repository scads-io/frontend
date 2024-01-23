import React from 'react'
import { Link } from 'react-router-dom'
import Footer from 'components/Footer'
import { PageMeta } from 'components/Layout/PageMeta'
import { useTranslation } from 'contexts/Localization'

const ComingSoon = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <div
        className="flex items-center flex-col justify-center"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <h1 className={`text-[26px] 2xl:text-5xl font-black max-w-[329px] lg:max-w-[350px] 2xl:max-w-[600px] mb-6 ${
            theme ? "text-[#B6B6B6]" : "text-black"
          }`}>
          {t("Coming soon")}
        </h1>
        <button
          type='button'
          className="bg-[#B52761] py-[14px] px-9 rounded-[30px] font-semibold text-white text-xl hover:bg-[#655780] transition-all duration-300 focus:ring-0 focus:outline-none"
        >
          <Link to='/'>{t('Back Home')}</Link>
        </button>
      </div>
      <Footer theme={theme} className="mt-0" />
    </div>
  )
}

export default ComingSoon
