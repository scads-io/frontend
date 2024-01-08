import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { useMatchBreakpoints } from '@scads/uikit'
import { motion } from "framer-motion/dist/framer-motion"
import Card from "components/NewCard"
import {
  imgVariants,
  opacityVariants,
  walletCardVariants,
} from 'components/variants'

const wallets = [
  {
    id: "w1",
    title: "SCADS",
    description: "Decentralized, stable digital currency for secure global transactions, not pegged based on (POH).",
  },
  {
    id: "w2",
    title: "TWINE",
    description: "Linearly growing digital asset for minted by holding SCADS long-term, secured and trusted investment.",
  },
  {
    id: "w3",
    title: "SEIGNORAGE",
    description: "The system self cost of minting.",
  },
  {
    id: "w4",
    title: "PULSE",
    description: "Self-sustained investment protocol & network effect within SCADS ecosystem.",
  },
  {
    id: "w5",
    title: "TREASURY",
    description: "Financial backbone of SCADS, managing assets and liquidity.",
  },
  {
    id: "w6",
    title: "LIQUIDITY WALLET",
    description: "Is a depository to supply liquidity to the market as makers and liquidity providers.",
  },
];

const Wallets = ({ value }) => {
  const { isMobile } = useMatchBreakpoints()
  const { theme } = value
  const { t } = useTranslation()

  let cardVariants = {};

  if (!isMobile) {
    cardVariants = walletCardVariants;
  }

  const handleClickScroll = () => {
    const element = document.getElementById("tokenomics");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex flex-col relative mt-40">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={imgVariants}
        className="relative top-0"
      >
        <img
          src={theme.isDark.isDark ? "/images/home/wallets_img_dark.webp" : "/images/home/wallets_image_light.webp"}
          className="absolute z-0 top-0 w-auto lg:-left-10 xl:left-10 2xl:left-44 h-[700px] hidden md:block"
          alt="background"
          loading="lazy"
        />
      </motion.div>
      <img
        src="/images/home/wallets_img_mobile.webp"
        className="absolute top-6 ms-2 md:hidden"
        alt="background"
        loading="lazy"
      />
      <div className="flex flex-col justify-center items-start gap-2 lg:gap-8 md:max-w-[700px] lg:max-w-[1100px] mx-auto mt-10">
        <h1 className="relative z-10 text-[#B52761] text-2xl lg:text-[40px] font-bold ms-10">
          {t("Wallets")}
        </h1>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <Card theme={theme.isDark}>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-x-[100px] md:gap-x-[40px] lg:gap-x-[100px] gap-y-[60px] max-w-[322px] sm:max-w-none lg:gap-y-20 justify-center items-center py-7 md:py-10 lg:py-7 h-full">
              {wallets.map((item) => (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={opacityVariants}
                  className="flex flex-col gap-5 ps-6 pe-20 md:ps-0 md:pe-0 "
                  key={item.id}
                >
                  <h1
                    className={`${
                      theme.isDark ? "text-white" : "text-[#B52761]"
                    } font-bold text-xl`}
                  >
                    {t(item.title)}
                  </h1>
                  <p
                    className={`${
                      theme.isDark ? "text-[#B6B6B6]" : "text-black"
                    } md:h-24 font-medium text-sm lg:text-base max-w-[243px] lg:max-w-[260px]`}
                  >
                    {t(item.description)}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center py-7">
              <button
                type="button"
                className="bg-[#B52761] py-[14px] px-9 rounded-[30px] font-semibold text-white text-xl hover:bg-[#655780] transition-all duration-300 focus:ring-0 focus:outline-none"
                onClick={handleClickScroll}
              >
                {t("More Info")}
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};


export default Wallets
