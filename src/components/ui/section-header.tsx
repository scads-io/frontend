"use client";

import { motion } from "framer-motion";

const SectionHeader = ({ title, y }: { title: string; y: number }) => {
  return (
    <motion.h2
      initial={{ opacity: 0.5, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mx-auto mt-8 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent lg:max-w-[700px] 2xl:text-7xl"
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeader;
