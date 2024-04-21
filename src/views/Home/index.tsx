import React, { lazy } from 'react'
import { createPortal } from 'react-dom'
import { motion } from "framer-motion"
import { PageMeta } from 'components/Layout/PageMeta'
import ScrollToTopButton  from 'components/ScrollToTopButton'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/Loader/PageLoader'
import Header from './components/Header'

const LivePrices = lazy(() => import('./components/LivePrices'))
const Treasury = lazy(() => import('./components/Treasury'))
const Predictability = lazy(() => import('./components/Predictability'))
const ContentAccordion = lazy(() => import('./components/ContentAccordion'))
const Wallets = lazy(() => import('./components/Wallets'))
const Tokenomics = lazy(() => import('./components/Tokenomics'))
const Disclaimer = lazy(() => import('./components/Disclaimer'))
const Footer = lazy(() => import('components/Footer'))

const Home = ({ value }) => {
  const { theme } = value

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageMeta />
      <Header value={value} />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <div className="py-10 relative bg-gradient-to-b from-transparent to-[#FF006820]">
          <img
            src={theme ? "/images/home/cube_large.webp" : "/images/home/triangle.webp"}
            className="absolute md:right-10 lg:right-0 2xl:right-16 top-[8%] md:top-1/4 2xl:top-[14%] max-w-[100px] md:max-w-none"
            width={200}
            alt="background"
            loading="lazy"
          />
          <img
            src={theme ? "/images/home/cube_large.webp" : "/images/home/donut.webp"}
            className="absolute hidden md:block left-4 xl:left-0 2xl:left-28 top-[70%]"
            width={160}
            alt="background"
            loading="lazy"
          />
          <img
            src={theme ? "/images/home/cube_small_one.webp" : "/images/home/cube_light.webp"}
            className="absolute left-0 md:left-1/4 top-[38%]"
            width={90}
            alt="background"
            loading="lazy"
          />
          <img
            src={theme ? "/images/home/cube_small_two.webp" : "/images/home/rectangle_light.webp"}
            className="absolute right-1/3 top-[87%] hidden md:block"
            width={90}
            alt="background"
            loading="lazy"
          />
          <LivePrices value={value} />
          <Treasury value={value} />
        </div>
        <Predictability value={value} />
        <ContentAccordion value={value} />
        <Wallets value={value} />
        <Tokenomics value={value}/>
        <Disclaimer value={value} />
        <Footer theme={theme} className="mt-24" />
      </SuspenseWithChunkError>
      {createPortal(<ScrollToTopButton theme={theme} />, document.body)}
    </motion.main>
  )
}

export default Home
