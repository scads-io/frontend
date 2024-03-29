import React from "react"
import { createPortal } from 'react-dom'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { howToCardVariants } from "components/variants"
import ScrollToTopButton  from 'components/ScrollToTopButton'
import Footer from 'components/Footer'
import { PageMeta } from "components/Layout/PageMeta"
import HowToItem from "./components/HowToItem"
import { howToItemsData } from "./data"

const HowTo = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex flex-col items-center gap-20 mt-40 overflow-hidden pb-20"
      >
        <h1
          className={`${
            theme ? "text-[#B6B6B6]" : "text-black"
          } font-bold text-center text-[26px] lg:text-4xl 2xl:text-5xl max-w-[300px] lg:max-w-[600px] 2xl:max-w-[700px]`}
        >
          {t("How To")}
        </h1>
        <div className="flex flex-wrap justify-center items-start gap-x-8 relative gap-y-10 md:gap-y-0">
          {howToItemsData.map((step, index) => (
            index === 9 || index === 10 ? null :
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={howToCardVariants(step)}
              key={step.id}
            >
              <HowToItem step={step} value={value} key={step.id} />
            </motion.div>
          ))}
        </div>
      </motion.main>
      <Footer theme={theme} className="mt-24" />
      {createPortal(<ScrollToTopButton theme={theme} />, document.body)}
    </div>
  )
}

export default HowTo
