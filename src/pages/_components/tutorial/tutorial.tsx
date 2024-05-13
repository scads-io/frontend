import React from 'react'
import { Monitor, TabletSmartphone } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'
import { LampContainer } from 'components/ui/lamp-effect'
import SectionHeader from 'components/ui/section-header'
import AnimatedBackground from 'components/ui/animated-background'
import MobileInfo from './_components/mobile-info'
import DesktopInfo from './_components/desktop-info'

const Tutorial = () => {
  return (
    <section className="relative mt-52">
      <LampContainer
        colorLine="purple-500"
        colorLeft="from-purple-500"
        colorRight="to-purple-500"
        className="absolute -top-20 -z-10 md:-top-48 lg:-top-20 2xl:-top-24"
      />
      <SectionHeader title="Getting started" y={50} />
      <Tabs
        defaultValue="desktop"
        className="relative z-10 mx-auto mt-4 flex w-11/12 flex-col gap-x-12 rounded-2xl bg-gradient-to-b from-white/15 to-transparent py-10 backdrop-blur-xl md:w-[720px] md:flex-row md:px-10 lg:w-fit lg:px-20"
      >
        <TabsList className="relative z-10 flex h-fit gap-y-4 bg-transparent px-6 md:flex-col">
          <TabsTrigger
            value="desktop"
            className="flex w-28 items-center gap-x-2 rounded-3xl bg-transparent text-white data-[state=active]:bg-white/20"
          >
            <Monitor strokeWidth={1.5} size={16} /> Desktop
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="flex w-28 items-center gap-x-2 rounded-3xl bg-transparent text-white data-[state=active]:bg-white/20"
          >
            <TabletSmartphone strokeWidth={1.5} size={16} /> Mobile
          </TabsTrigger>
        </TabsList>
        <TabsContent value="desktop" className="max-w-2xl pl-2 md:pl-0">
          <DesktopInfo />
        </TabsContent>
        <TabsContent value="mobile" className="max-w-2xl pl-2 md:pl-0">
          <MobileInfo />
        </TabsContent>
      </Tabs>
      <AnimatedBackground color="bg-purple-500" />
    </section>
  )
}

export default Tutorial
