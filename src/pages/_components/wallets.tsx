import React from 'react'
import { HoverEffect } from 'components/ui/card-hover-effect'
import { cardItems } from 'constants/content'
import SectionHeader from 'components/ui/section-header'

const Wallets = () => {
  return (
    <section className="relative mx-auto mt-32 flex flex-col items-center gap-y-4 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <SectionHeader title="Wallets" y={50} />
      <div className="z-10 flex max-w-[91%] flex-col flex-wrap gap-8 md:max-w-[768px] lg:max-w-[1024px] lg:flex-row">
        <HoverEffect items={cardItems} />
      </div>
      <div className="absolute top-1/2 h-28 w-full bg-violet-600 blur-[300px]" />
    </section>
  )
}

export default Wallets
