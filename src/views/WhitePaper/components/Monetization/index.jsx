import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { whitePaperVariants } from 'components/variants'

const Text1 = {
    Conclusion: "Conclusion:",
    header: "6. Monetization Strategy:",
    title_1: "Executive Summary:",
    text_1_1: "The monetization strategy for SCADS and TWINES is designed to generate sustainable revenue while maintaining the integrity and core values of the blockchain ecosystem. This strategy focuses on leveraging the unique features of both platforms to create multiple revenue streams.",
    title_1_2: "Revenue Models for SCADS:",
    text_1_2_1_header: "Transaction Fees:",
    text_1_2_1: "Implement a minimal transaction fee structure within the SCADS ecosystem. Given the stability and security of SCADS, these fees would be justifiable and competitive compared to traditional transaction fees.",
    text_1_2_2_header: "Premium Services:",
    text_1_2_2: "Offer premium features such as enhanced security options, priority transaction processing, or advanced analytics tools for a fee.",
    text_1_2_3_header: "Partnerships and Integrations:",
    text_1_2_3: "Collaborate with businesses and financial institutions to integrate SCADS into their payment and transaction systems, generating revenue through integration fees or revenue-sharing models.",
    title_1_3: "Revenue Models for TWINES:",
    text_1_3_1_header: "Asset Management Fees:",
    text_1_3_1: "Charge a nominal fee for managing digital assets through TWINE, particularly for advanced asset management features or personalized investment advice.",
    text_1_3_2_header: "Growth-Based Incentives:",
    text_1_3_2: "Introduce a performance-based fee model where fees are charged based on the linear growth achieved by TWINES assets.",
    text_1_3_3_header: "Institutional Partnerships:",
    text_1_3_3: "Partner with financial advisors, wealth management firms, and investment platforms to offer TWINES as an investment tool, generating revenue through licensing or subscription fees.",
    title_1_4: "Cross-Platform Synergies:",
    text_1_4_1_header: "Bundled Services:",
    text_1_4_1: "Bundled services incorporating both SCADS and TWINES, providing a comprehensive package for users interested in both stable transaction platforms and asset growth opportunities.",
    text_1_4_2_header: "Loyalty Programs:",
    text_1_4_2: "Loyalty programs that incentivize users to engage more with both platforms, such as discounts on transaction fees for TWINES users or enhanced growth rates for active SCADS users.",
    title_1_5: "Expansion and Diversification:",
    text_1_5_1_header: "New Market Penetration:",
    text_1_5_1: "Strategically enter new markets, especially in regions with high potential for blockchain adoption, and tailor monetization strategies to local market conditions and user preferences.",
    text_1_5_2_header: "Product Diversification:",
    text_1_5_2: "Continually assess market trends and user needs to develop new products or services that complement the SCADS and TWINES platforms.",
    title_1_6: "Regulatory Compliance and Sustainability:",
    text_1_6_1_header: "Compliance as a Value Proposition:",
    text_1_6_1: "Leverage the regulatory-compliant nature of SCADS and TWINES as a value proposition to attract users who require compliant blockchain solutions.",
    text_1_6_2_header: "Sustainable Revenue Growth:",
    text_1_6_2: "Focus on building sustainable revenue streams that align with the long-term growth and stability of the SCADS and TWINE ecosystems.",
    text_1_7: "The monetization strategy for SCADS and TWINES is centered on creating diverse and sustainable revenue streams while enhancing the value offered to users. By focusing on transaction fees, premium services, partnerships, and cross-platform synergies, SCADS and TWINES can achieve financial sustainability without compromising their core principles of security, stability, and user-centricity."
}

const Monetization = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <motion.main
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={whitePaperVariants}
        className={` ${
            theme.isDark ? "text-[#B6B6B6]" : "text-black"
            } container mx-auto flex flex-col items-center overflow-hidden pb-20`}
    >
        <h1 className="text-[24px] lg:text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px]">
            {t(Text1.header)}
            </h1>
        <p className="text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span className="text-center font-bold text-xl">{t(Text1.title_1)}</span>
            <span className="font-bold text-xl">{t(Text1.text_1_1)}</span><br />
            <span className="text-center font-bold text-xl">{t(Text1.title_1_2)}</span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_2_1_header)}</span>
                <span>{" "}{t(Text1.text_1_2_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_2_2_header)}</span>
                <span>{" "}{t(Text1.text_1_2_2)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_2_3_header)}</span>
                <span>{" "}{t(Text1.text_1_2_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(Text1.title_1_3)}</span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_3_1_header)}</span>
                <span>{" "}{t(Text1.text_1_3_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_3_2_header)}</span>
                <span>{" "}{t(Text1.text_1_3_2)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_3_3_header)}</span>
                <span>{" "}{t(Text1.text_1_3_3)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(Text1.title_1_4)}</span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_4_1_header)}</span>
                <span>{" "}{t(Text1.text_1_4_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_4_2_header)}</span>
                <span>{" "}{t(Text1.text_1_4_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(Text1.title_1_5)}</span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_5_1_header)}</span>
                <span>{" "}{t(Text1.text_1_5_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_5_2_header)}</span>
                <span>{" "}{t(Text1.text_1_5_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(Text1.title_1_6)}</span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_6_1_header)}</span>
                <span>{" "}{t(Text1.text_1_6_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;{" "}{t(Text1.text_1_6_2_header)}</span>
                <span>{" "}{t(Text1.text_1_6_2)}</span>
            </span><br />
            <span className="text-center font-bold text-xl">{t(Text1.Conclusion)}</span>
            <span className="font-bold">{t(Text1.text_1_7)}</span>
        </p>
    </motion.main>
  );
};


export default Monetization
