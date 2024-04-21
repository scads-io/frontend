import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion"
import { whitePaperVariants } from 'components/variants'

const data = {
    Conclusion: "Conclusion:",
    header: "3. Understanding SCADS Technology:",
    title_1: "In-Depth Analysis of SCADS, TWINES, Proof of Hold, and Treasury Technology",
    title_1_1: "1. SCADS:",
    text_1_1_1: "Core Technology: SCADS is a blockchain-based platform designed to create a stable and secure environment for digital transactions. Its primary innovation lies in its algorithmic approach to maintaining stability, independent of direct fiat currency pegging.",
    text_1_1_2: "Stability Mechanism: Unlike traditional stablecoins, SCADS utilizes a complex algorithmic framework to self-regulate its value, ensuring stability against market volatility. This system relies on the internal dynamics of the SCADS ecosystem, rather than external financial assets.",
    text_1_1_3: "Decentralization and Security: SCADS operates on a decentralized model, where there is no central control or authority, enhancing security and user trust. Transactions within the SCADS network are secured using advanced cryptographic techniques, providing robust protection against fraud and cyber threats.",
    title_1_2: "2. TWINES",
    text_1_2_1: "Operational Functionality: TWINE acts as a digital asset management tool within the SCADS ecosystem. It is designed for long-term asset growth, offering a linear and predictable increase in value over time.",
    text_1_2_2: "Growth Mechanism: TWINE’s growth is primarily driven by its unique Proof of Holding (POH) mechanism, where users earn TWINE tokens by holding SCADS in their wallets. This system encourages long-term investment and contributes to the overall stability of the ecosystem.",
    text_1_2_3: "Market Impact: By introducing a stable, linear growth asset like TWINE, the SCADS ecosystem provides a viable option for users looking for predictable returns, differentiating itself from the typically volatile cryptocurrency market.",
    title_1_3: "3. Proof of Hold (POH):",
    text_1_3_1: "Concept and Implementation: POH is a novel consensus mechanism introduced by SCADS. Unlike traditional proof-of-work or proof-of-stake systems, POH validates transactions based on the quantity of SCADS tokens held in a user’s wallet. This approach incentivizes holding rather than active trading, aligning with the ecosystem’s stability goals.",
    text_1_3_2: "Benefits and Innovations: POH offers several advantages, including reduced transaction costs, enhanced security, and a more energy-efficient consensus mechanism compared to traditional methods. It fosters a user-centric ecosystem where the benefits are directly tied to the participation and investment in the SCADS network.",
    title_1_4: "4. SCADS Treasury:",
    text_1_4_1: "Treasury Role: The SCADS Treasury serves as the financial backbone of the ecosystem. It manages the reserve of other stable coins for user withdrawals and engages in strategic asset management, including the exchange of other stablecoins for SCADS and holding TWINE.",
    text_1_4_2: "Strategic Asset Management: The Treasury’s decision to hold SCADS and TWINE is based on their long-term stability and growth potential. This move diversifies the Treasury’s asset portfolio and aligns with the overarching goal of promoting a stable and growing ecosystem.",
    text_1_4_3: "Market Influence: By actively managing its assets, the Treasury influences market dynamics. Its operations, such as exchanging other stablecoins for SCADS or holding TWINE, play a significant role in shaping the demand and supply within the SCADS ecosystem, impacting its overall health and sustainability.",
    text_1_5: "The SCADS and TWINE project, with its unique Proof of Hold mechanism and strategic Treasury operations, presents an innovative approach to digital asset management and blockchain stability. This in-depth analysis reveals how these technologies interplay to create a stable, secure, and sustainable ecosystem, offering a novel solution in the blockchain and cryptocurrency landscape.",
    title_2: "Unique Features and Operational Capabilities",
    title_2_1: "SCADS:",
    title_2_1_1: "Algorithmic Stability:",
    text_2_1_1: "Unique in its approach, SCADS maintains value stability algorithmically, without being pegged to any fiat currency, relying on its internal ecosystem for value stabilization.",
    title_2_1_2: "Decentralization:",
    text_2_1_2: "Operates on a fully decentralized model, ensuring that there is no central point of control or failure, enhancing the security and integrity of the system.",
    title_2_1_3: "Autonomous Operation:",
    text_2_1_3: "The system is designed to run autonomously, following a set of predefined rules, which reduces the need for manual intervention and makes the process more efficient.",
    title_2_1_4: "Resilience Against Market Fluctuations:",
    text_2_1_4: "SCADS provides a hedge against market volatility, making it a stable asset class, well-suited for long-term holding.",
    title_2_1_5: "Community-Driven:",
    text_2_1_5: "The growth of the SCADS ecosystem is directly tied to its user base, ensuring that development and evolution are driven by community needs and participation.",
    title_2_2: "TWINES",
    title_2_2_1: "Linear Asset Growth:",
    text_2_2_1: "TWINE is engineered for linear growth, offering a predictable and steady appreciation in value, which is a departure from the volatility commonly associated with cryptocurrencies.",
    title_2_2_2: "Passive Income Generation:",
    text_2_2_2: "Users can generate passive income through TWINE by simply holding SCADS in their wallets, making it an attractive option for long-term investors.",
    title_2_2_3: "Exclusive Minting Rights:",
    text_2_2_3: "TWINE possesses unique privileges in the SCADS ecosystem, including exclusive rights under certain conditions to mint SCADS, adding to its value and appeal.",
    title_2_2_4: "Symbiotic Relationship with Community:",
    text_2_2_4: "The value of TWINE is closely linked with the growth of the SCADS community, fostering a mutualistic relationship that benefits both the token and its holders.",
    title_2_2_5: "Accessibility and User-Friendly Interface:",
    text_2_2_5: "TWINE is designed to be accessible and easy to use, catering to both seasoned cryptocurrency enthusiasts and newcomers.",
    title_2_3: "Operational Capabilities",
    title_2_3_1: "Proof of Holding (POH) System:",
    text_2_3_1: "This innovative system, central to SCADS, validates transactions based on the holdings in user wallets, offering a more energy-efficient and secure alternative to traditional consensus mechanisms.",
    title_2_3_2: "Enhanced Security:",
    text_2_3_2: "Both SCADS and TWINE incorporate advanced security measures to protect against fraud and cyber threats, ensuring a safe environment for users.",
    title_2_3_3: "Efficient and Scalable:",
    text_2_3_3: "The platforms are built to efficiently handle a growing number of transactions and users, ensuring scalability and long-term viability.",
    title_2_3_4: "User-Centric Design:",
    text_2_3_4: "Focused on providing a seamless user experience, SCADS and TWINE offer intuitive interfaces and features that cater to user needs and preferences.",
    text_3: "The unique features and operational capabilities of SCADS and TWINE set them apart in the blockchain space. Their innovative approaches to stability, asset growth, and transaction validation position them as forward-thinking solutions in digital finance."
}

const Technology = ({ value }) => {
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
            {t(data.title_1)}
        </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(data.title_1_1)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_1_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_1_2)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_1_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_1_2)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_2_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_2_2)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_2_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_1_3)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_3_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_3_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.title_1_4)}</span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_4_1)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_4_2)}</span>
            </span>
            <span>
                <span className="ml-6">&bull;</span>
                <span>{" "}{t(data.text_1_4_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(data.Conclusion)}</span>
            <span className="font-bold">{t(data.text_1_5)}</span>
        </p>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-8">
            {t(data.title_2)}
        </h1>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-8">
            {t(data.title_2_1)}
        </h1>
        <span className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(data.title_2_1_1)}</span>
            <span>{t(data.text_2_1_1)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_1_2)}</span>
            <span>{t(data.text_2_1_2)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_1_3)}</span>
            <span>{t(data.text_2_1_3)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_1_4)}</span>
            <span>{t(data.text_2_1_4)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_1_5)}</span>
            <span>{t(data.text_2_1_5)}</span><br />
        </span>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-8">
            {t(data.title_2_2)}
        </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(data.title_2_2_1)}</span>
            <span>{t(data.text_2_2_1)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_2_2)}</span>
            <span>{t(data.text_2_2_2)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_2_3)}</span>
            <span>{t(data.text_2_2_3)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_2_4)}</span>
            <span>{t(data.text_2_2_4)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_2_5)}</span>
            <span>{t(data.text_2_2_5)}</span>
        </p>
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px] leading-normal md:leading-tight mt-8">
            {t(data.title_2_3)}
        </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(data.title_2_3_1)}</span>
            <span>{t(data.text_2_3_1)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_3_2)}</span>
            <span>{t(data.text_2_3_2)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_3_3)}</span>
            <span>{t(data.text_2_3_3)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.title_2_3_4)}</span>
            <span>{t(data.text_2_3_4)}</span><br />
            <span className="text-center font-bold text-xl">{t(data.Conclusion)}</span>
            <span className="font-bold">{t(data.text_3)}</span>
        </p>
    </motion.main>
  )
}


export default Technology
