import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from 'components/Footer'
import { useTranslation } from 'contexts/Localization'

const StyledComingSoon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const ComingSoon = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <StyledComingSoon>
        <h1 className={`text-[26px] 2xl:text-5xl font-black max-w-[329px] lg:max-w-[350px] 2xl:max-w-[600px] mb-6 ${
            theme.isDark ? "text-[#B6B6B6]" : "text-black"
          }`}>
          {t("Coming soon")}
        </h1>
        <button
          type='button'
          className="bg-[#B52761] py-[14px] px-9 rounded-[30px] font-semibold text-white text-xl hover:bg-[#655780] transition-all duration-300 focus:ring-0 focus:outline-none"
        >
          <Link to='/'>{t('Back Home')}</Link>
        </button>
      </StyledComingSoon>
      <Footer theme={theme} className="mt-0" />
    </div>
  )
}

export default ComingSoon
