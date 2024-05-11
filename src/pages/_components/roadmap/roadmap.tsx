import React from 'react'
import { roadmapContent } from 'constants/content'
import { LampContainer } from 'components/ui/lamp-effect'
import SectionHeader from 'components/ui/section-header'
import AnimatedBackground from 'components/ui/animated-background'
import RoadmapItem from './roadmap-item'

const Roadmap = () => {
  return (
    <section className="relative mt-52">
      <LampContainer
        colorLine="violet-500"
        colorLeft="from-violet-500"
        colorRight="to-violet-500"
        className="absolute -top-20 -z-20 md:-top-48 lg:-top-20 2xl:-top-24"
      />
      <SectionHeader title="Roadmap" y={50} />
      <div className="relative z-10 mx-auto flex w-11/12 flex-col rounded-2xl bg-gradient-to-b from-white/15 to-transparent py-10 backdrop-blur-xl md:w-[720px] md:px-20 lg:w-fit">
        <div className="z-10 flex max-h-96 w-full">
          <ul className="block w-full overflow-y-scroll overscroll-y-none md:border-s md:border-white/20">
            {roadmapContent.map((item) => (
              <RoadmapItem key={item.id} date={item.date} l1={item.l1} l2={item.l2} />
            ))}
          </ul>
        </div>
      </div>
      <AnimatedBackground color="bg-violet-500" />
    </section>
  )
}

export default Roadmap
