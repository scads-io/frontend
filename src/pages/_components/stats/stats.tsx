import Treasury from './treasury'
import GeneralStats from './general-stats'
import { Separator } from 'components/ui/separator'

const Stats = () => {
  return (
    <section className="relative mx-auto mt-40 flex max-w-[340px] flex-col gap-y-12 rounded-3xl border border-white/10 bg-transparent bg-gradient-to-b from-white/10 via-transparent to-transparent px-4 backdrop-blur-xl md:max-w-[700px] md:px-0 lg:w-full lg:max-w-[1024px] lg:gap-y-16 xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <GeneralStats />
      <Separator className="left-0 top-1/2 bg-white/10 lg:absolute" />
      <Treasury />
      <div className="absolute h-[600px] w-full bg-indigo-600/80 blur-[300px] md:left-1/2 md:top-1/3 md:h-1/3 md:w-full md:-translate-x-1/2" />
    </section>
  )
}

export default Stats
