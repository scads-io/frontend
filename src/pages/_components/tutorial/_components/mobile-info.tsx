import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'contexts/Localization'
import { tutorialMobile } from 'constants/content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'

type TabValue = 'metamask' | 'trust' | 'binance'

type Step = {
  label: string
  list: {
    li1: string | null
    li2: string | null
    li3: string | null
    li4: string | null
    li5: string | null
    li6: string | null
  }
}

const tabsItems = [
  { label: 'Metamask', value: 'metamask', imgPath: '/images/metamask.svg' },
  {
    label: 'Trust wallet',
    value: 'trust',
    imgPath: '/images/trust.svg',
  },
]

const MobileInfo = () => {
  const [currentTab, setCurrentTab] = useState<TabValue>('metamask')

  console.log(currentTab)

  const { t } = useTranslation()

  return (
    <Tabs defaultValue="metamask" className="relative z-20 flex flex-col items-center max-h-96 md:items-start">
      <TabsList>
        {tabsItems.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value as TabValue}
            onFocus={() => setCurrentTab(tab.value as TabValue)}
            className="flex items-center gap-x-2 rounded-3xl bg-transparent text-white data-[state=active]:bg-white/20"
          >
            <Image src={tab.imgPath} alt={tab.label} width={24} height={24} />
            <AnimatePresence>
              {currentTab === tab.value && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{
                    width: 0,
                    opacity: 0,
                    transition: { width: { delay: 0.1 } },
                  }}
                >
                  <span>{t(tab.label)}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsTrigger>
        ))}
      </TabsList>
      <AnimatePresence mode="wait">
        <TabsContent
          value={currentTab}
          className="z-20 mt-4 space-y-12 overflow-x-hidden overflow-y-auto overscroll-y-none"
        >
          {tutorialMobile[currentTab].map((step: Step) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={step.label}
              className="w-11/12"
            >
              <div className="space-y-2">
                <p className="text-xl font-medium text-white">{t(step.label)}</p>
                <ol className="space-y-1 text-[#B4BCD0]">
                  {Object.values(step.list).map((value) => value && <li key={value}>{t(value)}</li>)}
                </ol>
              </div>
            </motion.div>
          ))}
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  )
}

export default MobileInfo
