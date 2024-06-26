import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoEllipse } from 'react-icons/io5'
import { useTranslation } from 'contexts/Localization'
import FaqAccordion from './_components/faq-accordion'
import SearchBar from './_components/search-bar'

const FaqPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const { t } = useTranslation()

  return (
    <>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r mt-32 from-white to-neutral-400 bg-clip-text text-center text-5xl font-medium leading-tight text-transparent"
      >
        {t('Frequently asked questions')}
      </motion.h1>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4"
      >
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </motion.div>
      <section className="mx-auto mt-12 flex max-w-[91%] flex-col items-center md:max-w-[720px] lg:max-w-[1024px]">
        <FaqAccordion searchValue={searchValue} />
      </section>
      <IoEllipse
        className="absolute -top-1/2 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-2/3 bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] text-transparent blur-[800px] lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-indigo-600/80 blur-[300px] md:hidden"
        size={340}
      />
    </>
  )
}

export default FaqPage
