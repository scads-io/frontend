import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { opacityVariants } from 'components/variants'

const Disclaimer = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={opacityVariants}
      className={`flex flex-col items-center font-['Poppins'] text-center lg:text-start gap-8 mt-24 ${
        theme.isDark ? "text-[#B6B6B6]" : "text-black"
      }`}
    >
      <h1 className="text-2xl">{t('Disclaimer')}</h1>
      <p className="text-sm max-w-[333px] md:max-w-[620px] lg:max-w-[1000px]">
        {t('DisclaimerText')}
      </p>
    </motion.div>
  );
};

export default Disclaimer
