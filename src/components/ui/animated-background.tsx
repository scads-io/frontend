"use client";

import { cn } from "lib/utils";
import { motion } from "framer-motion";

const AnimatedBackground = ({ color }: { color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        "absolute left-1/2 top-1/2 z-0 h-24 w-[340px] -translate-x-1/2 rounded-full blur-[200px] md:w-full",
        color,
      )}
    />
  );
};

export default AnimatedBackground;
