import { tokenomicsContent } from 'constants/content'
import SideNavigation from './_components/side-navigation'
import TokenomicsContent from './_components/tokenomics-content'
import { IoEllipse } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { useTranslation } from 'contexts/Localization'

const TokenomicsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="mb-24 mt-32 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        {t('Tokenomics')}
      </motion.h1>
      <div className="relative z-10">
        <div className="relative mx-auto flex scroll-smooth pt-12 md:gap-x-10 lg:max-w-[1024px] lg:gap-x-20 xl:max-w-[1240px] 2xl:max-w-[1340px]">
          <SideNavigation />
          <article className="space-y-12">
            {tokenomicsContent.map((item, index) => (
              <TokenomicsContent
                key={item.id}
                id={item.id}
                index={index + 1}
                title={item.title}
                paragraph={item.paragraph}
                paragraph_two={item.paragraph_two}
                list={item.list}
              />
            ))}
          </article>
        </div>
      </div>
      <IoEllipse
        className="absolute -top-1/2 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-2/3 bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] text-transparent blur-[800px] lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-indigo-600/80 blur-[300px] md:hidden"
        size={340}
      />
    </>
  )
}

export default TokenomicsPage
