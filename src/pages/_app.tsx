import Script from 'next/script'
import "./globals.css"
import BigNumber from 'bignumber.js'
import axios from 'axios'
import { ToastListener } from 'contexts/ToastsContext'
import useEagerConnect from 'hooks/useEagerConnect'
import { useInactiveListener } from 'hooks/useInactiveListener'
import useSentryUser from 'hooks/useSentryUser'
import useUserAgent from 'hooks/useUserAgent'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Fragment, useEffect } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Inter } from "next/font/google"
import { useStore, persistor } from 'state/index'
import { usePollBlockNumber } from 'state/block/hooks'
import { NextPage } from 'next'
import { useFetchProfile } from 'state/profile/hooks'
import MainNavigation from "components/main-navigation/main-navigation"
import Footer from "components/footer/footer"
import { Blocklist, Updaters } from '..'
import ErrorBoundary from '../components/ErrorBoundary'
import Providers from '../Providers'

const inter = Inter({ subsets: ["latin"] });

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function GlobalHooks() {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  useUserAgent()
  useInactiveListener()
  useSentryUser()

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        await axios.post('https://scads.io:3001/api/visits')
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchVisitCount()
  }, [])

  return null
}

function MyApp(props) {
  const { pageProps } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <title>ScadsSwap</title>
        <meta
        name="description"
        content="Discover SCADS: The New Secured, Self-Sustained Algorithm!"
        />
      </Head>
      <Providers store={store}>
        <Blocklist>
          <GlobalHooks />
          <Updaters />
          <PersistGate loading={null} persistor={persistor}>
            <App {...props} />
          </PersistGate>
        </Blocklist>
      </Providers>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
          `,
        }}
      />
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <ErrorBoundary>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer />
      <ToastListener />
    </ErrorBoundary>
  )
}

export default MyApp