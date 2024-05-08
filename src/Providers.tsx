import React from 'react'
import { light, dark } from '@scads-io/uikit'
import { Provider } from 'react-redux'
import { WagmiProvider } from '@scads-io/wagmi'
import { client } from 'utils/wagmi'
import { ThemeProvider } from 'styled-components'
import { useThemeManager } from 'state/user/hooks'
import { LanguageProvider } from 'contexts/Localization'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import CopyToasterProvider from 'contexts/CopyToasterProvider'
import { Store } from '@reduxjs/toolkit'

const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager()
  return <ThemeProvider theme={isDark ? dark : light} {...props} />
}

const Providers: React.FC<{ store: Store }> = ({ children, store }) => {
  return (
    <WagmiProvider client={client}>
      <Provider store={store}>
        <ToastsProvider>
          <ThemeProviderWrapper>
            <LanguageProvider>
              <CopyToasterProvider />
              <RefreshContextProvider>
                {children}
              </RefreshContextProvider>
            </LanguageProvider>
          </ThemeProviderWrapper>
        </ToastsProvider>
      </Provider>
    </WagmiProvider>
  )
}

export default Providers
