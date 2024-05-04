const data = {
  Conclusion: "Conclusion:",
  header: "9. Sustainability and Corporate Responsibility:",
  title: "Executive Summary:",
  text: "In an era where sustainability and corporate responsibility are increasingly crucial, SCADS (Secure Crypto Asset Decentralized System) and TWINE (Trusted Wallet Interface for Networked Exchange) are committed to integrating these values into their operational ethos. This section outlines the strategies and initiatives undertaken to ensure sustainable practices and responsible corporate behavior.",
  title_1: "Environmental Sustainability:",
  text_1_1_header: "Energy-Efficient Operations:",
  text_1_1:
    "Acknowledging the energy-intensive nature of many blockchain technologies, SCADS and TWINE are designed to minimize their environmental footprint. The Proof of Holding (POH) mechanism offers a more energy-efficient alternative to traditional proof-of-work systems.",
  text_1_2_header: "Sustainable Growth Strategies:",
  text_1_2:
    "The platforms prioritize sustainable growth, focusing on long-term viability and environmentally conscious operational practices.",
  title_2: "Social Responsibility and Community Engagement:",
  text_2_1_header: "Community Development:",
  text_2_1:
    "SCADS and TWINES foster a strong sense of community among users. They actively engage with this community, not only for feedback and support but also to drive social initiatives that benefit users and the broader society.",
  text_2_2_header: "Educational Initiatives:",
  text_2_2:
    "The projects are committed to educating the public about blockchain technology and its benefits, promoting greater digital literacy and fostering an informed user base.",
  title_3: "Ethical Business Practices:",
  text_3_1_header: "Transparency:",
  text_3_1:
    "Transparency is a cornerstone of SCADS and TWINES. Regular disclosures about operations, updates, and developments ensure that stakeholders are well-informed, and trust is maintained.",
  text_3_2_header: "Fair Practices:",
  text_3_2:
    "The platforms adhere to ethical business practices, including fair pricing models and honest marketing strategies, ensuring that they operate with integrity and fairness.",
  title_4: "Compliance and Governance:",
  text_4_1_header: "Regulatory Compliance:",
  text_4_1:
    "SCADS and TWINES are committed to full compliance with applicable laws and regulations, ensuring their operations are legally sound and ethically managed.",
  text_4_2_header: "Corporate Governance:",
  text_4_2:
    "The projects adhere to high standards of corporate governance, with clear policies and procedures in place to manage operations responsibly and effectively.",
  title_5: "Contribution to Technological Advancement:",
  text_5_header: "Innovation for Good:",
  text_5:
    "SCADS and TWINES are not just focused on commercial success but are also dedicated to leveraging their technological innovations for societal benefit, contributing to fields like digital identity, financial inclusion, and secure data management.",
  title_6: "Partnerships for Sustainable Development:",
  text_6_1_header: "Collaborations with NGOs and Social Enterprises:",
  text_6_1:
    "The platforms seek partnerships with NGOs and social enterprises to utilize blockchain technology in addressing social and environmental challenges.",
  text_6_2_header: "Supporting Sustainable Development Goals (SDGs):",
  text_6_2:
    "Through strategic initiatives and partnerships, SCADS and TWINES contribute to the United Nations’ Sustainable Development Goals, particularly in promoting economic growth, reducing inequalities, and fostering innovation.",
  text_7:
    "The commitment to sustainability and corporate responsibility is deeply embedded in the fabric of SCADS and TWINES. By embracing environmentally friendly practices, engaging responsibly with their user community, adhering to ethical business practices, and contributing to societal advancement, SCADS and TWINES demonstrate a forward-thinking approach that aligns with the broader goals of sustainable development and corporate responsibility.",
};

const Sustainability = () => {
  return (
    <main className="mx-auto flex max-w-[340px] flex-col items-center overflow-hidden pb-20 text-neutral-300 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <h1 className="max-w-[340px] text-center text-[24px] font-bold md:max-w-[640px] lg:max-w-[800px] lg:text-3xl">
        {data.header}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span className="text-center text-xl font-bold">{data.title}</span>
        <span className="text-xl font-bold">{data.text}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_1}</span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_1_1_header}</span>
          <span> {data.text_1_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_1_2_header}</span>
          <span> {data.text_1_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_2}</span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_2_1_header}</span>
          <span> {data.text_2_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_2_2_header}</span>
          <span> {data.text_2_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_3}</span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_3_1_header}</span>
          <span> {data.text_3_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_3_2_header}</span>
          <span> {data.text_3_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_4}</span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_4_1_header}</span>
          <span> {data.text_4_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_4_2_header}</span>
          <span> {data.text_4_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_5}</span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_5_header}</span>
          <span> {data.text_5}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_6}</span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_6_1_header}</span>
          <span> {data.text_6_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull; {data.text_6_2_header}</span>
          <span> {data.text_6_2}</span>
        </span>
        <br />
        <span className="text-center text-xl font-bold">{data.Conclusion}</span>
        <span className="font-bold">{data.text_7}</span>
      </p>
    </main>
  );
};

export default Sustainability;
