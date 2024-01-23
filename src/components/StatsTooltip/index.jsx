import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"

const statTooltip = [
  {
    id: "t1",
    title: "Current Minting Speed",
    text: "the current adaptive speed is based on mint orders for SCADS to protect from attacks, and to make sure the minting lasts 15 years.",
  },
  {
    id: "t2",
    title: "PULSE Funds",
    text: "here you can find the capital and growth of PULSE.",
  },
  {
    id: "t3",
    title: "Next PULSE",
    text: "timer for when is the next pulse.",
  },
  {
    id: "t4",
    title: "Total TWINE Minted",
    text: "the total of already minted TWINE in the whole market.",
  },
  {
    id: "t5",
    title: "TWINE Price",
    text: "the price growth based on the number of TWINE minted.",
  },
  {
    id: "t6",
    title: "Total SCADS",
    text: "total of SCADS in all wallets and inside the system.",
  },
]

const StatsTooltip = () => {
  const { t } = useTranslation()

  const tooltip = (
    <ul className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-12 2xl:gap-24">
      {statTooltip.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center md:gap-2"
        >
          <span className="font-semibold text-center max-w-[320px] lg:max-w-[140px] xl:max-w-[200px]">
            {t(item.title)}
          </span>
          <p className="text-center max-w-[320px] lg:max-w-[140px] xl:max-w-[200px]">
            {t(item.text)}
          </p>
        </li>
      ))}
    </ul>
  )

  return (
    <motion.div
      className="hidden lg:flex justify-center mt-6"
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {tooltip}
      </motion.div>
    </motion.div>
  )
}

export default StatsTooltip
