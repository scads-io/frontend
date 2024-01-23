import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { fromTop, fromBottom, opacityVariants } from 'components/variants'

const predictabilityText = {
  title: "Empowering DeFi with SCADS: A New Era in Stability and Security",
  text_1:
    "In the past four years, the DeFi sector has witnessed explosive growth, accumulating a staggering market cap of 48 billion USD. However, this surge has been tainted by significant financial losses for investors, largely due to the proliferation of fraudulent projects promising unrealistic APR/APY and other investment strategies. Unfortunately, many of these ventures end up causing substantial financial setbacks.",
  text_2:
    "To counter these vulnerabilities, there's an urgent call for an algorithmic solution. Such a solution would play a pivotal role in discerning patterns and establishing robust safeguards within the DeFi sphere. The demand for a strategic product capable of mitigating risks and preventing fraudulent activities in DeFi is palpable.",
  text_3:
    "Enter SCADS – a groundbreaking PROOF OF HOLD (POH) stablecoin that is poised to redefine the digital currency landscape. Unlike traditional stablecoins, SCADS steers clear of direct pegging to the USD, instead utilizing it as a reference point for user convenience. It embodies decentralization, self-sustainability, and freedom from obligations. Users' funds find secure refuge in their own wallets, while the algorithm operates perpetually debt-free.",
  text_4:
    "The ingenious PROOF OF HOLDING mechanism empowers users to effortlessly generate passive income by simply holding SCADS in their personal wallet. No staking or involvement in liquidity pools is required. This results in a genuinely risk-free solution with guaranteed growth. Furthermore, SCADS operates autonomously, free from owners, relying entirely on a meticulously crafted automated algorithm.",
}

const Predictability = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <div
      className={`container mx-auto flex flex-col justify-center items-center mt-16 lg:mt-32 lg:scroll-mt-28 xl:scroll-mt-36 2xl:scroll-mt-44 ${
        theme && "text-[#B6B6B6]"
      }`}
      id="textSection"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={opacityVariants}
        className="flex flex-col justify-center items-center relative"
      >
        <motion.img
          src="/images/home/dotted_line.svg"
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          variants={fromTop}
          className="absolute right-0 top-[21%]"
          alt="dotted line"
        />
        <motion.img
          src="/images/home/dotted_line.svg"
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
          className="absolute -left-4 top-[80%]"
          alt="dotted line"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          variants={fromTop}
        >
          <h1 className="font-bold text-2xl text-center lg:text-[40px] max-w-[340px] md:max-w-[888px] leading-normal md:leading-tight">
            {t(predictabilityText.title)}
          </h1>
        </motion.div>
        <p className="text-base lg:text-base mt-[51px] max-w-[328px] md:max-w-[600px] lg:max-w-[822px] flex flex-col gap-1">
          <span>{t(predictabilityText.text_1)}</span> <br />
          <span>{t(predictabilityText.text_2)}</span> <br />
          <span>{t(predictabilityText.text_3)}</span> <br />
          <span>{t(predictabilityText.text_4)}</span> <br />
        </p>
      </motion.div>
    </div>
  )
}

export default Predictability
