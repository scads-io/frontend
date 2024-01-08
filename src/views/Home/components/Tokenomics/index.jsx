import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { useMatchBreakpoints } from '@scads/uikit'
import {
  opacityVariants,
  tokenomicsCardVariants,
} from 'components/variants'
import TabsLayout from "./Tabs";

const tokenomicsHeaderText = {
  title: "Tokenomics",
  text: "SCADS algorithm is simple in strategy, it can never go bankrupt, it never needs funding. Once it is launched it sustains itself indefinitely.",
};

const Tokenomics = ({ value }) => {
  const { theme } = value
  const { isMobile } = useMatchBreakpoints()
  const { t } = useTranslation()

  let fromBottom = {};
  if (!isMobile) {
    fromBottom = tokenomicsCardVariants;
  }

  return (
    <>
      <div
        className={`${
          theme.isDark
            ? "md:bg-[url('../images/home/tokenomics_bg_dark.webp')]"
            : "md:bg-[url('../images/home/tokenomics_bg_light.webp')]"
        } bg-center bg-cover bg-no-repeat mt-10 lg:mt-0 lg:py-48`}
      >
        <div
          className="container mx-auto relative scroll-mt-32"
          id="tokenomics"
        >
          <div
            className={`container mx-auto flex flex-col items-center text-center py-9 ${
              theme.isDark ? "text-[#B6B6B6]" : "text-black"
            }`}
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={opacityVariants}
            >
              <h1 className="text-2xl lg:text-[40px] font-bold">
                {t(tokenomicsHeaderText.title)}
              </h1>
              <p className="text-base lg:text-xl max-w-[342px] lg:max-w-[791px] mt-11">
                {t(tokenomicsHeaderText.text)}
              </p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fromBottom}
            >
              <TabsLayout value={{ theme }} />
            </motion.div>
          </div>
        </div>{" "}
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={opacityVariants}
        className="flex justify-center w-[323px] lg:w-[672px] mx-auto"
      >
        {theme.isDark && <img src="images/home/proccess-dark.webp" alt="proccess" loading="lazy" />}
        {theme.isDark === false && <img src="images/home/Proccess.webp" alt="proccess" loading="lazy" />}
      </motion.div>
    </>
  );
};

export default Tokenomics;
