import React, { useState } from 'react'
import { Info } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip'
import { RU } from 'config/localization/languages'
import { taxItems } from 'constants/content'
import { useTranslation } from 'contexts/Localization'
import { cn } from 'lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

const Taxes = () => {
  const [openTooltip, setOpenTooltip] = useState(null)
  const { t, currentLanguage } = useTranslation()

  const handleTooltipToggle = (itemName: string) => {
    setOpenTooltip((prev) => (prev === itemName ? null : itemName))
  }

  return (
    <div className="flex justify-between text-xs text-white md:text-sm">
      {taxItems.map((item) => (
        <div className="inline-flex gap-x-1" key={item.name}>
          <p className="whitespace-nowrap">
            <span className={cn('text-[#B4BCD0]', currentLanguage === RU && 'flex flex-col')}>{t(item.name)}:</span>{' '}
            {item.value}
          </p>
          {item.info && (
            <button className="lg:hidden" onClick={() => handleTooltipToggle(item.name)}>
              <Info className="size-4" />
            </button>
          )}
          {item.info && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="hidden size-4 text-white lg:block" />
                </TooltipTrigger>
                <TooltipContent className="text-white border-none bg-white/10 backdrop-blur-xl">
                  <p className="max-w-sm">{t(item.info)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <AnimatePresence mode="wait">
            {openTooltip === item.name && (
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="lg:hidden bg-white/10 backdrop-blur-xl absolute z-50 rounded-lg px-4 py-2 text-start"
              >
                {item.info}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
      {openTooltip && (
        <div
          className="bg-transparent w-screen h-screen absolute z-50 top-0 left-0"
          onClick={() => setOpenTooltip(null)}
        />
      )}
    </div>
  )
}

export default Taxes
