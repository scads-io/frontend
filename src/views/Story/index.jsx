import React from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import {
    opacityVariants,
    tokenomicsCardVariants,
  } from 'components/variants'
import ScrollToTopButton  from 'components/ScrollToTopButton'
import Footer from 'components/Footer'
import { PageMeta } from 'components/Layout/PageMeta'

const storyContent = [
  {
    id: "st1",
    paragraph:
      "Once upon a time in the bustling town of Digitalia, people used a currency called “Fiat”. This was what everyone used for their daily trades - from buying bread at the baker’s to geting a new pair of shoes. But there was a problem. The value of Fiat kept changing wildly. One day, a loaf of bread cost one Fiat, the next day it might cost two. This made life hard for the people of Digitalia",
    img: "/images/story/fiat.webp",
  },
  {
    id: "st2",
    paragraph:
      "Then, one day, a group of wisemen introduced SCADS, a new kind of money. Unlike Fiat, SCADS was stable. It didn’t jump up and down in value. It was like a calm sea compared to the stormy waves of Fiat. The people of Digitalia were intrigued. “How does it work?” they asked",
    img: "/images/story/dollar.webp",
  },
  {
    id: "st3",
    paragraph:
      "“It’s simple,” said the Creators. “SCADS is digital money. It lives on a magical ledger called blockchain, which is very secure and fair. Nobody has control of them, nobody will steal them from you. You own them. And Everyone can see the transactions, but no one can cheat or change them once they’re made.”",
    img: "/images/story/bitcoin.webp",
  },
  {
    id: "st4",
    paragraph:
      "People started using SCADS for their everyday needs. They loved how stable it was. They loved that they own them. They believed that nobody would steal them or drop their value. Whether it was for a cup of cofee or paying the electricity bill, SCADS made everything smoother. And the best part? They didn’t need to carry cash or wait in long lines at the bank. Everything was done from their magical devices – smartphones and computers.",
    img: "/images/story/family.webp",
  },
  {
    id: "st5",
    paragraph:
      "Then came TWINE. TWINE was special. It was not just stable but also grew over time, like a plant in fertile soil. The Creators explained, “By simply holding onto SCADS in your digital wallet, you can earn TWINE. Think of it as a reward for being a loyal user.”",
    img: "/images/story/school.webp",
  },
  {
    id: "st6",
    paragraph:
      "People in Digitalia were excited. They started holding SCADS to earn TWINE. They found that TWINE was a great way to save for the future. Unlike their savings in the bank, which gave litle growth, TWINES grew steadily, offering them a sense of security for their future needs. “What about our daily spending? Can we use SCADS everywhere?” asked the people. “Yes,” said the creators. “You can use SCADS in many places. You can buy groceries, pay for services, and even send money to your friends and family without any hassle.”",
    img: "/images/story/old people.webp",
  },
  {
    id: "st7",
    paragraph:
      "As time went by, Digitalia transformed. The unstable days of Fiat were gone. People felt more secure and confident in their financial dealings. SCADS and TWINE didn’t just change how they spent or saved money; it changed their lives, offering stability and growth in an uncertain world",
    img: "/images/story/polygomous_family.webp",
  },
  {
    id: "st8",
    paragraph:
      "And so, the tale of SCADS and TWINE spread far and wide, as more people from neighboring towns adopted this new way of managing money, embracing a future where finance was stable, transparent, and accessible to all. And this is how the fiat story ended.",
    img: "/images/story/sad_man.webp",
  },
]

const Story = ({ value }) => {
  let isReverse = false

  const { theme } = value
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <PageMeta />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col items-center gap-y-8 mt-28 lg:mt-44 pb-20 ${
          theme ? "text-[#B6B6B6]" : "text-black"
        }`}
      >
        <h1 className="text-[26px] lg:text-4xl 2xl:text-5xl max-w-[300px] lg:max-w-[600px] 2xl:max-w-[700px] text-center lg:text-star font-bold">
          {t("The Tale of SCADS and TWINE")}
        </h1>
        {storyContent.map((story) => {
          isReverse = !isReverse
          return (
            <div
              key={story.id}
              className={`flex flex-col items-center justify-center gap-8 ${
                isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <motion.img
                src={story.img}
                alt="story"
                className="image-shadow max-w-[300px] md:max-w-[400px] rounded-3xl"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={tokenomicsCardVariants}
              />
              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={opacityVariants}
                className="max-w-[340px] md:max-w-[600px]"
              >
                {t(story.paragraph)}
              </motion.p>
            </div>
          )
        })}
      </motion.div>
      <Footer theme={theme} className="mt-24" />
      {createPortal(<ScrollToTopButton theme={theme} />, document.body)}
    </div>
  )
}

export default Story
