import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"

const data = {
    Conclusion: "Conclusion:",
    header_1: "SCADS AND TWINE WHITE PAPER",
    header_2: "Pioneering the Future of Blockchain Technology", 
    title: "Executive Summary",
    small_title_1: "SCADS and TWINE: Innovating Blockchain for Sustainable and Secure Asset Management",
    small_text_1: "In an era where digital innovation is paramount, SCADS and TWINE are at the forefront of blockchain technology, providing groundbreaking solutions in digital asset management and transaction systems.",
    small_title_2: "SCADS: Revolutionizing Digital Transactions with Self-Sustainability",
    small_text_2_1: "SCADS introduces a pioneering ‘Self-Sustained and Protected Coin’ system, evolving beyond traditional stablecoin concepts. This innovative model ensures heightened security, stability, and autonomy, positioning it as a dependable option for users globally.",
    small_text_2_2: "The advanced blockchain framework of SCADS provides a secure and decentralized ecosystem. Its self-regulatory nature maintains its value and operational integrity, independent of external financial assets or benchmarks.",
    small_title_3: "TWINE: A Paradigm Shift in Asset Growth and Protection",
    small_text_3_1: "TWINE redefines the landscape of asset management. Its unique approach focuses on facilitating long-term, linear asset growth, fully protected and self-sustained, diverging from conventional volatility-prone financial instruments.",
    small_text_3_2: "The platform’s core lies in its ability to nurture assets in a protected environment, ensuring steady growth without the typical risks associated with market fluctuations. This makes TWINE an ideal solution for those seeking reliable, long-term asset appreciation.",
    small_title_4: "Market Potential and Scope",
    small_text_4_1: "The comprehensive solutions offered by SCADS and TWINE are primed to transform multiple sectors, including finance, investment, utilities, e-comms, supply chain management, fulfilling extensive market demands.",
    small_text_4_2: "The increasing shift towards digital asset management underscores the vast potential for SCADS and TWINE, catering to a burgeoning market ready for innovative and secure blockchain solutions.",
    small_title_5: "Innovation, Security, and Sustainability",
    small_text_5_1: "SCADS and TWINE are built on a foundation of innovative security protocols and features that significantly differentiate them in the blockchain space. They offer robust protection against various cyber threats, ensuring user trust and system reliability.",
    small_text_5_2: "Ongoing research and development are key to maintaining the cutting-edge status of SCADS and TWINE, ensuring they stay in sync with technological advancements and market dynamics.",
    small_text_6_1: "SCADS and TWINE represent a transformative era in blockchain technology, offering unparalleled solutions in digital transaction processing and asset management. Their unique emphasis on secure, sustainable, and linear asset growth positions them as leaders in the digital economy, ready to redefine the standards of blockchain applications.",
}

const secondData = {
    Conclusion: "Conclusion:",
    title: "The key objectives, technological innovations, and market potential of the project.",
    small_title_1: "Pioneering Future Finance: SCADS and TWINE",
    small_text_1: "The SCADS and TWINE project embodies a transformative vision in the world of blockchain technology, aiming to reshape the landscape of digital asset management and transaction processing.",
    small_title_2: "Key Objective of the Project:",
    small_text_2_1: "The primary goal of the SCADS and TWINE project is to introduce groundbreaking innovations in blockchain technology that address current challenges in digital transactions and asset management. SCADS seeks to establish a self-sustained and protected system for digital transactions, while TWINE focuses on long-term, linear growth of assets, ensuring both protection and sustainability.",
    small_title_3: "Technological Innovation:",
    small_text_3_1: "SCADS: Leverages advanced blockchain technology to create a decentralized, secure environment for digital transactions, moving beyond the limitations of traditional stablecoins.",
    small_text_3_2: "TWINE: Innovates in the realm of digital asset management by offering a platform for steady asset growth, safeguarded against market volatility, and underpinned by state-of-the-art security measures.",
    small_title_4: "Market Potential and Target Industries:",
    small_text_4_1: "Financial Services: SCADS and TWINE are poised to revolutionize banking, investment, and insurance sectors by providing more stable, secure, and efficient transaction and asset management solutions.",
    small_text_4_2: "Supply Chain Management: The technologies can significantly enhance transparency and efficiency in supply chains, appealing to a wide range of industries from manufacturing to retail.",
    small_text_4_3: "International Trade: Their global applicability can simplify and secure cross-border transactions, making them attractive to multinational corporations and trade organizations.",
    small_title_5: "Current and Potential Capitalization:",
    small_text_5_1: "Current Capitalization: The project’s current valuation, influenced by early adoption and market interest, is conservatively estimated. Assuming a modest market share in the targeted industries, the initial capitalization could be projected in the lower billion-dollar range.",
    small_text_5_2: "Projected 10-Year Capitalization: Considering the expected surge in crypto adoption over the next decade, along with the project’s innovative approach and market potential, a significant increase in capitalization is anticipated. If SCADS and TWINE capture a substantial share of their target markets, fueled by broader crypto adoption, their valuation could potentially reach the higher tens of billions in a decade.",
    small_text_6_1: "The SCADS and TWINE project stands at the forefront of financial innovation, presenting a unique opportunity to revolutionize blockchain technology’s role in digital transactions and asset management. With its pioneering approach, backed by technological excellence and substantial market potential, the project is well-positioned to capitalize on the growing momentum of crypto adoption globally.",
  }

const Pioneering = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={` ${
            theme ? "text-[#B6B6B6]" : "text-black"
            } container mx-auto flex flex-col items-center mt-40 overflow-hidden pb-20`}
    >
        <h1 className="text-[26px] lg:text-4xl 2xl:text-5xl max-w-[300px] lg:max-w-[600px] 2xl:max-w-[700px] font-bold text-center">
            {t(data.header_1)}
        </h1>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center lg:text-start mt-3">
            {t(data.header_2)}
        </h1>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-8">
            {t(data.title)}
        </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(data.small_title_1)}</span>
            <span>{t(data.small_text_1)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.small_title_2)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_2_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_2_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.small_title_3)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_3_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_3_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.small_title_4)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_4_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_4_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.small_title_5)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_5_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.small_text_5_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.Conclusion)}</span>
            <span className="font-bold">{t(data.small_text_6_1)}</span>
        </p>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-8">
            {t(secondData.title)}
        </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(secondData.small_title_1)}</span>
            <span>{t(secondData.small_text_1)}</span><br />
            <span className="text-center font-bold text-xl">{t(secondData.small_title_2)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_2_1)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(secondData.small_title_3)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_3_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_3_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(secondData.small_title_4)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_4_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_4_2)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_4_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(secondData.small_title_5)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_5_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(secondData.small_text_5_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(secondData.Conclusion)}</span>
            <span className="font-bold">{t(secondData.small_text_6_1)}</span>
        </p>
    </motion.main>
  )
}


export default Pioneering
