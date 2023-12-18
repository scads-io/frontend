import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import { whitePaperVariants } from 'components/variants'

const Text1 = {
    end: "End of White Paper",
    header: "13. Contact Information:",
    text_1: "Contact Details for Further Inquiries:  TG Support  @scads_support, Alexander  @scadswp; email: j@scads.io",
    text_2: "Investment and Partnership Opportunities: TG @scads_support, Alexander @scadswp"
}

const Contact  = ({ value }) => {
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
            } container mx-auto flex flex-col items-center font-['Poppins'] overflow-hidden pb-20`}
    >
        <h1 className="text-3xl font-bold text-center max-w-[340px] md:max-w-[640px] lg:max-w-[800px]">
            {t(Text1.header)}
        </h1>
        <p className="font-['Poppins'] text-base lg:text-lg mt-[21px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(Text1.text_1)}</span>
            </span>
            <span>
                <span className="font-bold ml-6">&bull;</span>
                <span>{" "}{t(Text1.text_2)}</span>
            </span><br />
            <span className="text-center font-bold mt-4">{t(Text1.end)}</span>
        </p>
    </motion.main>
  );
};


export default Contact
