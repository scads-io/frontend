import React from 'react'
import { useTranslation } from 'contexts/Localization'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/ui/dialog'
import ScadsForm from './scads-form'
import TwineForm from './twine-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Button } from '../ui/button'
import { cn } from 'lib/utils'
import { RU } from 'config/localization/languages'

const SwapModal = ({ navigation }: { navigation?: boolean }) => {
  const { t, currentLanguage } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <span
            className={cn(
              'button-primary relative cursor-pointer rounded-lg border border-[#8a6cff] px-6 py-2 text-sm font-semibold transition',
              currentLanguage === RU && 'px-2 md:px-6',
            )}
          >
            {t('Swap')}
          </span>
        ) : (
          <Button className="px-10">Start</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[91%] rounded-3xl border-none bg-dark-blue md:max-w-lg px-2 md:px-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-semibold text-white">{t('Swap')}</DialogTitle>
          <DialogDescription>
            <Tabs defaultValue="scads">
              <TabsList className="flex w-fit mx-auto md:mx-0 justify-start gap-x-2 rounded-3xl border border-white/10 bg-white/[.02]">
                <TabsTrigger value="scads" className="px-4 py-1 text-sm text-white rounded-3xl">
                  Scads
                </TabsTrigger>
                <TabsTrigger value="twine" className="px-4 py-1 text-sm text-white rounded-3xl">
                  Twine
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="scads"
                className="focus:border-none active:border-none focus:outline-none active:outline-none focus-visble:ring-0 focus-visible:outline-none focus-visible:border-none"
              >
                <ScadsForm />
              </TabsContent>
              <TabsContent
                value="twine"
                className="focus:border-none active:border-none focus:outline-none active:outline-none focus-visble:ring-0 focus-visible:outline-none focus-visible:border-none"
              >
                <TwineForm />
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SwapModal
