const data = {
  end: "End of White Paper",
  header: "13. Contact Information:",
  text_1:
    "Contact Details for Further Inquiries: TG Support @scads_support, Alexander @scadswp; email: j@scads.io",
  text_2:
    "Investment and Partnership Opportunities: TG @scads_support, Alexander @scadswp",
};

const Contact = () => {
  return (
    <main className="mx-auto flex max-w-[340px] flex-col items-center overflow-hidden pb-20 text-[#B4BCD0] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <h1 className="max-w-[340px] text-center text-[24px] font-bold md:max-w-[640px] lg:max-w-[800px] lg:text-3xl">
        {data.header}
      </h1>
      <p className="mt-[21px] flex max-w-[328px] flex-col gap-1 text-base md:max-w-[600px] lg:max-w-[1000px] lg:text-lg">
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_1}</span>
        </span>
        <span>
          <span className="ml-6 font-bold">&bull;</span>
          <span> {data.text_2}</span>
        </span>
        <br />
        <span className="mt-4 text-center font-bold">{data.end}</span>
      </p>
    </main>
  );
};

export default Contact;
