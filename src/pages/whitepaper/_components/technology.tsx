import Image from "next/image";

const data = {
  Conclusion: "Conclusion:",
  header: "2. Technology overview:",
  title_1: "SCADS",
  title_2: "TWINE token in SCADS",
  text_1_1:
    "SCADS represents a groundbreaking advancement in the realm of stablecoins, combining algorithmic stability, decentralization, and innovative economic models. Initially adopted to operate on the Binance Smart Chain (BSC) with plans for its native chain, SCADS introduces a unique Proof of Holding (POH) mechanism.",
  text_1_2:
    "SCADS operates without direct pegging to fiat currencies. Its stability is algorithmically maintained, backed by the ecosystem itself, eliminating reliance on external assets. SCADS operates without central authority or owners. The algorithm runs autonomously, following predefined rules, and user funds are securely held in individual wallets. SCADS provides a hedge against economic recessions, government defaults, and currency depreciation. The algorithm ensures that SCADS remains a stable asset class currency, not a utility service.",
  text_1_3:
    "The growth of the ecosystem depends solely on user participation, eliminating the influence of third-party owners or founders. SCADS has undergone a phased development approach with contracts including SCADS, LAVISH, PULSE, RESERVE, SEIGNORAGE, and others, each contributing to the overall functionality and stability of the ecosystem. Operational milestones, including the Proof-of-Concept release, regulatory compliance updates, and the introduction of SCADS SECURED WALLET, demonstrate a strategic and compliant development trajectory.",
  text_2:
    "TWINE is a pivotal token in the SCADS ecosystem, serving as a long-term growing asset minted from SCADS. This token plays a crucial role in the SCADS economic model, providing users with an avenue for consistent and guaranteed growth.",
  title_key: "Key Components:",
  text_title_3_1: "1. Minting Mechanism:",
  text_3_1_1:
    "TWINE is minted through the holding of SCADS, introducing a unique Proof of Holding (POH) mechanism.",
  text_3_1_2:
    "Users automatically mint TWINE by holding SCADS in their personal wallets, with no requirement for staking or involvement in liquidity pools.",
  text_title_3_2: "2. Linear Growth Structure:",
  text_3_2_1:
    "The value of TWINE increases linearly based on the number of tokens minted.",
  text_3_2_2:
    "As users hold SCADS and generate TWINE, the linear growth mechanism ensures a predictable and steady increase in the token's value.",
  text_title_3_3: "3. Passive Income Formula:",
  text_3_3_1: "TWINE represents a form of passive income for SCADS holders.",
  text_3_3_2:
    "Users can accumulate TWINE by simply holding SCADS in their wallets, eliminating the need for active engagement in staking or lending activities.",
  text_title_3_4: "4. Exclusive Access to SCADS Minting:",
  text_3_4_1:
    "TWINE holds exclusive privileges, becoming the only token capable of minting SCADS when specific market conditions are met.",
  text_3_4_2:
    "This feature adds scarcity to TWINE, making it a highly sought-after asset within the SCADS ecosystem.",
  text_title_3_5: "5. Alignment with Community Growth:",
  text_3_5_1:
    "The growth of TWINE is intricately linked to the expansion of the SCADS community.",
  text_3_5_2:
    "As the user network grows and more SCADS is minted, TWINE holders experience increased value, creating a symbiotic relationship between the token and community growth.",
  text_3_6:
    "Conclusion: TWINE, within the SCADS ecosystem, stands as a token designed for long-term growth and passive income. Its linear growth structure, coupled with exclusive privileges, positions TWINE as an asset for users looking to capitalize on the sustained success of the SCADS ecosystem.",
  title_4: "Proof of Holding (POH) in SCADS",
  title_4_header: "Introduction:",
  text_4:
    "Proof of Holding (POH) is a pivotal component of SCADS, representing a unique approach to transaction validation within a decentralized ecosystem. Unlike traditional consensus mechanisms, POH operates based on the holding behavior of individual users, introducing a novel way to ensure transaction security and network reliability.",
  text_4_1_1: "1. User-Centric Transaction Validation:",
  text_4_1_1_1:
    "POH revolves around a user-centric model where holding SCADS in personal wallets serves as the basis for transaction validation.",
  text_4_1_1_2:
    "Every user's wallet is an autonomous entity, and the number of SCADS held in each wallet directly influences the ability to execute transactions.",
  text_4_1_2: "2. Passive Income Generation:",
  text_4_1_2_1:
    "Holding SCADS not only validates transactions but also serves as a mechanism for users to generate passive income.",
  text_4_1_2_2:
    "Users are rewarded for their commitment to the ecosystem by simply holding SCADS in their wallets, eliminating the need for traditional staking or liquidity pool engagement.",
  text_4_1_3: "3. Security and Double-Spending Prevention:",
  text_4_1_3_1:
    "POH ensures the security of transactions by validating them against the proven holding balance of each wallet.",
  text_4_1_3_2:
    "This mechanism inherently prevents double-spending, as transactions are contingent on the available balance in the sender's wallet.",
  text_4_1_4: "4. Decentralized and Autonomous Operation:",
  text_4_1_4_1:
    "The decentralized nature of POH aligns with the broader philosophy of SCADS. The algorithm operates autonomously without relying on centralized entities or external validators.",
  text_4_1_4_2:
    "User wallets and their holding behaviors form the foundation of transaction validation, creating a trustless and decentralized system.",
  text_4_1_5: "5. Smart Contract Integration:",
  text_4_1_5_1:
    "POH is seamlessly integrated into the broader SCADS ecosystem through smart contracts.",
  text_4_1_5_2:
    "Smart contracts leverage the holding data of individual wallets to facilitate secure and efficient transactions across the network.",
  title_adv: "Advantages:",
  text_4_2_1: "1. Reduced Transaction Costs:",
  text_4_2_1_1:
    "POH minimizes transaction costs by eliminating the need for traditional consensus mechanisms like mining or staking.",
  text_4_2_1_2:
    "The validation process is based on individual wallet holdings, reducing the overall resource requirements.",
  text_4_2_2: "2. User Incentivization:",
  text_4_2_2_1:
    "Users are incentivized to actively participate and contribute to the stability of the ecosystem by holding SCADS, as it directly correlates with passive income generation.",
  text_4_2_3: "3. Security and Reliability:",
  text_4_2_3_1:
    "POH enhances the security and reliability of transactions by anchoring them to the actual holdings of users. This ensures that transactions are valid and based on real assets within the network.",
  title_5: "Technical Overview of PULSE in SCADS",
  title_5_header: "Introduction:",
  text_5:
    "PULSE is a pivotal component in the SCADS ecosystem, embodying a self-sustained investment protocol within the algorithm. This contract is designed to enhance liquidity, facilitate network growth, and generate profits that contribute to the continuous development of the SCADS ecosystem.",
  text_5_1_1: "1. Self-Sustained Investment Protocol:",
  text_5_1_1_1:
    "PULSE operates as an investment protocol within the SCADS ecosystem.",
  text_5_1_1_2:
    "It engages in daily investment activities, including buying and selling within the ecosystem, generating profits for both users and the system itself.",
  text_5_1_2: "2. Daily Reinvestment:",
  text_5_1_2_1:
    "PULSE continually reinvests its profits daily to grow liquidity for users and the overall SCADS system.",
  text_5_1_2_2:
    "This reinvestment strategy is crucial for ensuring sustained growth and maintaining a robust network effect.",
  text_5_1_3: "3. Contribution to Network Effect:",
  text_5_1_3_1:
    "PULSE plays a vital role in increasing the network effect within the SCADS ecosystem.",
  text_5_1_3_2:
    "By consistently reinvesting profits and contributing 100% to a sinking fund, PULSE ensures an ongoing cycle of growth and liquidity.",
  text_5_1_4: "4. Sinking Fund for Increased Investment:",
  text_5_1_4_1: "PULSE allocates 100% of its profits to a sinking fund.",
  text_5_1_4_2:
    "This sinking fund is utilized to enhance investments in the SCADS system, contributing to increased liquidity and stability.",
  text_5_1_4_3:
    "This continuous collateralization process helps maintain the stability and security of SCADS.",
  text_5_1_5:
    "Conclusion: PULSE serves as a dynamic and self-sustained investment mechanism within the SCADS ecosystem. By reinvesting profits, contributing to a sinking fund, and collateralizing SCADS, PULSE actively participates in the growth and stability of the entire SCADS network.",
  title_6: "Reserve and Collateral Crucial in SCADS:",
  text_6: "Integral Components:",
  text_6_1:
    "SCADS places utmost importance on the concept of reserve and collateral, considering them integral components of its operational framework. These elements are securely held in the treasury and users' wallets, forming the backbone of SCADS's financial robustness.",
  title_7: "Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL:",
  text_7: "Proactive Measures:",
  text_7_1:
    "Despite having reserves and collateral securely held, SCADS reinforces its commitment to transparency through specific contracts.",
  text_7_2:
    "Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL are established, providing clear verification mechanisms for the community.",
  title_8: "Mandatory Collateral for SCADS Minting",
  title_8_1: "Risk Mitigation:",
  text_8_1_1:
    "SCADS takes a stringent approach to minting, requiring collateral for every SCADS minted.",
  text_8_1_2:
    "This ensures a risk-averse model, preventing the scenario where SCADS would exist without the necessary backing.",
  title_8_2: "Collateralization Linkages:",
  text_8_2_1:
    "Logically intertwined, the SCADS ecosystem establishes a strong link between SCADS minting, collateral, and the subsequent minting of TWINE.",
  text_8_2_2:
    "This collateralized system contrasts with other stablecoins, such as USDT or USDC, providing a more tangible and secure financial foundation.",
  title_8_3: "Collateralized Assurance:",
  text_8_3:
    "SCADS, through the implementation of PROOF OF RESERVE and PROOF OF COLLATERAL contracts, reinforces its commitment to a robust and transparent financial model. By ensuring that every SCADS is minted with collateral, and subsequently linking the minting of TWINE to SCADS, SCADS establishes a genuinely collateralized system, setting it apart from other stablecoins in the digital financial landscape.",
  title_9: "Technical Description of SCADS Treasury Operations",
  title_9_1: "Introduction:",
  text_9_1:
    "The SCADS Treasury serves as a critical component, not only holding other stablecoins for user withdrawals but actively participating in the SCADS ecosystem's growth. This corrected description delves into additional operations, including the exchange of other stablecoins for SCADS and the strategic holding of TWINE within the Treasury.",
  title_9_2: "User Withdrawals in other stablecoins:",
  text_9_2:
    "The Treasury functions as a reserve, holding other stablecoins to facilitate user withdrawals. Users receive their withdrawn assets in other stablecoins, ensuring a stable and widely recognized currency for external transactions.",
  title_9_3: "Exchange of other stablecoins for SCADS:",
  text_9_3:
    "As the SCADS ecosystem matures, the Treasury actively monitors liquidity and market conditions. When deemed optimal, the Treasury exchanges its other stablecoins holdings for SCADS. This strategic move enhances the quality of assets within the Treasury.",
  title_9_4: "Quality Asset Transition:",
  text_9_4_1:
    "SCADS is considered a superior stable asset compared to other stablecoins due to its algorithmic backing and inherent stability. The transition from holding other stablecoins to SCADS positions the Treasury for sustained growth and aligns with the overall vision of the SCADS ecosystem. Holding TWINE as a Valuable Asset:",
  text_9_4_2:
    "The Treasury not only manages SCADS but also holds TWINE as an asset with a linear growth curve.",
  text_9_4_3:
    "TWINE serves as both a store of value and a mechanism for increasing demand within the ecosystem.",
  title_9_5: "Passive Income Generation:",
  text_9_5_1:
    "SCADS holders, including the Treasury, benefit from the passive income generated by TWINE.",
  text_9_5_2:
    "The linear growth curve of TWINE incentivizes long-term holding, contributing to a robust and dynamic SCADS ecosystem.",
  title_9_6: "Market Dynamics and Demand Pressure:",
  text_9_6_1:
    "By holding TWINE, the Treasury actively contributes to demand pressure in the open market.",
  text_9_6_2:
    "The predictable growth of TWINE makes it an attractive asset, aligning with the Treasury's objective of enhancing overall liquidity and demand.",
  text_10:
    "The corrected operations of the SCADS Treasury showcase a comprehensive approach to asset management. From facilitating user withdrawals in USDT to strategically transitioning to SCADS and holding TWINE as an asset, the Treasury plays a pivotal role in shaping the ecosystem's dynamics. These operations reflect a forward-looking strategy focused on quality assets, sustained growth, and user-centric value propositions.",
};

const Technology = () => {
  return (
    <main className="mx-auto mt-32 flex max-w-[340px] flex-col items-center overflow-hidden pb-20 text-neutral-300 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <h1 className="max-w-[340px] text-center text-[24px] font-bold md:max-w-[640px] lg:max-w-[800px] lg:text-3xl">
        {data.header}
      </h1>
      <h1 className="mt-4 max-w-[340px] text-center text-[18px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-2xl">
        {data.title_1}
      </h1>
      <br />
      <div className="relative h-[600px] w-2/3">
        <Image
          src="/images/whitepaper/scads.webp"
          className="rounded-[30px] px-3"
          fill
          alt="scads"
        />
      </div>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span>{data.text_1_1}</span>
        <br />
        <span>{data.text_1_2}</span>
        <br />
        <span>{data.text_1_3}</span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_2}
      </h1>
      <br />
      <div className="relative h-[600px] w-2/3">
        <Image
          src="/images/whitepaper/twine.webp"
          className="rounded-[30px] px-3"
          fill
          alt="twine"
        />
      </div>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span>{data.text_2}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_key}</span>
        <br />
        <span className="text-center text-xl font-bold">
          {data.text_title_3_1}
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_1_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_1_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">
          {data.text_title_3_2}
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_2_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_2_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">
          {data.text_title_3_3}
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_3_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_3_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">
          {data.text_title_3_4}
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_4_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_3_4_2}</span>
        </span>
        <br />
        <span className="font-bold">{data.text_3_6}</span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_4}
      </h1>
      <br />
      <div className="relative h-[600px] w-2/3">
        <Image
          src="/images/whitepaper/poh.webp"
          className="rounded-[30px] px-3"
          fill
          alt="poh"
        />
      </div>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span>
          <span className="font-bold">{data.title_4_header}</span>
          <span> {data.text_4}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_key}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_1_1}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_1_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_1_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_1_2}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_2_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_2_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_1_3}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_3_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_3_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_1_4}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_4_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_4_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_1_5}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_5_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_1_5_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_adv}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_2_1}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_2_1_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_2_1_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_2_2}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_2_2_1}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_4_2_3}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_4_2_3_1}</span>
        </span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_5}
      </h1>
      <br />
      <div className="relative h-[600px] w-2/3">
        <Image
          src="/images/whitepaper/pulse.webp"
          className="rounded-[30px] px-3"
          fill
          alt="pulse"
        />
      </div>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span>
          <span className="font-bold">{data.title_5_header}</span>
          <span> {data.text_5}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_key}</span>
        <span className="text-center text-xl font-bold">{data.text_5_1_1}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_1_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_1_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_5_1_2}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_2_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_2_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_5_1_3}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_3_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_3_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.text_5_1_4}</span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_4_1}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_4_2}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_5_1_4_3}</span>
        </span>
        <br />
        <span className="font-bold">{data.text_5_1_5}</span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_6}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span className="text-center text-xl font-bold">{data.text_6}</span>
        <span>{data.text_6_1}</span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_7}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span className="text-center text-xl font-bold">{data.text_7}</span>
        <span>{data.text_7_1}</span>
        <span>{data.text_7_2}</span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_8}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span className="text-center text-xl font-bold">{data.title_8_1}</span>
        <span>{data.text_8_1_1}</span>
        <span>{data.text_8_1_2}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_8_2}</span>
        <span>{data.text_8_2_1}</span>
        <span>{data.text_8_2_2}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_8_3}</span>
        <span>{data.text_8_3}</span>
      </p>
      <h1 className="mt-8 max-w-[340px] text-center text-[24px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-3xl">
        {data.title_9}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span className="text-center text-xl font-bold">{data.title_9_1}</span>
        <span>{data.text_9_1}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_9_2}</span>
        <span>{data.text_9_2}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_9_3}</span>
        <span>{data.text_9_3}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_9_4}</span>
        <span>{data.text_9_4_1}</span>
        <br />
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_9_4_2}</span>
        </span>
        <span>
          <span className="ml-6">&bull;</span>
          <span> {data.text_9_4_3}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_9_5}</span>
        <span>{data.text_9_5_1}</span>
        <span>{data.text_9_5_2}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_9_6}</span>
        <span>{data.text_9_6_1}</span>
        <span>{data.text_9_6_2}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.Conclusion}</span>
        <span className="font-bold">{data.text_10}</span>
      </p>
    </main>
  );
};

export default Technology;
