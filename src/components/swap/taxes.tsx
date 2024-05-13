import React from 'react'
import { Info } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip'
import { RU } from 'config/localization/languages'
import { taxItems } from 'constants/content'
import { useTranslation } from 'contexts/Localization'
import { cn } from 'lib/utils'

const Taxes = () => {
  const { t, currentLanguage } = useTranslation()

  return (
    <div className="flex justify-between text-xs text-white md:text-sm">
      {taxItems.map((item) => (
        <div className="inline-flex gap-x-1" key={item.name}>
          <p>
            <span className={cn('text-[#B4BCD0]', currentLanguage === RU && 'flex flex-col')}>{t(item.name)}:</span>{' '}
            {item.value}
          </p>
          {item.info && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="hidden size-4 text-[#B4BCD0] lg:block" />
                </TooltipTrigger>
                <TooltipContent className="text-white border-none bg-white/10 backdrop-blur-xl">
                  <p className="max-w-sm">{t(item.info)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      ))}
    </div>
  )
}

export default Taxes
