import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from 'components/Footer'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <h1 className="text-[80px] font-black bg-gradient-to-r  from-[#655780] via-[#BF205D] to-[#BF205D] text-transparent bg-clip-text">
          {404}
        </h1>
        <h1 className={`text-[26px] 2xl:text-5xl font-black max-w-[329px] lg:max-w-[350px] 2xl:max-w-[600px] mb-6 ${
            theme.isDark ? "text-[#B6B6B6]" : "text-black"
          }`}>
          {t('Oops, page not found.')}
        </h1>
        <button
          type='button'
          className="bg-[#B52761] py-[14px] px-9 rounded-[30px] font-semibold text-white text-xl hover:bg-[#655780] transition-all duration-300 focus:ring-0 focus:outline-none"
        >
          <Link to='/'>{t('Back Home')}</Link>
        </button>
      </StyledNotFound>
      <Footer theme={theme} className="mt-0" />
    </Page>
  )
}

export default NotFound
