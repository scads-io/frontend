'use client'

import { CloseIcon } from 'components/ui/close-icon'
import { EN, RU } from 'config/localization/languages'
import { tokenomicsContent } from 'constants/content'
import { useTranslation } from 'contexts/Localization'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from 'hooks/useOutsideClick'
import { cn } from 'lib/utils'
import { Fragment, useRef } from 'react'

const CardDetails = ({
  active,
  id,
  setActive,
}: {
  active: (typeof tokenomicsContent)[number] | boolean | null
  id: string
  setActive: () => void
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, setActive)

  const { t, currentLanguage } = useTranslation()

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-fit max-h-[80%] w-11/12 max-w-[600px] flex-col overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl md:w-full lg:w-fit lg:max-w-4xl"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
                onClick={setActive}
              >
                <CloseIcon />
              </motion.button>
              <div className="overflow-y-scroll md:overflow-y-hidden">
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-white">
                      {t(active.title)}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.paragraph}-${id}`}
                      className="text-sm text-[#B4BCD0] md:text-base"
                    >
                      {t(active.paragraph)}
                    </motion.p>
                  </div>
                </div>

                {active.list && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 overflow-auto pb-4 text-xs text-[#B4BCD0] md:h-fit md:text-sm lg:text-base"
                  >
                    <ul className="flex max-w-[340px] list-disc flex-col gap-y-2 px-8 text-sm md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1031px]">
                      {active.list.map((item, index) => (
                        <Fragment key={index}>
                          {item.list_one && <li>{t(item.list_one)}</li>}
                          {currentLanguage === EN && (
                            <>
                              {item.list_two && <li>{t(item.list_two)}</li>}
                              {item.list_three && <li>{t(item.list_three)}</li>}
                              {item.list_four && <li>{t(item.list_four)}</li>}
                            </>
                          )}
                          {currentLanguage === RU && id !== 'minting-speed' && (
                            <>
                              {item.list_two && <li>{t(item.list_two)}</li>}
                              {item.list_three && <li>{t(item.list_three)}</li>}
                              {item.list_four && <li>{t(item.list_four)}</li>}
                            </>
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {active.paragraph_two && (
                  <div className="relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-start gap-4 overflow-auto pb-10 text-xs text-[#B4BCD0] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base"
                    >
                      {t(active.paragraph_two)}
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default CardDetails
