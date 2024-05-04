import Image from "next/image";
import Socials from "../socials";
import Disclaimer from "./disclaimer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 mx-auto mt-32 flex max-w-[340px] flex-col items-center justify-between border-t border-white/10 py-8 lg:max-w-[1060px] lg:flex-row lg:items-end xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <div className="flex flex-col items-center gap-y-5 lg:items-start">
        <div className="flex items-center gap-x-2 text-xl font-bold text-white">
          <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
          SCADS
        </div>
        <p className="text-center text-sm text-neutral-300 md:text-start md:text-base">
          SCADS © Copyright {currentYear}. All rights reserved. ™
        </p>
      </div>
      <Socials />
      <Disclaimer />
    </footer>
  );
};

export default Footer;
