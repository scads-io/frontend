import React from 'react'
import SwapModal from 'components/swap/swap-modal'
import { IoEllipse } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { useTranslation } from 'contexts/Localization'
import { cn } from 'lib/utils'
import { EN, RU } from 'config/localization/languages'
import { SparklesCore } from 'components/ui/sparkles'

const Hero = () => {
  const { t, currentLanguage } = useTranslation()

  return (
    <section className="relative">
      <div className="relative z-10 mx-auto flex justify-center pt-40 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <div className="flex flex-col items-center text-white lg:max-w-none">
          <div className="relative h-8 w-[280px] md:w-[40rem]">
            <div className="absolute inset-x-20 left-1/2 bottom-0 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm" />
            <div className="absolute inset-x-20 left-1/2 bottom-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <div className="absolute inset-x-60 left-1/2 bottom-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-600 to-transparent blur-sm" />
            <div className="absolute inset-x-60 left-1/2 bottom-0 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-600 to-transparent" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="h-full w-1/2 mx-auto"
              particleColor="#FFFFFF"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight leading-none text-transparent lg:text-[80px]"
          >
            {t('The change is here')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[340px] text-center text-[#B4BCD0] md:max-w-[550px] xl:max-w-[740px] mt-2 md:text-lg"
          >
            {t(
              "The World's First Non-PEGGED self-sustained Stablecoin Powered by Proof of Holding. Freewill defines the chain, Proof of Hold drives the protocol, SCADS & TWINE pioneer the technology.",
            )}
          </motion.p>
        </div>
      </div>
      <IoEllipse
        className="absolute -top-full left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-2/3 bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] text-transparent blur-[800px] lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-indigo-600/80 blur-[300px] md:hidden"
        size={340}
      />
    </section>
  )
}

export default Hero
