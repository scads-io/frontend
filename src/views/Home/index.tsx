import React from 'react'
import { createPortal } from 'react-dom'
import { motion } from "framer-motion/dist/framer-motion"
import { PageMeta } from 'components/Layout/Page'
import ScrollToTopButton  from 'components/ScrollToTopButton'
import Footer from 'components/Footer'
import Header from './components/Header'
import LivePrices from './components/LivePrices'
import Treasury from './components/Treasury'
import Predictability from './components/Predictability'
import ContentAccordion from './components/ContentAccordion'
import Wallets from './components/Wallets'
import Tokenomics from './components/Tokenomics'
import Disclaimer from './components/Disclaimer'


const Home = ({ value }) => {
  const { theme } = value;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      >
      <PageMeta />
      <Header value={value} />
      <div className="py-10 relative bg-gradient-to-b from-transparent to-[#FF006820]">
        <img
          src={theme.isDark ? "/images/home/cube_large.webp" : "/images/home/triangle.webp"}
          className="absolute md:right-10 lg:right-0 2xl:right-16 top-[8%] md:top-1/4 2xl:top-[14%] max-w-[100px] md:max-w-none"
          width={200}
          alt=""
        />
        <img
          src={theme.isDark ? "/images/home/cube_large.webp" : "/images/home/donut.webp"}
          className="absolute hidden md:block left-4 xl:left-0 2xl:left-28 top-[70%]"
          width={160}
          alt=""
        />
        <img
          src={theme.isDark ? "/images/home/cube_small_one.webp" : "/images/home/cube_light.webp"}
          className="absolute left-0 md:left-1/4 top-[38%]"
          width={90}
          alt=""
        />
        <img
          src={theme.isDark ? "/images/home/cube_small_two.webp" : "/images/home/rectangle_light.webp"}
          className="absolute right-1/3 top-[87%] hidden md:block"
          width={90}
          alt=""
        />
        <LivePrices value={value} />
        <Treasury value={value} />
      </div>
      <Predictability value={value} />
      <ContentAccordion value={value} />
      <Wallets value={value} />
      <Tokenomics  value={value}/>
      <Disclaimer value={value} />
      <Footer theme={theme} className="mt-24" />
      {createPortal(<ScrollToTopButton />, document.body)}
    </motion.main>
  )
}

export default Home
