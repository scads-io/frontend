import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { whitePaperVariants } from 'components/variants'

const data = {
    Conclusion: "Conclusion:",
    header: "11. Conclusion",
    title: "Summarizing the Potential and Impact of SCADS and TWINE",
    text: "SCADS and TWINES represent significant innovations in the blockchain and digital asset management landscapes. Below is a summary of their potential impact.",
    title_1: "Transforming Digital Asset Management:",
    text_1_1_header: "SCADS:",
    text_1_1: "By offering a stable, decentralized digital currency, SCADS provides a reliable alternative to traditional and often volatile cryptocurrencies. Its impact extends to stabilizing digital transactions and fostering trust in digital currencies, particularly in regions with unstable fiat currencies.",
    text_1_2_header: "TWINES:",
    text_1_2: "With its focus on predictable, linear asset growth, TWINE revolutionizes how individuals and businesses manage and grow their digital assets. It presents a unique solution for long-term investment strategies in the digital space.",
    title_2: "Enhancing Transaction Security and Efficiency:",
    text_2: "The integration of SCADS and TWINES ensures secure and efficient transactions within the blockchain ecosystem. Their combined operational capabilities can significantly reduce transaction costs and improve processing speed, contributing to a more efficient digital economy.",
    title_3: "Promoting Sustainable Blockchain Practices:",
    text_3: "The implementation of the Proof of Holding (POH) mechanism in SCADS introduces a more energy-efficient and environmentally sustainable alternative to traditional blockchain consensus models, aligning with global sustainability efforts.",
    title_4: "Expanding Blockchain Adoption:",
    text_4: "By addressing common concerns like volatility, security, and complexity, SCADS and TWINES have the potential to attract a broader audience to blockchain technology, including those previously hesitant due to the market’s instability.",
    title_5: "Pioneering Regulatory Compliance:",
    text_5: "SCADS and TWINES focus on regulatory compliance positions them favorably in the global market, especially as regulatory frameworks around digital currencies continue to evolve. This compliance opens doors to wider adoption in various regulated sectors.",
    title_6: "Impact on Various Industries:",
    text_6: "Their applications extend beyond financial transactions to industries like supply chain management, IoT, and e-commerce, demonstrating the versatility and far-reaching impact of these platforms.",
    title_7: "Community and Ecosystem Growth:",
    text_7: "By fostering a strong community and prioritizing user-centric design and features, SCADS and TWINES contribute to a growing and vibrant ecosystem in the blockchain space, driving innovation and user engagement.",
    text_8: "The introduction and development of SCADS and TWINES are poised to significantly impact the digital finance world. Their innovative approaches to stability, security, and asset management set new standards in blockchain technology. As these platforms evolve and adapt to market needs, they hold the promise of fostering a more secure, efficient, and accessible digital economy."
}

const Conclusion  = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <motion.main
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={whitePaperVariants}
        className={` ${
            theme ? "text-[#B6B6B6]" : "text-black"
            } container mx-auto flex flex-col items-center overflow-hidden pb-20`}
    >
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px]">
            {t(data.header)}
        </h1>
        <h1 className="text-[18px] lg:text-2xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-4">
            {t(data.title)}
        </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="font-bold">{t(data.text)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_1)}</span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(data.text_1_1_header)}</span>
                <span>{" "}{t(data.text_1_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(data.text_1_2_header)}</span>
                <span>{" "}{t(data.text_1_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2)}</span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(data.text_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_3)}</span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(data.text_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_4)}</span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(data.text_4)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_5)}</span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(data.text_5)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_6)}</span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(data.text_6)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_7)}</span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(data.text_7)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.Conclusion)}</span>
            <span className="font-bold">{t(data.text_8)}</span>
        </p>
    </motion.main>
  )
}


export default Conclusion
