import React from 'react'
import { useMatchBreakpoints } from '@scads/uikit'
import { useTranslation } from 'contexts/Localization'
import { motion } from 'framer-motion/dist/framer-motion'
import NewCard from 'components/NewCard'
import tokens from 'config/constants/tokens'
import { 
  treasuryCardVariants,
  opacityVariants,
  fromTop,
  fromBottom, } from 'components/variants'
import { useDashInfo } from '../hooks/useDashInfo'

const Treasury = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const { treasuryTokenBalances, lockedBalance } = useDashInfo()
  const scadsBalanceInTreasury = treasuryTokenBalances[tokens.cake.address]
  const caratBalanceInTreasury = treasuryTokenBalances[tokens.carat.address]
  const usdtBalanceInTreasury = treasuryTokenBalances[tokens.usdt.address]
  const usdcBalanceInTreasury = treasuryTokenBalances[tokens.usdc.address]

  const scadsBalance =
    scadsBalanceInTreasury?.toExact().toString() !== '0'
      ? parseFloat(scadsBalanceInTreasury?.toExact()).toFixed(3).toString()
      : scadsBalanceInTreasury?.toExact().toString()

  const twineBalance = 
    caratBalanceInTreasury?.toExact().toString() !== '0'
      ? parseFloat(caratBalanceInTreasury?.toExact()).toFixed(3).toString()
      : caratBalanceInTreasury?.toExact().toString()

  const usdtBalance =
    usdtBalanceInTreasury?.toExact().toString() !== '0'
      ? parseFloat(usdtBalanceInTreasury?.toExact()).toFixed(3).toString()
      : usdtBalanceInTreasury?.toExact().toString()

  const usdcBalance =
    usdcBalanceInTreasury?.toExact().toString() !== '0'
      ? parseFloat(usdcBalanceInTreasury?.toExact()).toFixed(3).toString()
      : usdcBalanceInTreasury?.toExact().toString()

  return (
    <div className="container mx-auto flex flex-col items-center font-['Poppins'] mt-28 relative">
      <motion.img
        src="/images/home/dotted_line.svg"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
        variants={fromTop}
        className="hidden md:block absolute left-1/3 -top-20"
        alt="line"
      />
      <motion.img
        src="/images/home/dotted_line.svg"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
        variants={fromBottom}
        className="hidden md:block absolute right-1/3 top-8"
        alt="line"
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={opacityVariants}
        className="text-center flex justify-center"
      >
        <div>
          <h1 className="md:text-[40px] text-[#B52761] font-bold">{t("Treasury")}</h1>
          <span className={`text-2xl font-medium ${theme.isDark && "text-[#B6B6B6]"}`}>
            {t("Balance")}
          </span>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-10 md:gap-8 w-[265px] md:w-3/4 lg:w-[240px] lg:h-[220px] xl:w-[240px] mx-auto mt-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={treasuryCardVariants(1)}
          key={0}
        >
          <NewCard
            theme={theme.isDark}
            className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[190px] xl:w-[220px] 2xl:w-[270px] md:h-full md:mt-0"
          >
            <span className="text-[#B52761] text-2xl font-semibold">
              {t("Total")}
            </span>
            <span
              className={`text-base md:text-lg ${
                theme.isDark ? "text-[#B6B6B6]" : "text-[#424242]"
              }`}
            >
              {t("Balance")}
            </span>
            <div className="flex items-center justify-center gap-1 max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4">
              <p
                className={`${
                  theme.isDark ? "text-[#B6B6B6]" : "text-black"
                } text-base lg:text-2xl text-medium font-['Montserrat']`}
              >
                ${lockedBalance.toFixed(2).toString()}
              </p>
            </div>
          </NewCard>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={treasuryCardVariants(1)}
          key={1}
        >
          <NewCard
            theme={theme.isDark}
            className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[190px] xl:w-[220px] 2xl:w-[270px] md:h-full md:mt-0"
          >
            <span className="text-[#B52761] text-2xl font-semibold">
              Scads
            </span>
            <span
              className={`text-base md:text-lg ${
                theme.isDark ? "text-[#B6B6B6]" : "text-[#424242]"
              }`}
            >
              {t("Balance")}
            </span>
            <div className="flex items-center justify-center gap-1 max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4">
              <img
                src="/images/home/scads_symbol_lighttheme.svg"
                alt="symbol"
                width={isMobile ? 10 : 14}
                className={`${theme.isDark ? "contrast-50" : "invert"}`}
              />
              <p
                className={`${
                  theme.isDark ? "text-[#B6B6B6]" : "text-black"
                } text-base lg:text-2xl text-medium font-['Montserrat']`}
              >
                {scadsBalance}
              </p>
            </div>
          </NewCard>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={treasuryCardVariants(1)}
          key={2}
        >
          <NewCard
            theme={theme.isDark}
            className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[190px] xl:w-[220px] 2xl:w-[270px] md:h-full md:mt-0"
          >
            <span className="text-[#B52761] text-2xl font-semibold">
              TWINE
            </span>
            <span
              className={`text-base md:text-lg ${
                theme.isDark ? "text-[#B6B6B6]" : "text-[#424242]"
              }`}
            >
              {t("Balance")}
            </span>
            <div className="flex items-center justify-center gap-1 max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4">
              <img
                src="/images/home/twine_symbol_darktheme.png"
                alt="symbol"
                className={`${theme.isDark ? "invert contrast-[.4]" : ""}`}
                width={isMobile ? 8 : 12}
              />
              <p
                className={`${
                  theme.isDark ? "text-[#B6B6B6]" : "text-black"
                } text-base lg:text-2xl text-medium font-['Montserrat']`}
              >
                {twineBalance}
              </p>
            </div>
          </NewCard>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={treasuryCardVariants(1)}
          key={3}
        >
          <NewCard
            theme={theme.isDark}
            className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[190px] xl:w-[220px] 2xl:w-[270px] md:h-full md:mt-0"
          >
            <span className="text-[#B52761] text-2xl font-semibold">
              USDT
            </span>
            <span
              className={`text-base md:text-lg ${
                theme.isDark ? "text-[#B6B6B6]" : "text-[#424242]"
              }`}
            >
              {t("Balance")}
            </span>
            <div className="flex items-center justify-center gap-1 max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4">
              <p
                className={`${
                  theme.isDark ? "text-[#B6B6B6]" : "text-black"
                } text-base lg:text-2xl text-medium font-['Montserrat']`}
              >
                ${usdtBalance}
              </p>
            </div>
          </NewCard>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={treasuryCardVariants(1)}
          key={4}
        >
          <NewCard
            theme={theme.isDark}
            className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[190px] xl:w-[220px] 2xl:w-[270px] md:h-full md:mt-0"
          >
            <span className="text-[#B52761] text-2xl font-semibold">
              USDC
            </span>
            <span
              className={`text-base md:text-lg ${
                theme.isDark ? "text-[#B6B6B6]" : "text-[#424242]"
              }`}
            >
              {t("Balance")}
            </span>
            <div className="flex items-center justify-center gap-1 max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4">
              <p
                className={`${
                  theme.isDark ? "text-[#B6B6B6]" : "text-black"
                } text-base lg:text-2xl text-medium font-['Montserrat']`}
              >
                ${usdcBalance}
              </p>
            </div>
          </NewCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Treasury
