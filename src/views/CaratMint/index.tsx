import React from 'react'
import useTheme from 'hooks/useTheme'
import { motion } from "framer-motion/dist/framer-motion"
import CaratClaimCard from './caratClaimCard'
import CaratBuyBackCard from './caratBuyBackCard'


export default function CaratMint() {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto flex justify-center"
    >
      <div
        className={`flex flex-col items-center mx-auto font-['Poppins'] lg:h-[420px] xl:h-5/6 ${
          theme.isDark ? "text-white" : "text-black"
        } relative`}
      >
        <CaratBuyBackCard />
        <CaratClaimCard />
      </div>
    </motion.div>
  )
}
