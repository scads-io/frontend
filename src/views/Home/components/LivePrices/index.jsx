import React, { useState, useEffect } from 'react'
import { useMatchBreakpoints } from '@scads/uikit'
import { useTranslation } from 'contexts/Localization'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import NewCard from 'components/NewCard'
import StatsTooltip from 'components/StatsTooltip'
import { useCaratPrice } from 'hooks/useBUSDPrice'
import { priceCardVariants } from 'components/variants'
import { usePulseInfo } from '../hooks/usePulseInfo'
import { useDashInfo } from '../hooks/useDashInfo'

const LivePrices = ({ value }) => {
  const { isMobile } = useMatchBreakpoints()
  const { theme } = value
  const { t } = useTranslation()

  const [showInfo, setShowInfo] = useState(false)

  const showInfoClickHandler = () => {
    setShowInfo(!showInfo)
  }

  let priceCardPosition = {}

  if (!isMobile) {
    priceCardPosition = priceCardVariants
  }

  const { caratPrice } = useCaratPrice()
  const { nextPulsePartAmount, scadsAmountOfPulse } = usePulseInfo()
  const { heldScadsAmount, totalCarat, rewardSpeed } = useDashInfo()
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  function calculateTimeLeft() {
    const nextPulseTime = new Date()
    nextPulseTime.setUTCHours(1, 0, 0)
    let difference = nextPulseTime.getTime() - new Date().getTime()
    if (difference < 0) difference += 24 * 60 * 60 * 1000
    if (difference < 0) difference += 24 * 60 * 60 * 1000
    const remainTime = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
    return remainTime
  }

  return (
    <div className="relative mt-10">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="text-center md:text-[40px] text-[#B52761] font-bold">{t('Live')}</h1>
        <span className={`text-2xl font-medium ${theme.isDark && 'text-[#B6B6B6]'}`}>{t('Statistics')}</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={priceCardPosition}
        >
          <NewCard
            theme={theme.isDark}
            className="container mx-auto flex flex-col py-8 xl:max-w-[1260px] 2xl:w-[1520px] 2xl:max-w-none"
          >
            <div className="flex flex-col items-center lg:flex-row justify-center gap-8 lg:gap-8 xl:gap-16 2xl:gap-28 py-6 px-7 lg:py-0 lg:px-0 w-[326px] md:w-full rounded-[30px]">
              <div
                className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 lg:text-center relative z-10"
                key={0}
              >
                <div
                  className={`${
                    isMobile ? 'justify-end' : 'justify-center'
                  } flex items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]`}
                >
                  <h1 className="font-bold text-center text-xl md:text-[32px]">
                    {rewardSpeed.toFixed(7)}
                  </h1>
                </div>
                <div className="flex flex-col w-[135px] md:w-[127px] lg:w-full">
                  <p className={`${theme.isDark ? 'text-[#B6B6B6]' : 'text-black'} text-sm md:text-lg font-medium`}>
                    {t('Adaptive Minting')}
                  </p>
                  <span className="text-[#B52761] text-base md:text-2xl font-medium">{t('Speed')}</span>
                </div>
              </div>
              <div
                className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 lg:text-center relative z-10"
                key={1}
              >
                <div
                  className={`${
                    isMobile ? 'justify-end' : 'justify-center'
                  } flex items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]`}
                >
                  <img
                    src="/images/home/scads_symbol_lighttheme.svg"
                    alt="symbol"
                    width={isMobile ? 10 : 14}
                    className={`${theme.isDark ? 'contrast-50' : 'invert'}`}
                    loading="lazy"
                  />
                  <h1 className="font-bold text-center text-xl md:text-[32px]">
                    {parseFloat(scadsAmountOfPulse).toFixed(2)}
                  </h1>
                </div>
                <div className="flex flex-col w-[135px] md:w-[127px] lg:w-full">
                  <p className={`${theme.isDark ? 'text-[#B6B6B6]' : 'text-black'} text-sm md:text-lg font-medium`}>
                    {t('Funds')}
                  </p>
                  <span className="text-[#B52761] text-base md:text-2xl font-medium">Pulse</span>
                </div>
              </div>
              <div
                className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 lg:text-center relative z-10"
                key={2}
              >
                <div
                  className={`${
                    isMobile ? 'justify-end' : 'justify-center'
                  } flex items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]`}
                >
                  <h1 className="font-bold text-center text-xl md:text-[32px]">
                    {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </h1>
                </div>
                <div className="flex flex-col w-[140px]">
                  <p className={`${theme.isDark ? 'text-[#B6B6B6]' : 'text-black'} text-sm md:text-lg font-medium`}>
                    {t('Next')}
                  </p>
                  <span className="text-[#B52761] text-base md:text-2xl font-medium">Pulse</span>
                </div>
              </div>
              <div
                className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 lg:text-center relative z-10"
                key={3}
              >
                <div
                  className={`${
                    isMobile ? 'justify-end' : 'justify-center'
                  } flex items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]`}
                >
                  <img
                    src="/images/home/twine_symbol_darktheme.png"
                    alt="symbol"
                    className={`${theme.isDark ? 'invert contrast-[.4]' : ''}`}
                    width={isMobile ? 8 : 12}
                    loading="lazy"
                  />
                  <h1 className="font-bold text-xl md:text-[32px]">
                    {parseFloat(totalCarat).toFixed(2)}
                  </h1>
                </div>
                <div className="flex flex-col w-[135px] md:w-[127px] lg:w-full">
                  <p className={`${theme.isDark ? 'text-[#B6B6B6]' : 'text-black'} text-sm md:text-lg font-medium`}>
                    {t('Minted Supply')}
                  </p>
                  <span className="text-[#B52761] text-base md:text-2xl font-medium">TWINE</span>
                </div>
              </div>
              <div
                className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 lg:text-center relative z-10"
                key={4}
              >
                <div
                  className={`${
                    isMobile ? 'justify-end' : 'justify-center'
                  } flex items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]`}
                >
                  <img
                    src="/images/home/scads_symbol_lighttheme.svg"
                    alt="symbol"
                    width={isMobile ? 10 : 14}
                    className={`${theme.isDark ? 'contrast-50' : 'invert'}`}
                    loading="lazy"
                  />
                  <h1 className="font-bold text-center text-xl md:text-[32px]">
                    {caratPrice.toFixed(2).toString()}
                  </h1>
                </div>
                <div className="flex flex-col w-[135px] md:w-[127px] lg:w-full">
                  <p className={`${theme.isDark ? 'text-[#B6B6B6]' : 'text-black'} text-sm md:text-lg font-medium`}>
                    {t('TWINE Price')}
                  </p>
                  <span className="text-[#B52761] text-base md:text-2xl font-medium">{t('Increase')}</span>
                </div>
              </div>
              <div
                className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 lg:text-center relative z-10"
                key={5}
              >
                <div
                  className={`${
                    isMobile ? 'justify-end' : 'justify-center'
                  } flex items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]`}
                >
                  <img
                    src="/images/home/scads_symbol_lighttheme.svg"
                    alt="symbol"
                    width={isMobile ? 10 : 14}
                    className={`${theme.isDark ? 'contrast-50' : 'invert'}`}
                    loading="lazy"
                  />
                  <h1 className="font-bold text-center text-xl md:text-[32px]">
                    {heldScadsAmount.toFixed(2).toString()}
                  </h1>
                </div>
                <div className="flex flex-col w-[135px] md:w-[127px] lg:w-full">
                  <p className={`${theme.isDark ? 'text-[#B6B6B6]' : 'text-black'} text-sm md:text-lg font-medium`}>
                    SCADS
                  </p>
                  <span className="text-[#B52761] text-base md:text-2xl font-medium">{t('Held')}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="py-1 px-4 bg-none border-2 border-[#B52761] transition-all duration-300 hover:border-[#655780] rounded-[30px] text-[#B52761] hover:text-[#655780] text-xs font-bold"
                onClick={showInfoClickHandler}
              >
                {!showInfo ? t('Info') : t('Hide')}
              </button>
            </div>
            {/* Tooltip */}
            <AnimatePresence>{showInfo && <StatsTooltip />}</AnimatePresence>
            {/* Tooltip */}
          </NewCard>
        </motion.div>
      </div>
    </div>
  )
}

export default LivePrices
