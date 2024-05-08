import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip'
import { taxItems } from 'constants/content'
import { useTranslation } from 'contexts/Localization'
import { Info } from 'lucide-react'

const Taxes = () => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between text-xs text-white md:text-sm">
      {taxItems.map((item) => (
        <div className="inline-flex gap-x-1" key={item.name}>
          <p>
            <span className="text-[#B4BCD0]">{t(item.name)}:</span> {item.value}
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
