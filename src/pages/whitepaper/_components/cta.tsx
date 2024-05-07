const data = {
  Conclusion: "Conclusion:",
  header: "12. Call to Action for Investors, Partners, and Customers",
  title: "Engage with a Future-Driven Blockchain Revolution",
  title_1: "For Investors:",
  text_1_1:
    "Join the Innovation: We invite you to become a part of a groundbreaking journey with SCADS and TWINE. Your investment will not just be in a technology but in a vision that redefines digital asset management and transactional stability.",
  text_1_2:
    "Strategic Growth Potential: With a unique position in the blockchain market, SCADS and TWINE offer a compelling opportunity for growth, innovation, and profitability.",
  text_1_3:
    "Sustainable and Ethical Investing: Align your investment portfolio with a project committed to sustainable practices and responsible corporate governance.",
  text_1_4:
    "Investor Inquiries: Please contact our investor relations team at TG @scadswp for detailed investment opportunities and prospectus.",
  title_2: "For Business Partners:",
  text_2_1:
    "Collaborate with Pioneers: We are looking for strategic partnerships to expand the reach and capabilities of SCADS and TWINE. Join us in shaping the future of blockchain technology and digital asset management.",
  text_2_2:
    "Expand Your Offerings: Integrate SCADS and TWINE into your business model and offer your clients a stable, secure, and innovative blockchain solution.",
  text_2_3:
    "Grow Together: Let’s leverage mutual strengths to create synergies that benefit both our platforms and your business.",
  text_2_4:
    "Partnership Opportunities: For partnership discussions, please reach out our team @ TG @scadswp",
  title_3: "For Customers:",
  text_3_1:
    "Experience Stability and Growth: Join the SCADS and TWINE platforms to experience unparalleled stability in digital transactions and predictable growth in digital assets.",
  text_3_2:
    "Be Part of a Secure Ecosystem: Your security is our priority. Engage in a blockchain ecosystem that values your data protection and transactional integrity.",
  text_3_3:
    "Community and Support: Become part of a growing community with access to comprehensive support, educational resources, and a platform that listens to and grows with its users.",
  text_3_4:
    "Get Started: To become a SCADS and TWINE user, visit scads.io and join our community today.",
  text_4:
    "The future of blockchain technology is here with SCADS and TWINE. Whether you’re an investor seeking profitable and sustainable opportunities, a business looking to pioneer in your sector, or a customer desiring stability and growth in your digital transactions, SCADS and TWINE offer a platform that caters to your needs. Join us in this exciting journey towards redefining the blockchain landscape.",
};

const CalltoAction = () => {
  return (
    <main className="mx-auto flex max-w-[340px] flex-col items-center overflow-hidden pb-20 text-[#B4BCD0] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <h1 className="max-w-[340px] text-center text-[24px] font-bold md:max-w-[640px] lg:max-w-[800px] lg:text-3xl">
        {data.header}
      </h1>
      <h1 className="mt-4 max-w-[340px] text-center text-[18px] font-bold leading-normal md:max-w-[640px] md:leading-tight lg:max-w-[800px] lg:text-2xl">
        {data.title}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span className="text-center text-xl font-bold">{data.title_1}</span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_1_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_1_2}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_1_3}</span>
        </span>
        <span className="mt-4 font-bold">{data.text_1_4}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_2}</span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_2_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_2_2}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_2_3}</span>
        </span>
        <span className="mt-4 font-bold">{data.text_2_4}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.title_3}</span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_3_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_3_2}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_3_3}</span>
        </span>
        <span className="mt-4 font-bold">{data.text_3_4}</span>
        <br />
        <span className="text-center text-xl font-bold">{data.Conclusion}</span>
        <span className="font-bold">{data.text_4}</span>
      </p>
    </main>
  );
};

export default CalltoAction;
