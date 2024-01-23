import React from 'react'
import { createPortal } from 'react-dom'
import { PageMeta } from 'components/Layout/PageMeta'
import ScrollToTopButton  from 'components/ScrollToTopButton'
import Footer from 'components/Footer'
import Pioneering from './components/Pioneering'
import Introduction from './components/Introduction'
import Technology from './components/Technology'
import Understanding from './components/Understanding'
import Market from './components/Market'
import Technological from './components/Technological'
import Monetization from './components/Monetization'
import Implementation from './components/Implementation'
import Regulatory from './components/Regulatory'
import Sustainability from './components/Sustainability'
import FuturePlans from './components/FuturePlans'
import Conclusion from './components/Conclusion'
import CalltoAction from './components/CalltoAction'
import Contact from './components/Contact'


const WhitePaper = ({ value }) => {
  const { theme } = value

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <Pioneering value={value} />
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
      {createPortal(<ScrollToTopButton theme={theme} />, document.body)}
    </div>
  )
}

export default WhitePaper
