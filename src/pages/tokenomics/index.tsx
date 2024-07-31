'use client'

import React, { useEffect, useId, useState } from 'react'
import { IoEllipse } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { useTranslation } from 'contexts/Localization'
import { tokenomicsContent } from 'constants/content'
import CardDetails from './_components/card-details'
import TokenomicsCard from './_components/tokenomics-card'

const TokenomicsPage = () => {
  const { t } = useTranslation()

  const [active, setActive] = useState<(typeof tokenomicsContent)[number] | boolean | null>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="mb-24 mt-32 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        {t('Tokenomics')}
      </motion.h1>
      <CardDetails active={active} id={id} setActive={() => setActive(null)} />
      <ul className="mx-auto mt-4 w-11/12 md:max-w-[768px] lg:max-w-[1024px]">
        {tokenomicsContent.map((card) => (
          <TokenomicsCard
            id={id}
            key={card.id}
            title={card.title}
            preview={card.preview}
            setActive={() => setActive(card)}
          />
        ))}
      </ul>
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

export default TokenomicsPage
