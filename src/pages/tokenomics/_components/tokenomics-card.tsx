'use client'

import { useTranslation } from 'contexts/Localization'
import { motion } from 'framer-motion'

interface TokenomicsCardProps {
  title: string
  setActive: () => void
  id: string
  preview: string
}

const TokenomicsCard: React.FC<TokenomicsCardProps> = ({ title, setActive, id, preview }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      layoutId={`card-${title}-${id}`}
      key={`card-${title}-${id}`}
      onClick={setActive}
      className="my-4 flex cursor-pointer flex-col items-center justify-between rounded-xl bg-white/5 p-4 backdrop-blur-xl transition-colors hover:bg-white/10 md:flex-row"
    >
      <div className="flex flex-col gap-1">
        <motion.h3 layoutId={`title-${title}-${id}`} className="text-center font-medium text-white md:text-left">
          {t(title)}
        </motion.h3>
        <motion.p layoutId={`description-${preview}-${id}`} className="text-center text-[#B4BCD0] md:text-left">
          {t(preview)}
        </motion.p>
      </div>
      <motion.button
        layoutId={`button-${title}-${id}`}
        className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white md:mt-0"
      >
        {t('Details')}
      </motion.button>
    </motion.div>
  )
}

export default TokenomicsCard
