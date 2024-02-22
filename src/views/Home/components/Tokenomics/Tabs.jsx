import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useTranslation } from 'contexts/Localization'
import { NewCard } from "components/Card"
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"

const tokenomics = [
  {
    id: 0,
    text: "SCADS is a stablecoin, its value referencing the USD for ease of use. It's important to note that SCADS is not pegged to the USD. It can only be minted when backed by collateral, specifically through the exchange of stablecoins for SCADS. This system operates independently, is characterized by fairness, and operates in a permissionless and fully decentralized manner. It continuously evolves within an automated, self-sustaining environment. Crucially, SCADS cannot be subject to seizure or freezing, as each user holds it in their own wallet. This ensures complete and genuine decentralized freedom and independence. It's worth emphasizing that SCADS has no owners who could be compelled to jeopardize users funds.",
    thumb: "SCADS",
  },
  {
    id: 1,
    text: `TWINE is a speculative token that also functions as a linear token, ensuring steady price growth and granting an advantageous position for exclusive SCADS minting.`,
    bullet_one:
      "EXCLUSIVITY: Upon reaching a circulation supply of 5.5 million, TWINE gains exclusive rights to purchase SCADS. This exclusivity feature presents the potential for significant price appreciation, making it an enticing choice for investors seeking higher returns. This status of exclusivity is effective for a duration of 5 years.",
    bullet_two:
      "THE CURVED LINEAR FACTOR: The value encapsulated within the token is determined by the number of minted TWINE tokens. With each new TWINE token minted, the price experiences a consistent increase of 0.0000001.",
    thumb: "TWINE",
  },

  {
    id: 2,
    text: "The market cap for TWINE is defined by a lifetime supply of 21 million tokens. When the cap of 21 million tokens is reached, the calculated linear curved price for each TWINE will be $2.10. However, it's important to note that the market demand price range for TWINE is virtually limitless and will be determined by the level of demand in the market. This means that the price of TWINE can potentially exceed the calculated $2.10 per token based on market dynamics and demand levels.",
    thumb: "MARKET CAP",
  },
  {
    id: 3,
    text: "As a fair algorithm, the minting speed is dynamically adjusted in response to the market capitalization of SCADS and the allocated time frame to reach the 21 million market cap. This adaptive approach ensures a balanced and equitable minting process within the ecosystem.",
    bullet_one:
      "Reward Speed Calculation: Minting Speed = (TWINE < 21,000,000 TWINE - TWINE ALREADY MINTED>) / (SCADS <TOTAL SCADS IN THE MARKET> * TIME <IN MINUTES, 15 YEARS IN MINUTES - TIME ELAPSED SINCE THE BEGINNING>)",
    bullet_two:
      "Reward Amount Calculation: TWINE Mint Amount = Hold SCADS Amount * Minting Speed * Difference in Time (in minutes)",
    bullet_three:
      "Function to Calculate Current Reward Speed: getCurrentRewardSpeed(): This function calculates the current minting speed. These formulas and functions are integral to the reward distribution mechanism within the algorithm. They ensure that rewards are distributed in a manner that aligns with the algorithm's design and objectives.",
    thumb: "MINTING SPEED",
  },
  {
    id: 4,
    text: "Is a smart contract that performs daily operations within the algorithm It buys (SCADS), mint (TWINE), and sells (TWINE) to (SCADS). It generates profits for the system and allocates them as follows: 80% goes back as a sinking fund increasing its investment in the system, and 20% goes to the LQUIDITY wallet  in (SCADS) currency, which strengthens the collateralization of (SACDS). While creating a network effect due to transacting constantly. The self-sustaining network effect is a first that pioneers the algorithm on another layer.",
    thumb: "PULSE",
  },
  {
    id: 5,
    text: "The wallet functions as a repository for surplus liquidity within the algorithm. This excess liquidity is strategically invested as a liquidity provider and market maker within the cryptocurrency industry. All assets within the wallet are denominated in SCADS and TWINE and are allocated exclusively as investments in SCADS. The algorithm oversees and manages the wallet, ensuring that liquidity is supplied based on predefined criteria, contributing to the stability and functionality of the SCADS ecosystem.",
    thumb: "LIQUIDITY WALLET",
  },
  {
    id: 6,
    text: `Security at the Core: PROOF OF RESERVE and PROOF OF COLLATERAL in SCADS Reserve and Collateral Crucial in SCADS: Integral Components: SCADS places utmost importance on the concept of reserve and collateral, considering them integral components of its operational framework. These elements are securely held in the treasury and users' wallets, forming the backbone of SCADS's financial robustness. Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL: Proactive Measures: Despite having reserves and collateral securely held, SCADS reinforces its commitment to transparency through specific contracts. Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL are established, providing clear verification mechanisms for the community. Mandatory Collateral for SCADS Minting: Risk Mitigation: SCADS takes a stringent approach to minting, requiring collateral for every SCADS minted. This ensures a risk-averse model, preventing the scenario where SCADS would exist without the necessary backing. Interconnected System: Collateralization Linkages: Logically intertwined, the SCADS ecosystem establishes a strong link between SCADS minting, collateral, and the subsequent minting of TWINE. This collateralized system contrasts with other stablecoins, such as USDT or USDC, providing a more tangible and secure financial foundation. Collateralized Assurance: SCADS, through the implementation of PROOF OF RESERVE and PROOF OF COLLATERAL contracts, reinforces its commitment to a robust and transparent financial model. By ensuring that every SCADS is minted with collateral, and subsequently linking the minting of TWINE to SCADS, SCADS establishes a genuinely collateralized system, setting it apart from other stablecoins in the digital financial landscape.`,
    thumb: "TREASURY",
  },
  {
    id: 7,
    text: "The algorithm operates in a permissionless, completely decentralized, and independent manner. There are no admin keys or owners, the system functions autonomously through interactions between contracts, without any human intervention. Upon launch, the Algorithm will have admin keys enabled for 3 month, allowing for potential fixes if necessary. However, during this access period, admins will have no access to contracts. Following this initial period, public admin keys will be burned, making them visible to all users. After the burning, developers will only have access to the front end for UI/UX improvements, ensuring that the core functionality remains decentralized and secure. The algorithm is immutable; it cannot be modified, updated, or changed. Any new venture or addition would need to be implemented as an added Layer 2. This emphasizes the unalterable nature of the algorithm's core functionality.",
    thumb: "DECENTRALIZATION",
  },
  {
    id: 8,
    text: "With a primary focus on the security and well-being of all users, SCADS, functioning as a stable coin, is inherently resistant to price manipulation. Additionally, the SCADS ecosystem has implemented a limited set of rules designed to ensure the safety of both the system and its participants:",
    bullet_one:
      "A 25% penalty for withdrawals made within a 24-hour period.",
    bullet_two: "A cap of 50,000 SCADS on withdrawals per day.",
    bullet_three:
      "Should a user require immediate access to their full capital, SCADS, being a stable asset, can be employed as a high-quality collateral for obtaining loans or bridge funding from various platforms.",
    text_two:
      "These rules act as safeguards, fortifying the algorithm against sudden fund withdrawals or potential manipulation. They are structured to maintain the stability and integrity of the system for all participants.",
    thumb: "PROTECTION",
  },
  {
    id: 9,
    text: "Every system requires operational costs, which in this case, include decentralized anonymous servers. These servers serve critical functions such as acting as data nodes, providing redundancy, managing system flow, ensuring security, and preventing congestion. To sustain these essential services, a tax of 3% per transaction has been established. This tax contributes to the continuous and smooth operation of the system, enabling it to meet its objectives effectively. AS for exchanges. The minimum order is 100k SCADS.",
    thumb: "SEIGNORAGE",
  },
  {
    id: 10,
    text: "Every transaction conducted within the system is capable of being verified on the blockchain. In addition, the SCADS algorithm provides real-time tracking of all contract transactions, which are conveniently listed in the contract list. Users have accessible and immediate viewing of this information on the main page, ensuring transparency and ease of access to all participants. This emphasis on transparency enhances trust and confidence within the system.",
    thumb: "TRANSPARENCY",
  },
  {
    id: 11,
    text: `SCADS introduces an innovative concept called Proof of Hold (POH) to ensure safety, security, and minimize investment risks. This approach involves users simply purchasing the stable coin and holding it. By doing so, they automatically mint TWINE, the linear token. To facilitate this process, the algorithm incorporates a mapping feature called 'isHolder' to monitor addresses that qualify as holders. The 'ProofOfHolding' function enables an address to include itself in this list, allowing for seamless participation in the Proof of Hold mechanism. This inventive approach provides a secure and risk-reduced investment experience for users.`,
    thumb: "Proof of Hold (POH)",
  },
]

const TabsLayout = ({ value }) => {
  const { theme } = value
  const { t } = useTranslation()

  return (
    <NewCard
      theme={theme}
      className="flex justify-center items-center py-10 rounded-[60px] mt-10 max-w-[350px] sm:max-w-none backdrop-blur-3xl"
    >
      <Tabs
        className={`flex flex-col md:flex-row items-center justify-center ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <TabList
          className="flex flex-row md:flex-col flex-wrap justify-center gap-4 ps-3 pr-3 py-4 lg:ps-0 md:pr-20 lg:py-0 w-sm:text-xs"
        >
          {tokenomics.map((thumb) => (
            <Tab
              key={thumb.id}
              className={`hover:text-[#B52761] lg:hover:translate-x-2 cursor-pointer text-start transition duration-200 font-semibold focus:outline-none `}
              selectedClassName="text-pink-700 relative before:absolute before:inline-block lg:before:w-2 before:h-2 before:bg-pink-700 before:rounded-full before:content-[''] before:-left-4 before:top-1/2 before:-translate-y-1/2"
            >
              {t(thumb.thumb)}
            </Tab>
          ))}
        </TabList>
        <AnimatePresence mode="wait">
          {tokenomics.map((item) => (
            <TabPanel
              key={item.id}
              className="flex flex-col justify-center lg:h-[540px] lg:max-w-[1000px] text-start"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6 max-w-[320px] md:max-w-none"
              >
                <h1 className="text-[30px] text-center lg:text-start font-bold">
                  {t(item.thumb)}
                </h1>
                <p>{t(item.text)}</p>
                {item.bullet_one && (
                  <li>
                  {t(item.bullet_one)}
                  </li>
                )}
                {item.bullet_two && (
                  <li>
                    {t(item.bullet_two)}
                  </li>
                )}
                {item.bullet_three && (
                  <li>
                    {t(item.bullet_three)}
                  </li>
                )}
                {item.text_two && (
                  <p>
                    {t(item.text_two)}
                  </p>
                )}
              </motion.div>
            </TabPanel>
          ))}
        </AnimatePresence>
      </Tabs>
    </NewCard>
  )
}

export default TabsLayout
