"use client";

import { IoEllipse } from "react-icons/io5";
import { motion } from "framer-motion";
import { cn } from "lib/utils";

const CustomHero = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "mb-24 mt-32 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl",
          className,
        )}
      >
        {title}
      </motion.h1>
      <IoEllipse
        className="absolute -top-full left-1/2 -z-10 hidden -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-transparent blur-[200px] lg:block"
        size={800}
      />
    </>
  );
};

export default CustomHero;
