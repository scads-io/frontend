"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "components/ui/section-header";

const TextBlock = () => {
  const [textIsVisible, setTextIsVisible] = useState(false);

  return (
    <section className="relative mt-32 flex flex-col items-center gap-y-4 px-4 text-white md:px-0">
      <SectionHeader title="Introducing Scads" y={-50} />
      <div className="max-w-[340px] text-neutral-300 lg:max-w-[1024px]">
        <p className="z-10">
          The evolution of Decentralized Finance (DeFi) from a nascent niche
          market to a formidable player in the financial industry has been
          remarkable over the past few years. While it was valued at around $170
          billion USD as of May 2024, the estimate can only continue thanks to
          the increasing adoption and interest from investors. Still, all this
          growth was not without issues as the followed major challenges:
        </p>
        <AnimatePresence mode="wait">
          {textIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-10 mt-4"
            >
              <ul className="list-disc pl-4">
                <li>
                  Product integrity: A notable aspect within the DeFi space
                  involves certain projects operating unsustainably, offering
                  returns without adequate security, or failing to fulfill their
                  promised outcomes.
                </li>
                <li>
                  Platform security – Technical issues represented another
                  challenge due to the significant number of breaches happening
                  that at times turned into financial loses.
                </li>
                <li>
                  Regulatory concerns – although independence from conventional
                  financial regulation brings numerous opportunities, it is also
                  extremely hard to navigate and remain compliant.
                </li>
              </ul>
              <p className="mt-4">
                SCADS, an innovative stablecoin built on the Proof of Holding
                algorithm, has the potential to significantly impact the digital
                currency landscape.
              </p>
              <p className="mt-4">SCADS is:</p>
              <ul className="mt-4 list-disc pl-4">
                <li>
                  Non-pegged: Unlike traditional stablecoins, SCADS is not
                  pegged to fiat currencies (dollar, euro, etc.), it uses USDT
                  only as a point of reference. This makes it more resistant to
                  inflation and economic shocks.
                </li>
                <li>
                  Reliable: User funds are stored in their own wallets, which
                  ensures maximum security.
                </li>
                <li>
                  Risk-free: SCADS offers passive income without staking or
                  participating in liquidity pools. This guarantees no risks or
                  losses.
                </li>
                <li>
                  Autonomous: SCADS operates without owners, managed solely by
                  an algorithm. This eliminates the possibility of manipulation
                  and fraud.
                </li>
                <li>
                  Decentralization: Freedom from control by banks and
                  governments.
                </li>
                <li>Self-sufficiency: Independence from fiat currencies.</li>
                <li>Freedom: Your money, your rules.</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={() => setTextIsVisible(!textIsVisible)}
        className="group z-10 mt-4 flex items-center gap-x-2 font-medium text-white"
      >
        {textIsVisible ? "Show less" : "Show more"}
        {textIsVisible ? (
          <ChevronRight className="size-4 transition-transform group-hover:-rotate-90" />
        ) : (
          <ChevronRight className="size-4 transition-transform group-hover:rotate-90" />
        )}
      </button>
    </section>
  );
};

export default TextBlock;
