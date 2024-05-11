import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'contexts/Localization'
import { Button } from './ui/button'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-32 flex flex-col items-center">
      <div className="relative z-10 mx-auto flex justify-center pt-40 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <div className="flex flex-col items-center text-white lg:max-w-none">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight leading-none text-transparent lg:text-[80px]"
          >
            {404}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[340px] text-center text-[#B4BCD0] md:max-w-[550px] xl:max-w-[740px] mt-2 md:text-lg"
          >
            Oops, page not found
          </motion.p>
          <div className="mt-12">
            <Link href="/">
              <Button className="px-8 mt-4">{t('Home')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
