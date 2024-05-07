import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'
import { cn } from 'lib/utils'
import { useTranslation } from 'contexts/Localization'

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false)

  const { t } = useTranslation()

  return (
    <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center lg:bottom-0">
      <Button
        onClick={() => setIsVisible(!isVisible)}
        variant="ghost"
        className="rounded-lg rounded-b-none bg-white/10 font-normal text-white backdrop-blur-2xl hover:bg-white/20 hover:text-white"
      >
        {t('Disclaimer')} <ChevronUp className={cn('size-4', isVisible && 'rotate-180')} />
      </Button>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
            <motion.p className="min-w-[340px] rounded-t-xl bg-white/10 p-6 text-sm text-[#B4BCD0] backdrop-blur-2xl md:min-w-0 md:text-base">
              {t(
                'While the SCADS algorithm guarantees the stability of SCADS as a stable coin and assures that TWINE is a linear token with a constant growth rate for each minted TWINE, it is important to note that SCADS cannot be held responsible for events such as global internet failure, nuclear war, or users not securelysafeguarding their passwords or seed phrases. The algorithm remains impervious to market conditions, inflation, or recession. The SCADS algorithm is fully autonomous, self-maintained, and self-sufficient. Once launched, it is immutable and cannot be modified, with updates limited to the front end only. It operates within the framework of current global regulatory ambiguity, functioning as a decentralized algorithm. SCADS has no control over the jurisdiction from which its clients operate. As such,SCADS encourages all users to verify the legislation applicable intheir respective countries. SCADS holds no liability for any breach of usage by users. It is strongly advised for users to "Do Your Own Research" (DYOR) before engaging in any transactions or investments within the SCADS ecosystem.',
              )}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Disclaimer
