import React from 'react'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"
import { useMatchBreakpoints } from '@scads/uikit'
import { useTranslation } from 'contexts/Localization'
import Card from "components/NewCard"
import { motion } from "framer-motion/dist/framer-motion"
import { accordionCardVariants } from 'components/variants'

const accordionContent = [
  {
    id: "a1",
    header: "SCADS",
    p1: "SCADS distinguishes itself as an algorithmic stable coin that offers unique advantages:",
    ol_1: "1. Inherent Stability: SCADS is backed by its own ecosystem, eliminating the need for pegging and mitigating volatility risks. This provides a reliable hedge against economic recessions, government defaults, and currency depreciation.",
    ol_2: "2. Income Generation without Staking: Unlike many other currencies, SCADS doesn’t require staking for income generation. This preserves its status as an asset-class currency rather than a utility service.",
    ol_3: "3. Debt-Free Algorithm: The SCADS algorithm is structured to be entirely debt-free. Each SCADS in circulation is instantly minted against buy orders, ensuring that it's always backed by stable collateral.",
    ol_4: "4. User and Investor Focus: The algorithm's design prioritizes the benefits of users and investors. The growth and success of the ecosystem relies solely on its user community, without influence from third-party owners or founders.",
    p2: "Analysis: This user-centric approach and the emphasis on stability make SCADS a unique and potentially asset in the cryptocurrency landscape.",
  },
  {
    id: "a2",
    header: "TWINE",
    p1: "The TWINE curved linear model token introduces a unique and innovative system that combines value locking with a growing price floor, offering a dynamic approach to cryptocurrency:",
    ol_1: "1. Value Locking Mechanism: - The value locked within the TWINE token is determined by the number of TWINE tokens minted. Each new minting of a TWINE token increases the price of the token by a constant amount of 0.0000001.",
    ol_2: "2. Price Floor Development: - The token's price floor is established through the consistent increase in the price of the LINEAR CURVED with each newly minted TWINE token. This mechanism ensures that the token's value is intrinsically tied to the token itself.",
    ol_3: "3. Security and Stability: TWINE token offers a high level of security and stability by locking value within the token and continuously raising the price floor. This creates a reliable and safe investment opportunity for those participating in the cryptocurrency market.",
    ol_4: "4. Limited Lifetime Supply: - The total lifetime supply of TWINE is capped at 21 million tokens, ensuring scarcity and potentially driving demand.",
    ol_5: "5. Exclusive Access to SCADS Minting: - Once the market contains 5.5 million TWINE tokens, TWINE becomes the exclusive token capable of minting SCADS. This feature amplifies the desirability of TWINE, as it grants unique access to SCADS.",
    ol_6: "6. Speculative Nature and Price Growth Potential: - TWINE's speculative nature positions it for potential price growth driven by market demand, further enhancing its appeal to investors.",
    p2: "Analysis: The TWINE curved linear model token presents a forward-thinking approach to cryptocurrency, providing a balance between value locking and dynamic price appreciation. This innovative system offers a level of security and stability that makes it an intriguing option for those seeking to invest in the cryptocurrency market.",
  },
  {
    id: "a3",
    header: "PULSE",
    p1: "The PULSE investment protocol is a self-sustained mechanism designed to enhance the ecosystem's growth and stability. Here's a breakdown of its key features:",
    ol_1: "1. Daily Investment and Reinvestment: - PULSE actively engages in daily investment activities, involving buying and selling within the ecosystem. This generates profits that contribute to the growth of liquidity for both users and the system.",
    ol_2: "2. Network Effect and Growth: - By continually reinvesting, PULSE fosters a thriving network effect. This leads to an increase in the quantity of minted TWINE tokens and subsequent price growth, contributing to the overall development and sustainability of the ecosystem.",
    ol_3: "3. Sinking Fund for System Investment: - PULSE allocates 80% of its profits to a sinking fund. This fund is strategically utilized to bolster investments within the system, further fortifying its stability and expansion.",
    ol_4: "4. Reserve Allocation for SCADS Collateralization: - The remaining 20% of PULSE's profits are dedicated to the reserve, which is securely locked in a life wallet denominated in SCADS currency. This continuous collateralization process serves to reinforce the value and stability of SCADS.",
    p2: "Analysis: In summary, PULSE operates as an investment protocol within the ecosystem, actively reinvesting and generating profits to support growth. The allocation of profits into a sinking fund and reserve contributes to the system's longevity and the continuous collateralization of SCADS. This innovative mechanism plays a pivotal role in fortifying the ecosystem's stability and ensuring sustained value for its participants.",
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <h1 className="text-xl font-medium">{header}</h1>
        <img
          src='/images/home/accrodion_arrow.svg'
          alt="accordion_arrow"
          className={`transition-transform duration-500 ease-out ${
            isEnter && "rotate-180"
          }`}
        />
      </>
    )}
    buttonProps={{
      className: "flex justify-between w-full text-left",
    }}
    contentProps={{
      className: "transition-height duration-500 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const ContentAccordion = ({ value }) => {
  const { isMobile } = useMatchBreakpoints()
  const { theme } = value
  const { t } = useTranslation()

  let accordionCardPosition = {}

  if (!isMobile) {
    accordionCardPosition = accordionCardVariants
  }

  return (
    <div className="mt-24 bg-gradient-to-b from-[#FF006820] to-transparent relative">
      <img
        src={theme.isDark ? "/images/home/second_sphere_dark.svg" : "/images/home/rectangle_large.svg"}
        className="absolute left-0 top-0 max-w-[160px] md:max-w-none"
        alt="rectangle"
      />
      <img
        src="/images/home/hexagon.svg"
        className="absolute top-[40%] md:top-0 left-4 -translate-x-1/2 md:translate-x-0 md:left-[17%] lg:left-1/2 2xl:left-[20%] translate-y-3/4 max-w-[180px] md:max-w-none"
        alt="hex"
      />
      <img
        src={theme.isDark ? "/images/home/sphere_dark.svg" : "/images/home/second_cube.svg"}
        className="absolute -right-24 md:right-[23%] 2xl:right-1/4 top-6"
        alt="cube"
      />
      <img
        src={theme.isDark ? "/images/home/cube_large.webp" : "/images/home/cube_light.webp"}
        className="absolute -right-24 -rotate-45 translate-y-[200%] hidden md:block"
        alt="cube"
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={accordionCardPosition}
      >
        <Accordion
          className="flex flex-col items-center justify-center py-24"
          transition
          transitionTimeout={500}
        >
          <Card
            className="py-9 px-12 flex flex-col gap-20 lg:gap-16 w-[340px] lg:w-[790px]"
            theme={theme.isDark}
          >
            {accordionContent.map((item) => (
              <AccordionItem
                header={item.header}
                className={`max-w-[320px] lg:max-w-[691px] flex flex-col font-['Poppins'] text-base text-black ${
                  theme.isDark && "invert"
                }`}
                key={item.id}
              >
                <p className="pt-8 pb-6">{item.p1}</p>
                <ol className="flex flex-col gap-6">
                  <li>{t(item.ol_1)}</li>
                  <li>{t(item.ol_2)}</li>
                  <li>{t(item.ol_3)}</li>
                  <li>{t(item.ol_4)}</li>
                  {item.id === "a2" && <li>{t(item.ol_5)}</li>}
                  {item.id === "a2" && <li>{t(item.ol_6)}</li>}
                </ol>
                <p className="pt-6">{t(item.p2)}</p>
              </AccordionItem>
            ))}
          </Card>
        </Accordion>
      </motion.div>
    </div>
  );
};


export default ContentAccordion;
