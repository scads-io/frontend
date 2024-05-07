import { MdOutlineDataObject } from "react-icons/md";
import {
  Clock,
  Database,
  Gauge,
  Grid,
  HeartPulse,
  Paperclip,
  TrendingUp,
} from "lucide-react";

export const tokenomicsContent = [
  {
    id: "proof-of-hold",
    title: "Proof of hold",
    paragraph:
      "SCADS introduce the new protocol (Proof of Hold) that was developed to make investments safer, secured, and eliminate risks. The mechanism behind it is fairly straightforward: users buy SCADS and hold it in their wallet. Then the (POH) triggers the minting of TWINE based on the proof that the wallet is holding SCADS. TWINE, a linear token, is minted automatically. Mapping is employed to precisely locate holder addresses, which are subsequently registered systematically on the list of network participants. Designated addresses automatically activate the POH function. This is a great opportunity for investing in much less risk than usual.",
  },
  {
    id: "scads",
    title: "Scads",
    paragraph:
      "SCADS is a stablecoin that references the USD to simplify transactions, though it is not at all pegged to it. The coin can only be created when it is hedged by collateral, achieved through trading other stablecoins for SCADS. This system operates autonomously, ensuring fairness and functioning within a permissionless, fully decentralized framework. It is designed to adapt and sustain itself automatically over time. It is important to note that SCADS guarantees the impossibility of confiscation or freezing of funds held in wallets or even better in a hardware (cold) wallet. (protect your keys)",
  },
  {
    id: "twine",
    title: "Twine",
    paragraph:
      "TWINE is a speculative token with linear characteristics, designed to support gradual price increases and provide privileged access to mint SCADS exclusively.",
    list: [
      {
        list_one:
          "Exclusivity: Once the circulating supply of TWINE reaches 5.5 million, it acquires exclusive rights to purchase SCADS. This exclusivity, which lasts for five years, potentially leads to significant price appreciation and makes TWINE an attractive investment for those seeking higher returns.",
      },
      {
        list_two:
          "Curved Linear Growth: The value of TWINE is linked to its minting volume. For each new TWINE token minted, its price rises consistently by 0.0000001. This mechanism ensures a steady upward trajectory in the token’s value, aligning with the increase in supply",
      },
    ],
  },
  {
    id: "market-cap",
    title: "Market cap",
    paragraph:
      "The market cap for TWINE is defined by a lifetime supply of 21 million tokens. When the cap of 21 million tokens is reached, the calculated linear curved price for each TWINE will be $2.10. However, it's important to note that the market demand price range for TWINE is virtually limitless and will be determined by the level of demand in the market. This means that the price of TWINE can potentially exceed the calculated $2.10 per token based on market dynamics and demand levels.",
  },
  {
    id: "minting-speed",
    title: "Minting speed",
    paragraph:
      "As a fair algorithm, the minting speed is dynamically adjusted in response to the market capitalization of SCADS and the allocated time frame to reach the 21 million market cap. This adaptive approach ensures a balanced and equitable minting process within the ecosystem.",
    list: [
      {
        list_one:
          "Minting Speed = (TWINE < 21,000,000 TWINE - TWINE ALREADY MINTED>) / (SCADS <TOTAL SCADS IN THE MARKET>  TIME <IN MINUTES, 15 YEARS IN MINUTES - TIME ELAPSED SINCE THE BEGINNING>)*",
      },
      {
        list_two: `TWINE < 21,000,000 TWINE - TWINE ALREADY MINTED>:
This part of the formula calculates the remaining amount of TWINE that can be minted. It subtracts the amount of TWINE already minted from the total cap of 21,000,000 TWINE. This gives the number of TWINE tokens left to be issued.`,
      },
      {
        list_three: `SCADS <TOTAL SCADS IN THE MARKET>:
This refers to the total number of SCADS currently in circulation within the market.`,
      },
      {
        list_four: `TIME <IN MINUTES, 15 YEARS IN MINUTES - TIME ELAPSED SINCE THE BEGINNING>:
This calculates the total time left for minting. It subtracts the time already elapsed since the beginning of the minting process from the total minting period set for 15 years, expressed in minutes.`,
      },
    ],
    paragraph_two:
      "The formula for Minting Speed essentially calculates the rate at which new TWINE tokens will be minted. This rate is determined by the number of TWINE tokens left to be minted, divided by the product of the total SCADS in circulation and the remaining time in minutes for the minting process. This provides a dynamic adjustment mechanism, where the minting speed can increase or decrease based on how many SCADS tokens are in the market and how much time is left until the end of the 15-year period.",
  },
  {
    id: "pulse",
    title: "Pulse",
    paragraph:
      "PULSE serves as the essential mechanism of the algorithm, functioning automatically on a daily basis. It engages in a cyclical process within the algorithm that involves purchasing SCADS, minting TWINE, and then selling the generated TWINE back into SCADS. This routine is designed to generate profits, which are then distributed strategically. Specifically, 80% of these profits are continuously reinvested back into PULSE, functioning like a sinking fund to boost investment capacity. The remaining 20% is directed to the LIQUIDITY wallet, which is maintained in SCADS and enhances the system's collateral stability. Additionally, this wallet will eventually serve as a liquidity provider and a financial backer for lending operations. The daily activities of buying SCADS, minting TWINE, and selling them are crucial in fostering a network effect that not only maintains active system engagement but also promotes its self-sustainability. This continuous flow of transactions showcases the innovation at the heart of the algorithm, placing it at the cutting edge of advancements in operational efficiency.",
  },
  {
    id: "liquidity-wallet",
    title: "Liquidity wallet",
    paragraph:
      "The wallet functions as a repository for surplus liquidity within the algorithm. This excess liquidity is strategically invested as a liquidity provider and market maker within the cryptocurrency industry. All assets within the wallet are denominated in SCADS and TWINE and are allocated exclusively as investments in SCADS. The algorithm oversees and manages the wallet, ensuring that liquidity is supplied based on predefined criteria, contributing to the stability and functionality of the SCADS ecosystem.",
  },
  {
    id: "treasury",
    title: "Treasury",
    paragraph:
      "Fundamental Elements: SCADS prioritizes the principles of reserve and collateral, treating them as fundamental to its operational integrity. Enforcing Transparency with Contracts: SCADS enhances transparency with specific contracts like the Proof of Reserve and Proof of Collateral, providing clear, verifiable mechanisms for for all to see.",
    list: [
      {
        list_one:
          "Mandatory Collateral for Minting SCADS: SCADS adopts strict minting rules, requiring sufficient collateral for every token minted to mitigate risks and ensure each SCADS token is backed by tangible assets, preventing the issuance of unsupported tokens.",
      },
      {
        list_two:
          "Interconnected Collateral System: The SCADS ecosystem creates a seamless link between the minting of SCADS, the collateral backing it, and the subsequent minting of TWINE, offering a stronger and more reliable financial structure compared to other stablecoins like USDT or USDC.",
      },
      {
        list_three:
          "Assurance through Collateralization: By implementing the Proof of Reserve and Proof of Collateral contracts, SCADS commits to a transparent and robust financial model, ensuring every SCADS token is minted with proper collateral, and the minting of TWINE is directly linked to the collateralized SCADS, establishing a truly secure system that distinguishes SCADS from other stablecoins in the digital finance arena.",
      },
    ],
  },
  {
    id: "decentralization",
    title: "Decentralization",
    paragraph:
      "The algorithm operates in a permissionless, completely decentralized, and independent manner. There are no admin keys or owners, the system functions autonomously through interactions between contracts, without any human intervention. Upon launch, the Algorithm will have admin keys enabled for 3 month, allowing for potential fixes if necessary. However, during this access period, admins will have no access to contracts. Following this initial period, public admin keys will be burned, making them visible to all users. After the burning, developers will only have access to the front end for UI/UX improvements, ensuring that the core functionality remains decentralized and secure. The algorithm is immutable; it cannot be modified, updated, or changed. Any new venture or addition would need to be implemented as an added Layer 2. This emphasizes the unalterable nature of the algorithm's core functionality.",
  },
  {
    id: "protection",
    title: "Protection",
    paragraph:
      "With a primary focus on the security and well-being of all users, SCADS, functioning as a stable coin, is inherently resistant to price manipulation. Additionally, the SCADS ecosystem has implemented a limited set of rules designed to ensure the safety of both the system and its participants:",
    list: [
      {
        list_one: "A 25% penalty for withdrawals made within a 24-hour period.",
      },
      {
        list_two: "A cap of 50,000 SCADS on withdrawals per day.",
      },
      {
        list_three:
          "Should a user require immediate access to their full capital, SCADS, being a stable asset, can be employed as a high-quality collateral for obtaining loans or bridge funding from various platforms.",
      },
    ],
    paragraph_two:
      "These rules act as safeguards, fortifying the algorithm against sudden fund withdrawals or potential manipulation. They are structured to maintain the stability and integrity of the system for all participants.",
  },
  {
    id: "seignorage",
    title: "Seignorage",
    paragraph:
      "Is the difference between the value of money and the cost to produce and distribute it. Seniorage covers vital operational expenses, supporting decentralized anonymous servers. They perform crucial roles like data nodes, security management, and congestion prevention.",
  },
  {
    id: "transparency",
    title: "Transparency",
    paragraph:
      "Every transaction conducted within the system is capable of being verified on the blockchain. In addition, the SCADS algorithm provides real-time tracking of all contract transactions, which are conveniently listed in the contract list. Users have accessible and immediate viewing of this information on the main page, ensuring transparency and ease of access to all participants. This emphasis on transparency enhances trust and confidence within the system.",
  },
];

export const tokenomicsLinks = [
  {
    name: "Proof of hold",
    path: "/tokenomics/#proof-of-hold",
  },
  {
    name: "Scads",
    path: "/tokenomics/#scads",
  },
  {
    name: "Twine",
    path: "/tokenomics/#twine",
  },
  {
    name: "Market cap",
    path: "/tokenomics/#market-cap",
  },
  {
    name: "Minting speed",
    path: "/tokenomics/#minting-speed",
  },
  {
    name: "Pulse",
    path: "/tokenomics/#pulse",
  },
  {
    name: "Liquidity wallet",
    path: "/tokenomics/#liquidity-wallet",
  },
  {
    name: "Treasury",
    path: "/tokenomics/#treasury",
  },
  {
    name: "Decentralization",
    path: "/tokenomics/#decentralization",
  },
  {
    name: "Protection",
    path: "/tokenomics/#protection",
  },
  {
    name: "Seignorage",
    path: "/tokenomics/#seignorage",
  },
  {
    name: "Transparency",
    path: "/tokenomics/#transparency",
  },
];

export const statItems = [
  {
    id: "s1",
    name: "Adaptive minting speed",
    placeholder: "0.0000006",
    info: "Automatically adjusts based on",
    icon: <Gauge strokeWidth={1.5} />,
  },
  {
    id: "s2",
    name: "Funds in Pulse",
    placeholder: "8079.49",
    icon: <HeartPulse strokeWidth={1.5} />,
  },
  {
    id: "s3",
    name: "Next Pulse",
    placeholder: "05:26:15",
    icon: <Clock strokeWidth={1.5} />,
  },
  {
    id: "s4",
    name: "Minted TWINE",
    placeholder: "1650851.99",
    icon: <Database strokeWidth={1.5} />,
  },
  {
    id: "s5",
    name: "TWINE price increase",
    placeholder: "0.17",
    icon: <TrendingUp strokeWidth={1.5} />,
  },
  {
    id: "s6",
    name: "SCADS Held",
    placeholder: "26513.82",
    info: "Total SCADS held in all wallets.",
    icon: <MdOutlineDataObject />,
  },
];

export const treasuryItems = [
  {
    id: "ti1",
    name: "Total balance",
    amount: "$34781.63",
    info: "Total balance of funds in treasury.",
  },
  {
    id: "ti2",
    name: "SCADS balance",
    amount: "536",
    info: "Total SCADS held in treasury. These SCADS were minted by user’s, then sold back to the algorithm, they remain in the treasury ready to be re-minted by user’s.",
  },
  {
    id: "ti3",
    name: "TWINE balance",
    amount: "145017",
    info: "Total TWINE that is held in treasury as investment.",
  },
  {
    id: "ti4",
    name: "USDT balance",
    amount: "$10304",
    info: "Total USDT balance in treasury.",
  },
  {
    id: "ti5",
    name: "USDC balance",
    amount: "$0",
    info: "Total USDC balance held in treasury.",
  },
];

export const addresses = [
  {
    address: "Scads: ",
    value: "0x6D036B813C63c2c2D84De16369F2b532a37A5E97",
  },
  {
    address: "Twine: ",
    value: "0xa86C718a38515699773a1FEB9c3A891A2BE982A1",
  },
  {
    address: "USDT: ",
    value: "0x55d398326f99059ff775485246999027b3197955",
  },
  {
    address: "USDC: ",
    value: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  },
];

export const roadmapContent = [
  {
    id: "r1",
    date: "April 2019",
    l1: "Idea creation & research.",
  },
  {
    id: "r2",
    date: "July 2020",
    l1: "Research completed.",
  },
  {
    id: "r3",
    date: "September 2020",
    l1: "Development starts.",
  },
  {
    id: "r4",
    date: "March 2021",
    l1: "base algorithm completed.",
  },
  {
    id: "r5",
    date: "May 2021",
    l1: "Proof of hold protocol completed.",
  },
  {
    id: "r6",
    date: "June 2021 ",
    l1: "Scads contract creation.",
  },
  {
    id: "r7",
    date: "June 2021",
    l1: "Twine contract creation.",
  },
  {
    id: "r8",
    date: "January 2022",
    l1: "Pulse contract implemented.",
  },
  {
    id: "r9",
    date: "January 2022",
    l1: "PULSE contract creation.",
  },
  {
    id: "r10",
    date: "May 2022 ",
    l1: "Seignorage contract completion.",
  },
  {
    id: "r11",
    date: "June 2022",
    l1: "Treasury contract completion.",
  },
  {
    id: "r12",
    date: "July 2022",
    l1: "Updates  for all contracts based on regulations changes.",
  },
  {
    id: "r13",
    date: "September 2022",
    l1: "Protection contract completion.",
  },
  {
    id: "r14",
    date: "December 2022",
    l1: " Adaptive minting speed contract completion.",
  },
  {
    id: "r15",
    date: "March 2023",
    l1: "Revised updates for all contracts based on regulation changes.",
  },
  {
    id: "r16",
    date: "April 2023",
    l1: "Proof of Concept release on test-net.",
  },
  {
    id: "r17",
    date: "September 2023",
    l1: "Revision and final updates.",
  },
  {
    id: "r18",
    date: "October 2023",
    l1: "First release on mainnet.",
  },
  {
    id: "r19",
    date: "August 2024",
    l1: "The media campaign has commenced. Engaging with social media audiences",
  },
  {
    id: "r20",
    date: "November 2024",
    l1: "Media campaign started, Crypto social media.",
    l2: "Seeding social media.",
  },
  {
    id: "r21",
    date: "February 2025",
    l1: "Media campaign mainstream media. ",
    l2: "Scads secured wallet.",
    l3: "LENDING based on user’s own collateral in SCADS for. (Lending does not incur interest only transactions fees.)",
  },
  {
    id: "r22",
    date: "March 2025",
    l1: "Payment system, users will be able to pay locally with scads pegged to value in local currency. (The pegging occurs only at the time of transaction.)",
  },
];

export const wallets = [
  {
    name: "Metamask",
    icon: "/images/metamask.svg",
  },
  {
    name: "Trust wallet",
    icon: "/images/trust.svg",
  },
  {
    name: "Binance chain",
    icon: "/images/binance.svg",
  },
  {
    name: "WalletConnect",
    icon: "/images/wallet-connect.svg",
  },
];

export const cardItems = [
  {
    title: "SCADS",
    description:
      "Decentralized, stable digital currency for secure global transactions, not pegged based on (POH).",
    path: "/tokenomics/#scads",
  },
  {
    title: "TWINE",
    description:
      "Linearly growing digital asset minted by holding SCADS long-term, secured and trusted investment.",
    path: "/tokenomics/#twine",
  },
  {
    title: "SEIGNORAGE",
    description:
      "Is the difference between the value of money and the cost to produce and distribute it.",
    path: "/tokenomics/#seignorage",
  },
  {
    title: "PULSE",
    description:
      "Self-sustained investment protocol & network effect within SCADS ecosystem.",
    path: "/tokenomics/#pulse",
  },
  {
    id: "ci5",
    title: "TREASURY",
    description: "Financial backbone of SCADS, managing assets and liquidity.",
    path: "/tokenomics/#treasury",
  },
  {
    title: "LIQUIDITY WALLET",
    description:
      "Is a depository to supply liquidity to the market as makers and liquidity providers.",
    path: "/tokenomics/#liquidity-wallet",
  },
];

export const documents = [
  {
    name: "Use Cases",
    path: "/use-cases",
    description: "The use cases for the SCADS ecosystem.",
    icon: <Grid size={16} />,
  },
  {
    name: "Whitepaper",
    path: "/whitepaper",
    description: "All the detailed information.",
    icon: <Paperclip size={16} />,
  },
];

export const tutorialDesktop = {
  metamask: [
    {
      label: "Step 1: Install MetaMask Extension",
      list: {
        li1: "1. Open your preferred web browser (e.g., Chrome, Firefox).",
        li2: "2. Go to the extension store (Chrome Web Store for Chrome, Add-ons for Firefox).",
        li3: '3. Search for "MetaMask" and click on the official MetaMask extension.',
        li4: '4. Click on "Add to Chrome" (or equivalent for your browser) and follow the prompts to install the extension.',
        li5: "5. Once installed, you'll see the MetaMask fox icon in your browser's toolbar.",
        li6: null,
      },
    },
    {
      label: "Step 2: Set Up MetaMask",
      list: {
        li1: "1. Click on the MetaMask fox icon in your browser's toolbar.",
        li2: '2. Click on "Get Started" to begin the setup process.',
        li3: "3. Follow the prompts to create a new wallet or import an existing one. Be sure to write down your seed phrase and store it in a safe place.",
        li4: "4. Create a password for your MetaMask wallet and confirm it.",
        li5: "5. Once your wallet is set up, you'll be prompted to agree to the terms of use and privacy policy.",
        li6: null,
      },
    },
    {
      label: "Step 3: Connect MetaMask to the Scads Website",
      list: {
        li1: "1. Navigate to the scads.io website.",
        li2: '2. Look for the "Connect Wallet" button in the header (navigation menu) of the website.',
        li3: '3. Click on the "Connect Wallet" button. This will prompt MetaMask to open and ask for your permission to connect.',
        li4: '4. In the MetaMask popup, review the permissions requested by the website and click "Connect" if you agree.',
        li5: null,
        li6: null,
      },
    },
    {
      label:
        "Step 4: Add BNB to your wallet balance to cover gas fees on the network.",
      list: {
        li1: "1. Acquire BNB (Binance Coin) tokens from a cryptocurrency exchange.",
        li2: "2. Transfer the acquired BNB tokens to your Binance Chain Wallet address.",
        li3: "3. Ensure that your wallet has a sufficient balance of BNB to cover gas fees on the Binance Smart Chain network.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 5: Add Token Addresses to MetaMask",
      list: {
        li1: "1. Once your MetaMask wallet is connected to the website, click on the flame icon in the header (navigation menu) where you can copy token addresses.",
        li2: '2. Look for an option to "Add Token" or "Custom Token" within MetaMask.',
        li3: '3. Click on the "Add Token" or "Custom Token" button.',
        li4: "4. Enter the token contract address for the token you want to add.",
        li5: "5. MetaMask should automatically populate the token symbol and decimal places. Verify that this information is correct.",
        li6: '6. Click "Next" or "Add Token" to finalize adding the token to your MetaMask wallet.',
      },
    },
    {
      label: "Step 6: Verify Token Addition",
      list: {
        li1: "1. After adding the token address, you should see the token listed in your MetaMask wallet along with your other assets.",
        li2: "2. Double-check that the token symbol and balance are displayed correctly.",
        li3: "3. You may need to manually switch to view the added token if it's not already selected.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 7: Minting Scads",
      list: {
        li1: '1. Open the invest modal by clicking on the "Invest" button either in the header (navigation menu) or hero section (at the top of the main page).',
        li2: "2. Choose the stable coin available in your wallet (USDT or USDC), enter the amount, and enable it for the first time. Once enabled, you can start minting SCADS.",
        li3: "3. Once you've minted SCADS, you'll see the total amount in your wallet.",
        li4: "Depending on the holding period, your wallet will automatically mint TWINE. The balance is displayed on the site when you log in and in your wallet on your tablet or phone.",
        li5: "Claim your minted TWINE. You can hold or buy more SCADS to mint more.",
        li6: "Optionally, you can enable auto-compound, where the system claims your TWINE daily and converts it to SCADS for you.",
      },
    },
  ],
  binance: [
    {
      label: "Step 1: Install Binance Chain Wallet Extension",
      list: {
        li1: "1. Open your preferred web browser (e.g., Chrome, Firefox).",
        li2: "2. Go to the extension store (Chrome Web Store for Chrome, Add-ons for Firefox).",
        li3: `3. Search for "Binance Chain Wallet" and click on the official extension.`,
        li4: `4. Click on "Add to Chrome" (or equivalent for your browser) and follow the prompts to install the extension.`,
        li5: "5. Once installed, you'll see the Binance Chain Wallet icon in your browser's toolbar.",
        li6: null,
      },
    },
    {
      label: "Step 2: Set Up Binance Chain Wallet",
      list: {
        li1: "1. Click on the Binance Chain Wallet icon in your browser's toolbar.",
        li2: `2. Follow the prompts to create a new wallet or import an existing one. Be sure to save your mnemonic phrase securely.`,
        li3: `3. Set a password for your Binance Chain Wallet and confirm it.`,
        li4: `4. Agree to the terms and conditions.`,
        li5: "5. Once your wallet is set up, you'll be redirected to the Binance Chain Wallet dashboard.",
        li6: null,
      },
    },
    {
      label: "Step 3: Connect Binance Chain Wallet to the Scads Website",
      list: {
        li1: "1. Navigate to the website you want to connect your Binance Chain Wallet to.",
        li2: `2. Look for the "Connect Wallet" button or similar functionality within the website's interface.`,
        li3: `3. Click on the "Connect Wallet" button. This will prompt Binance Chain Wallet to open and ask for your permission to connect.`,
        li4: `4. In the Binance Chain Wallet popup, review the permissions requested by the website and click "Connect" if you agree.`,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 4: Add BNB to Your Wallet Balance",
      list: {
        li1: "1. Acquire BNB (Binance Coin) tokens from a cryptocurrency exchange.",
        li2: "2. Transfer the acquired BNB tokens to your Binance Chain Wallet address.",
        li3: "3. Ensure that your wallet has a sufficient balance of BNB to cover gas fees on the Binance Smart Chain network.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 5: Add Token Addresses to Binance Chain Wallet",
      list: {
        li1: "1. Once your Binance Chain Wallet is connected to the website, click on the flame icon in the header (navigation menu) where you can copy token addresses.",
        li2: `2. Look for an option to "Add Token" or "Custom Token" within the Binance Chain Wallet interface.`,
        li3: `3. Click on the "Add Token" or "Custom Token" button.`,
        li4: `4. Enter the token contract address for the token you want to add.`,
        li5: "5. Binance Chain Wallet should automatically populate the token symbol and decimal places. Verify that this information is correct.",
        li6: `6. Click "Next" or "Add Token" to finalize adding the token to your Binance Chain Wallet.`,
      },
    },
    {
      label: "Step 6: Verify Token Addition",
      list: {
        li1: "1. After adding the token address, you should see the token listed in your Binance Chain Wallet along with your other assets.",
        li2: "2. Double-check that the token symbol and balance are displayed correctly.",
        li3: `3. You may need to manually switch to view the added token if it's not already selected.`,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 7: Minting Scads",
      list: {
        li1: `1. Open the invest modal by clicking on the "Invest" button either in the header (navigation menu) or hero section (at the top of the main page).`,
        li2: "2. Choose the stable coin available in your wallet (USDT or USDC), enter the amount, and enable it for the first time. Once enabled, you can start minting SCADS.",
        li3: `3. Once you've minted SCADS, you'll see the total amount in your wallet.`,
        li4: "Depending on the holding period, your wallet will automatically mint TWINE. The balance is displayed on the site when you log in and in your wallet on your tablet or phone.",
        li5: "Claim your minted TWINE. You can hold or buy more SCADS to mint more.",
        li6: "Optionally, you can enable auto-compound, where the system claims your TWINE daily and converts it to SCADS for you.",
      },
    },
  ],
};

export const tutorialMobile = {
  metamask: [
    {
      label: "Step 1: Download MetaMask Mobile App",
      list: {
        li1: "1. Open your app store (Google Play Store for Android, App Store for iOS).",
        li2: '2. Search for "MetaMask" and download the official MetaMask Mobile app.',
        li3: "3. Once downloaded, open the MetaMask app.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 2: Create or Import Wallet",
      list: {
        li1: '1. If you\'re new to MetaMask, select "Create a Wallet" and follow the prompts to set up a new wallet. Be sure to store your seed phrase in a safe place.',
        li2: '2. If you already have a MetaMask wallet, select "Import Wallet" and enter your seed phrase to import your existing wallet.',
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 3: Access Built-in Browser",
      list: {
        li1: '1. In the MetaMask app, navigate to the "Browser" tab located at the bottom of the screen.',
        li2: "2. This built-in browser allows you to visit decentralized websites and interact with decentralized applications (dApps) directly from MetaMask.",
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label:
        "Step 4: Add BNB to your wallet balance to cover gas fees on the network.",
      list: {
        li1: "1. Acquire BNB (Binance Coin) tokens from a cryptocurrency exchange.",
        li2: "2. Transfer the acquired BNB tokens to your Binance Chain Wallet address.",
        li3: "3. Ensure that your wallet has a sufficient balance of BNB to cover gas fees on the Binance Smart Chain network.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 5: Visit the Website",
      list: {
        li1: "Enter the URL of the website (scads.io) in the address bar of the MetaMask browser.",
        li2: null,
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 6: Connect MetaMask Wallet",
      list: {
        li1: "1. When you land on the website, open the navigation menu (tap on the two lines at the top right).",
        li2: '2. Click on the "Connect Wallet" button. A popup with different wallets will appear, tap on MetaMask.',
        li3: "3. MetaMask will prompt you to authorize the connection. Confirm the connection within the MetaMask app.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 7: Secure Your Wallet",
      list: {
        li1: "1. Ensure that you're using a secure connection when interacting with decentralized websites.",
        li2: "2. Enable security features like biometric authentication and PIN protection within the MetaMask app.",
        li3: "3. Keep your seed phrase secure and never share it with anyone.",
        li4: "4. Be cautious of phishing attempts and only interact with trusted websites and applications.",
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 8: Minting Scads",
      list: {
        li1: '1. Open the invest modal by clicking on the "Invest" button either in the navigation menu (tap on the three lines at the top right) or hero section (at the top of the main page).',
        li2: "2. Choose the stable coin available in your wallet (USDT or USDC), enter the amount, and enable it for the first time. Once enabled, you can start minting SCADS.",
        li3: `3. Once you've minted SCADS, you'll see the total amount in your wallet.`,
        li4: "Depending on the holding period, your wallet will automatically mint TWINE. The balance is displayed on the site when you log in and in your wallet on your tablet or phone.",
        li5: "Claim your minted TWINE. You can hold or buy more SCADS to mint more.",
        li6: "Optionally, you can enable auto-compound, where the system claims your TWINE daily and converts it to SCADS for you.",
      },
    },
  ],
  trust: [
    {
      label: "Step 1: Download Trust Wallet App",
      list: {
        li1: "1. Open your app store (Google Play Store for Android, App Store for iOS).",
        li2: "2. Search for 'Trust Wallet' and download the official Trust Wallet app.",
        li3: "3. Once downloaded, open the Trust Wallet app.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 2: Create or Import Wallet",
      list: {
        li1: "1. If you're new to Trust Wallet, select 'Create a New Wallet' and follow the prompts to set up a new wallet. Be sure to store your recovery phrase in a safe place.",
        li2: "2. If you already have a Trust Wallet, select 'Import Wallet' and enter your recovery phrase to import your existing wallet.",
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 3: Add BNB to Cover Gas Fees",
      list: {
        li1: "1. Acquire BNB (Binance Coin) tokens from a cryptocurrency exchange.",
        li2: "2. Transfer the acquired BNB tokens to your Trust Wallet address.",
        li3: "3. Ensure that your wallet has a sufficient balance of BNB to cover gas fees on the Binance Smart Chain network.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 4: Connect Trust wallet to the Scads Website",
      list: {
        li1: "1. Navigate to the website (scads.io) using the built in browser in Trust wallet.",
        li2: `2. Look for the "Connect Wallet" button in the header (navigation menu) of the website.`,
        li3: `3. Click on the "Connect Wallet" button. Pick Trust from the popup that appears on your screen. This will prompt Trust wallet to open and ask for your permission to connect.`,
        li4: `4. In the MetaMask popup, review the permissions requested by the website and click "Connect" if you agree.`,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 5: Add Token Addresses to Trust Wallet",
      list: {
        li1: "1. Once your Trust Wallet is connected to the website, tap on the flame icon in the header (navigation menu) to access your wallet's address.",
        li2: "2. Copy the token address you want to add.",
        li3: "3. Return to your Trust Wallet app.",
        li4: "4. Tap on the 'Tokens' section within the wallet.",
        li5: "5. Look for an option to 'Add Custom Token' or 'Add Token'.",
        li6: "6. Paste the token address you copied in step 2.",
      },
    },
    {
      label: "Step 6: Secure Your Wallet",
      list: {
        li1: "1. Enable security features like biometric authentication (e.g., fingerprint, Face ID) and PIN protection within the Trust Wallet app settings.",
        li2: "2. Keep your recovery phrase secure and never share it with anyone. This phrase is the only way to recover your wallet if you lose access.",
        li3: "3. Be cautious of phishing attempts and only interact with trusted dApps and DeFi projects.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 7: Minting Scads",
      list: {
        li1: `1. Open the invest modal by clicking on the "Invest" button either in the header (navigation menu) or hero section (at the top of the main page).`,
        li2: "2. Choose the stable coin available in your wallet (USDT or USDC), enter the amount, and enable it for the first time. Once enabled, you can start minting SCADS.",
        li3: `3. Once you've minted SCADS, you'll see the total amount in your wallet.`,
        li4: "Depending on the holding period, your wallet will automatically mint TWINE. The balance is displayed on the site when you log in and in your wallet on your tablet or phone.",
        li5: "Claim your minted TWINE. You can hold or buy more SCADS to mint more.",
        li6: "Optionally, you can enable auto-compound, where the system claims your TWINE daily and converts it to SCADS for you.",
      },
    },
  ],
  binance: [
    {
      label: "Step 1: Download Binance Chain Wallet Mobile App",
      list: {
        li1: "1. Open your app store (Google Play Store for Android, App Store for iOS).",
        li2: "2. Search for 'Binance Chain Wallet' and download the official Binance Chain Wallet Mobile app.",
        li3: "3. Once downloaded, open the Binance Chain Wallet app.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 2: Create or Import Wallet",
      list: {
        li1: "1. If you're new to Binance Chain Wallet, select 'Create Wallet' and follow the prompts to set up a new wallet. Be sure to store your seed phrase in a safe place.",
        li2: "2. If you already have a Binance Chain Wallet, select 'Import Wallet' and enter your seed phrase to import your existing wallet.",
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 3: Access Built-in Browser",
      list: {
        li1: "1. In the Binance Chain Wallet app, navigate to the 'Browser' tab located at the bottom of the screen.",
        li2: "2. This built-in browser allows you to visit decentralized websites and interact with decentralized applications (dApps) directly from Binance Chain Wallet.",
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 4: Add BNB to Your Wallet",
      list: {
        li1: "1. Acquire BNB (Binance Coin) tokens from a cryptocurrency exchange.",
        li2: "2. Transfer the acquired BNB tokens to your Binance Chain Wallet address.",
        li3: "3. Ensure that your wallet has a sufficient balance of BNB to cover gas fees on the Binance Smart Chain network.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 5: Visit the Website",
      list: {
        li1: "Enter the URL of the website (scads.io) in the address bar of the Binance Chain Wallet browser.",
        li2: null,
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 6: Connect Binance Chain Wallet",
      list: {
        li1: `1. When you land on the website, open the navigation menu (tap on the three lines at the top right).`,
        li2: "2. Click on the 'Connect Wallet' button. A popup with different wallets will appear, tap on Binance Chain Wallet.",
        li3: "3. Binance Chain Wallet will prompt you to authorize the connection. Confirm the connection within the Binance Chain Wallet app.",
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 7: Secure Your Wallet",
      list: {
        li1: "1. Ensure that you're using a secure connection when interacting with decentralized websites.",
        li2: "2. Enable security features like biometric authentication and PIN protection within the Binance Chain Wallet app.",
        li3: "3. Keep your seed phrase secure and never share it with anyone.",
        li4: "4. Be cautious of phishing attempts and only interact with trusted websites and applications.",
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 8: Minting Scads",
      list: {
        li1: `1. Open the invest modal by clicking on the "Invest" button either in the navigation menu (tap on the three lines at the top right) or hero section (at the top of the main page).`,
        li2: "2. Choose the stable coin available in your wallet (USDT or USDC), enter the amount, and enable it for the first time. Once enabled, you can start minting SCADS.",
        li3: `3. Once you've minted SCADS, you'll see the total amount in your wallet.`,
        li4: "Depending on the holding period, your wallet will automatically mint TWINE. The balance is displayed on the site when you log in and in your wallet on your tablet or phone.",
        li5: "Claim your minted TWINE. You can hold or buy more SCADS to mint more.",
        li6: "Optionally, you can enable auto-compound, where the system claims your TWINE daily and converts it to SCADS for you.",
      },
    },
  ],
};

export const accordionItems = [
  {
    trigger: "Is SCADS a security, commodity or money?",
    content:
      "SCADS is a form of currency backed by collateralized value, making it suitable for settlements and various types of payments.",
    value: "item-1",
  },
  {
    trigger: "How does SCADS protect capital investment?",
    content:
      "SCADS safeguards capital investments through its unique structure and features:",
    list: [
      {
        list_one:
          "Proof of Hold (POH): SCADS utilizes the POH algorithm, which confirms the reserve capital on-chain. This ensures transparency and security, protecting investors' capital.",
      },
      {
        list_two:
          "Autonomous Operation: SCADS operates autonomously without human interference or ownership, reducing the risk of manipulation and fraud.",
      },
      {
        list_three:
          "Reserve-backed Stability: The minting of TWINE, triggered by POH, ensures exponential growth of capital. TWINE's scarcity and use case create demand pressure, protecting capital against inflation and failures.",
      },
      {
        list_four:
          "Financial Credibility: POH enhances SCADS' financial credibility, making it a secure investment option even for funding reserves.",
      },
    ],
    value: "item-2",
  },
  {
    trigger:
      "How does SCADS ensure its structure doesn't resemble schemes that could potentially harm investors?",
    content:
      "SCADS protects its users by eliminating risks rather than managing them.",
    list: [
      {
        list_one:
          "A - Risk of Ponzi schemes and pyramid plays is removed by setting the algorithm to operate autonomously without owners or human interference.",
      },
      {
        list_two: "B - Governance, voting, and validation are eliminated:",
      },
      {
        list_three:
          "Governance is eliminated to prevent large holders from monopolizing decision-making.",
      },
      {
        list_four:
          "Voting is unnecessary as the algorithm runs autonomously without changes in policies.",
      },
      {
        list_five:
          "Validation by nodes is unnecessary; each wallet pre-validates all transactions based on POH.",
      },
    ],
    value: "item-3",
  },
  {
    trigger: "Why SCADS cannot be weaponized or politicized?",
    content:
      "SCADS is neutral, fully decentralized, and independent. It cannot interfere with users' wallets or their financial activities. SCADS confirms that all users have sovereignty over their wallets. Since SCADS is not tied to any political currency, no government can impose its rules on it. SCADS simply belongs to its users. POH completely decentralizes the algorithm.",
    value: "item-4",
  },
  {
    trigger: "How does (POH) solve inflation and prevent bankruptcy?",
    content:
      "POH (Proof of Hold) verifies the reserve capital on the chain, triggering the minting of TWINE. This process exponentially grows the capital since TWINE is scarce and has a guaranteed use case, ensuring demand pressure. Thus, capital and value are protected against inflation and failures. Moreover, POH provides the highest financial credibility, even enabling funding for the reserve, ensuring capital safety and guaranteed growth.",
    value: "item-5",
  },
  {
    trigger:
      "How can institutions and governments fund themselves with (POH) without increasing debt or taxes?",
    content:
      "The formula is simple: POH allows idle capital to generate profit securely by triggering the minting of a secondary token. This boosts reserves, reducing the need for tax hikes to fund them. Institutions can profit more without hefty taxes, and retail users can grow their wealth risk-free. While this doesn't eliminate taxation entirely, it can reduce it by at least 50%, fostering a healthier economy, political stability, and societal well-being.",
    value: "item-6",
  },
  {
    trigger: "Is TWINE a reward token?",
    content:
      "TWINE is an added value token, minted only when user’s exercise the holding of scads. since it minted like scads it have a logarithmic growth based on the number of TWINE minted.",
    value: "item-7",
  },
];
