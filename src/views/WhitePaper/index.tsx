import React, { lazy } from 'react'
import { createPortal } from 'react-dom'
import { PageMeta } from 'components/Layout/PageMeta'
import ScrollToTopButton  from 'components/ScrollToTopButton'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/Loader/PageLoader'
import Pioneering from './components/Pioneering'

const Introduction = lazy(() => import('./components/Introduction'))
const Technology = lazy(() => import('./components/Technology'))
const Understanding = lazy(() => import('./components/Understanding'))
const Market = lazy(() => import('./components/Market'))
const Technological = lazy(() => import('./components/Technological'))
const Monetization = lazy(() => import('./components/Monetization'))
const Implementation = lazy(() => import('./components/Implementation'))
const Regulatory = lazy(() => import('./components/Regulatory'))
const Sustainability = lazy(() => import('./components/Sustainability'))
const FuturePlans = lazy(() => import('./components/FuturePlans'))
const Conclusion = lazy(() => import('./components/Conclusion'))
const CalltoAction = lazy(() => import('./components/CalltoAction'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('components/Footer'))

const WhitePaper = ({ value }) => {
  const { theme } = value

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <Pioneering value={value} />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Introduction value={value} />
        <Technology value={value} />
        <Understanding value={value} />
        <Market value={value} />
        <Technological value={value} />
        <Monetization value={value} />
        <Implementation value={value} />
        <Regulatory value={value} />
        <Sustainability value={value} />
        <FuturePlans value={value} />
        <Conclusion value={value} />
        <CalltoAction value={value} />
        <Contact value={value} />
        <Footer theme={theme} className="mt-24" />
      </SuspenseWithChunkError>
      {createPortal(<ScrollToTopButton theme={theme} />, document.body)}
    </div>
  )
}

export default WhitePaper
