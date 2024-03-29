import React, { lazy, useState, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from "framer-motion/dist/framer-motion"
import axios from 'axios'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import useUserAgent from 'hooks/useUserAgent'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { usePollBlockNumber } from 'state/block/hooks'
import { useFetchProfile } from 'state/profile/hooks'
import { useThemeManager } from 'state/user/hooks'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import history from './routerHistory'
// Views included in the main bundle
import { useInactiveListener } from './hooks/useInactiveListener'
import useSentryUser from './hooks/useSentryUser'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))
const ComingSoon = lazy(() => import('./views/ComingSoon'))
const News = lazy(() => import('./views/News'))
const HowTo = lazy(() => import('./views/HowTo'))
const Invest = lazy(() => import('./views/Invest'))
const InvestMobile = lazy(() => import('./views/InvestMobile'))
const WhitePaper = lazy(() => import('./views/WhitePaper'))
const Roadmap = lazy(() => import('./views/Roadmap'))
const UseCases = lazy(() => import('./views/UseCases'))
const Story = lazy(() => import('./views/Story'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const [isDark] = useThemeManager()
  const [onScreen, setOnScreen] = useState(false)
  const { currentLanguage } = useTranslation()

  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  useScrollOnRouteChange()
  useUserAgent()
  useInactiveListener()
  useSentryUser()

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("bg-[#00000B]")
      document.body.classList.remove("bg-[#e8ecff]")
    } else {
      document.body.classList.remove("bg-[#00000B]")
      document.body.classList.add("bg-[#e8ecff]")
    }

    if (currentLanguage.code === 'en') {
      document.body.style.fontFamily = "'Poppins', sans-serif"
    } else {
      document.body.style.fontFamily = "'Montserrat', sans-serif"
    }
  }, [isDark, currentLanguage])

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
  
  return (
    <div className="overflow-x-hidden">
      <Router history={history}>
        <Menu value={{ setOnScreen, onScreen }} />
        <Invest value={{ onScreen, setOnScreen, theme: isDark }} />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Switch>
              <Route path='/' exact>
                <Home value={{ theme: isDark, setOnScreen }} />
              </Route>

              <Route path='/invest'>
                <InvestMobile value={{ theme: isDark }} />
              </Route>

              <Route path='/roadmap'>
                <Roadmap value={{ theme: isDark }} />
              </Route>

              <Route path='/usecases'>
                <UseCases value={{ theme: isDark }} />
              </Route>

              <Route path='/whitepaper'>
                <WhitePaper value={{ theme: isDark }} />
              </Route>

              <Route path='/gitbook'>
                <ComingSoon value={{ theme: isDark }} />
              </Route>

              <Route path='/howto'>
                <HowTo value={{ theme: isDark }} />
              </Route>

              <Route path='/news'>
                <News value={{ theme: isDark }} />
              </Route>

              <Route path='/story'>
                <Story value={{ theme: isDark }} />
              </Route>

              <Route>
                <NotFound value={{ theme: isDark }} />
              </Route> 
            </Switch>
          </AnimatePresence>
        </SuspenseWithChunkError>
        <ToastListener />
      </Router>
    </div>
  )
}

export default React.memo(App)
