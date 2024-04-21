import React from 'react'
import { motion } from "framer-motion"
import { useTranslation } from 'contexts/Localization'
import { NewCard } from "components/Card"
import Footer from 'components/Footer'
import { PageMeta } from 'components/Layout/PageMeta'

const news = [
  {
    id: 0,
    img: "https://www.coinbureau.com/_next/image/?url=https%3A%2F%2Fimage.coinbureau.dev%2Fstrapi%2Fbitcoin_pyramid_88e6991fc2.jpg&w=2048&q=50",
    title: "What is a Layer-2 Blockchain?",
    link: "https://www.coinbureau.com/education/what-is-a-layer-2-blockchain/",
  },
  {
    id: 1,
    img: '/images/news/news_1.webp',
    title: "World Debt Clocks",
    link: "https://www.usdebtclock.org/world-debt-clock.html",
  },
  {
    id: 2,
    img: '/images/news/news_2.webp',
    title: "Why Bank Bail-Ins Are the New Bailouts",
    link: "https://www.investopedia.com/articles/markets-economy/090716/why-bank-bailins-will-be-new-bailouts.asp",
  },
]

const News = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-20 "
      >
        <div
          className={` ${
            theme ? "text-[#B6B6B6]" : "text-black"
          } flex flex-col items-center mt-40`}
        >
          <h1 className="text-[26px] lg:text-4xl 2xl:text-5xl max-w-[300px] lg:max-w-[600px] 2xl:max-w-[700px] font-bold">
            {t("The News")}
          </h1>
          <p className="text-xl max-w-[350px] lg:max-w-none 2xl:max-w-[700px] text-center">
            {t("news_header_text")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {news.map((item) => (
            <NewCard
              theme={theme}
              className="flex flex-col items-center lg:items-start w-[330px] h-[290px] md:w-[360px] md:h-[290px]"
              key={item.id}
            >
              <img
                src={item.img}
                className="w-[300px] md:w-full h-[200px] md:h-[200px] py-2 rounded-3xl object-cover"
                alt=""
              />
              <h1 className="text-lg text-center lg:text-start">
                {item.title}
              </h1>
              <a
                href={item.link}
                className="mt-auto pb-3 md:ms-auto text-base underline underline-offset-4 hover:text-[#B52761] transition-all duration-200"
                target="_blank"
                rel="noreferrer"
              >
                {t("View")}
              </a>
            </NewCard>
          ))}
        </div>
      </motion.main>
      <Footer theme={theme} className="mt-24" />
    </div>
  )
}

export default News
