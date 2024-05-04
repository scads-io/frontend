"use client";

import SwapModal from "components/swap/swap-modal";
import { IoEllipse } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto flex justify-center pt-40 lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px]">
        <div className="flex flex-col items-center gap-y-8 text-white lg:max-w-none">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[320px] bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-center text-2xl font-bold !leading-[1.17] text-transparent lg:max-w-[900px] lg:text-5xl"
          >
            The World's First Non-PEGGED self-sustained Stablecoin Powered by
            Proof of Holding
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[340px] text-center text-neutral-300 md:text-lg lg:max-w-[550px] xl:max-w-[700px]"
          >
            Freewill defines the chain, Proof of Hold drives the protocol, SCADS
            & TWINE pioneer the technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SwapModal navigation={false} />
          </motion.div>
        </div>
      </div>
      <IoEllipse
        className="absolute -top-full left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-2/3 bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] text-transparent blur-[800px] lg:block"
        size={1000}
      />
      <IoEllipse
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-indigo-600/80 blur-[300px] md:hidden"
        size={340}
      />
    </section>
  );
};

export default Hero;
