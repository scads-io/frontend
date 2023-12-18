import React from "react"
import { createPortal } from 'react-dom'
import { useMatchBreakpoints } from '@scads/uikit'
import { useTranslation } from 'contexts/Localization'
import { motion } from "framer-motion/dist/framer-motion"
import Card from "components/NewCard"
import Page from 'components/Layout/Page'
import ScrollToTopButton  from 'components/ScrollToTopButton'
import Footer from 'components/Footer'
import {
  roadmapCardVariantsMobile,
  roadmapCardVariantsToLeft,
  roadmapCardVariantsToRight,
} from 'components/variants'

const roadmapContent = [
  {
    id: "r1",
    date: "April 2019",
    l1: "Research initiation",
    right: false,
  },
  {
    id: "r2",
    date: "3 Months",
    l1: "Project Planning",
    l2: "Risk Assessment and Management",
    l3: "Project Team Formation",
    right: true,
  },
  {
    id: "r3",
    date: "July 2019",
    l1: "Development process commences",
    right: false,
  },
  {
    id: "r4",
    date: "11 Months",
    l1: "Start building anticipation",
    l2: "Gather reviews from beta testers",
    right: true,
  },
  {
    id: "r5",
    date: "March 2021",
    l1: "Base algorithm completed",
    right: false,
  },
  {
    id: "r6",
    date: "2 Weeks",
    l1: "Scads contract implemented",
    right: true,
  },
  {
    id: "r7",
    date: "2 Weeks",
    l1: "TWINE contract implemented",
    right: false,
  },
  {
    id: "r8",
    date: "January 2022",
    l1: "Pulse contract implemented",
    right: true,
  },
  {
    id: "r9",
    date: "April 2022",
    l1: "Reserve contract implemented",
    right: false,
  },
  {
    id: "r10",
    date: "May 2022",
    l1: "Seignorage contract implemented",
    l2: "Treasury contract implemented",
    right: true,
  },
  {
    id: "r11",
    date: "2 Months",
    l1: "Proof of Holding protocol completed",
    right: false,
  },
  {
    id: "r12",
    date: "August 2022",
    l1: "Modifications to all smart contracts are implemented in response to alterations in regulatory requirements",
    right: true,
  },
  {
    id: "r13",
    date: "3 Months",
    l1: "Securing smart contracts",
    right: false,
  },
  {
    id: "r14",
    date: "December 2022",
    l1: "Adaptive minting speed completed",
    right: true,
  },
  {
    id: "r15",
    date: "3 Weeks",
    l1: "v2 modifications to all smart contracts are implemented in response to alterations in regulatory requirements",
    right: false,
  },
  {
    id: "r16",
    date: "April 2023",
    l1: "Proof of Concept release on testnet",
    right: true,
  },
  {
    id: "r17",
    date: "September 2023",
    l1: "Revision and final updates",
    right: false,
  },
  {
    id: "r18",
    date: "October 2023",
    l1: "Official release on mainnet",
    right: true,
  },
  {
    id: "r19",
    date: "November 2023",
    l1: "The commencement of the media campaign",
    l2: "Seeding social media",
    right: false,
  },
  {
    id: "r20",
    date: "February 2024",
    l1: "The media campaign kicks off in the mainstream media",
    l2: "Scads secured wallet completed",
    right: true,
  },
  {
    id: "r21",
    date: "February 2024",
    l1: "Lending will be added based on a user's self-provided collateral for withdrawal (lending does not incur interest, only transactions fees)",
    right: false,
  },
  {
    id: "r22",
    date: "March 2024",
    l1: "Payment system. Users will be able to pay locally with scads pegged to value in local currency. (The pegging occurs only on the time of transaction)",
    right: true,
  },
  {
    id: "r23",
    date: "March 2024",
    l1: "Scads is set to start development its own Layer 2 blockchain",
    right: false,
  },
  {
    id: "r23",
    date: "September 2024",
    l1: "Launch date",
    right: true,
  },
];

const Roadmap = ({ value }) => {
  const { theme } = value
  const { isMobile } = useMatchBreakpoints()
  const { t } = useTranslation()

  return (
    <Page>
      <div
        className={`flex flex-col md:items-center ms-8 sm:ms-0 mt-40 font-['Poppins'] overflow-hidden ${
          theme.isDark ? "text-[#B6B6B6]" : "text-black"
        }`}
      >
        <h1 className="font-bold text-[40px] text-center">SCADS</h1>
        <p className="text-center">{t("Less is more")}</p>
        <ol
          className={`border-s mt-16 flex flex-col items-start md:translate-x-1/2 md:mx-auto max-w-[240px] md:max-w-[450px] md:[&>*:nth-child(even)]:-translate-x-[108%] ${
            theme.isDark ? "text-white border-white" : "text-black border-black"
          }`}
        >
          {roadmapContent.map((item) => (
            <li key={item.l1} className="mb-10 ms-4 relative w-[300px] md:w-[340px]">
              <div
                className={`absolute w-3 h-3 rounded-full mt-10 bg-[#BF205D] ${
                  item.right
                    ? "-start-4 md:start-full -translate-x-1/2 md:translate-x-[40%]"
                    : "-start-4 -translate-x-1/2"
                }`}
              />
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={
                  isMobile
                    ? roadmapCardVariantsMobile
                    : item.right
                    ? roadmapCardVariantsToRight
                    : roadmapCardVariantsToLeft
                }
              >
                <Card
                  theme={theme.isDark}
                  className="py-4 ps-3 md:py-3 w-full h-fit"
                >
                  <time className="mb-1 text-lg font-bold leading-none">
                    {t(item.date)}
                  </time>
                  <ul className="list-none">
                    <li className="mt-4 text-base font-normal">{t(item.l1)}</li>
                    {item.l2 &&
                      <li className="mt-4 text-base font-normal">{t(item.l2)}</li>
                    }
                    {item.l3 &&
                      <li className="mt-4 text-base font-normal">{t(item.l3)}</li>
                    }
                  </ul>
                </Card>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
      <Footer theme={theme} className="mt-24" />
      {createPortal(<ScrollToTopButton />, document.body)}
    </Page>
  );
};

export default Roadmap;
