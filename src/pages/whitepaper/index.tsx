// import Conclusion from "./_components/conclusion";
// import Contact from "./_components/contact";
// import CalltoAction from "./_components/cta";
// import FuturePlans from "./_components/future-plans";
// import Implementation from "./_components/implementation";
// import Intro from "./_components/intro";
// import Market from "./_components/market";
// import Monetization from "./_components/monetization";
// import Pioneering from "./_components/pioneering";
// import Regulatory from "./_components/regulatory";
// import Sustainability from "./_components/sustainability";
// import Technological from "./_components/technological";
// import Technology from "./_components/technology";
// import Understanding from "./_components/understanding";
import { Button } from 'components/ui/button'
import { useTranslation } from 'contexts/Localization'
import { motion } from 'framer-motion'
import Link from 'next/link'

const WhitepaperPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight leading-none text-transparent lg:text-[80px]"
        >
          {t('Coming soon...')}
        </motion.h1>
        <Link href="/">
          <Button className="px-8 mt-4">Home</Button>
        </Link>
      </div>
      {/* <Pioneering />
      <Intro />
      <Technology />
      <Understanding />
      <Market />
      <Technological />
      <Monetization />
      <Implementation />
      <Regulatory />
      <Sustainability />
      <FuturePlans />
      <Conclusion />
      <CalltoAction />
      <Contact /> */}
    </>
  )
}

export default WhitepaperPage
