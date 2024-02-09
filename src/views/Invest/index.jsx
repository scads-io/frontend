import React, { useEffect, useState } from "react"
import { useTranslation } from 'contexts/Localization'
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"
import useMatchBreakpoints from 'hooks/useMatchBreakpoints'
import { investPageVariants, opacityVariants } from "components/variants"
import { NewCard } from "components/Card"
import ScadsMint from "views/ScadsMint"
import CaratMint from "views/CaratMint"


const Invest = ({ value }) => {
  const [active, setIsActive] = useState(false)
  const { t } = useTranslation()

  const scadsBtnClickHandler = () => {
    setIsActive(false)
  }

  const twineBtnClickHandler = () => {
    setIsActive(true)
  }

  const { theme, onScreen, setOnScreen } = value
  const { isMobile } = useMatchBreakpoints()

  let toggle = {}

  if (!isMobile) {
    toggle = investPageVariants
  }

  useEffect(() => {
    if (onScreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [onScreen])

  const closeCard = () => {
    setOnScreen(false)
  }
  
  return (
    <AnimatePresence mode="wait">
      {onScreen && (
        <motion.main
          initial="offscreen"
          whileInView="onscreen"
          exit="offscreen"
          transition={{ duration: 0.3 }}
          variants={toggle}
          className="invest lg:overflow-hidden lg:w-screen hidden lg:flex justify-center lg:top-24 z-50 relative lg:fixed"
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={opacityVariants}
          >
            <div
              className="absolute h-screen w-full bg-transparent left-0"
              role="presentation"
              onClick={closeCard} />
          </motion.div>
          <NewCard
            theme={theme}
            className={`overflow-x-hidden lg:h-[85vh] xl:h-[80vh] lg:w-10/12 lg:backdrop-blur-3xl !bg-opacity-60 ${
              theme && "!bg-[#2B2B37]"
            } relative`}
          >
            <div
              className={`flex justify-center xl:items-center h-full relative z-10 ${
                theme ? "text-white" : "text-black"
              }`}
            >
              <button
                type="button"
                className="absolute right-0 top-5 xl:top-10"
                onClick={closeCard}
              >
                <img
                  src={theme ? "/images/home/cross_light.svg" : "/images/home/cross_dark.svg"}
                  className="max-w-[50px]"
                  alt="cross"
                />
              </button>
              <div className="w-2/3">
                <div className="flex justify-between pt-5">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={scadsBtnClickHandler}
                      className={
                        active
                          ? "opacity-50"
                          : `border rounded-3xl w-[60px] h-[32px] ${
                              theme ? "border-white" : "border-black"
                            } opacity-100 text-sm`
                      }
                    >
                      Scads
                    </button>
                    <button
                      type="button"
                      onClick={twineBtnClickHandler}
                      className={
                        active
                          ? `border rounded-3xl w-[60px] h-[32px] ${
                              theme ? "border-white" : "border-black"
                            } opacity-100`
                          : "opacity-50"
                      }
                    >
                      Twine
                    </button>
                  </div>
                  <div
                    className={`flex gap-2 ${
                      theme ? "text-white" : "text-black"
                    } `}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <ul className="list-disc">
                        <li>{t('GAS')}</li>
                        <li>{t('SLIPPAGE')}</li>
                        <li>{t('TAX')}</li>
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <span>0.05%</span>
                      <span>3%</span>
                      <span>3%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-11 lg:mt-4 xl:mt-8 h-[60vh]">
                  <AnimatePresence mode="wait">
                    {active ? 
                      <CaratMint
                        theme={theme}
                        key="TWINE"
                      /> : 
                      <ScadsMint
                        theme={theme}
                        key="Scads"
                      />
                    }
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </NewCard>
        </motion.main>
      )}
    </AnimatePresence>
  )
}

export default Invest
