"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { tutorialMobile } from "constants/content";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TabValue = "metamask" | "trust" | "binance";

type Step = {
  label: string;
  list: {
    li1: string | null;
    li2: string | null;
    li3: string | null;
    li4: string | null;
    li5: string | null;
    li6: string | null;
  };
};

const tabsItems = [
  { label: "Metamask", value: "metamask", imgPath: "/images/metamask.svg" },
  {
    label: "Binance chain",
    value: "binance",
    imgPath: "/images/binance.svg",
  },
  {
    label: "Trust wallet",
    value: "trust",
    imgPath: "/images/trust.svg",
  },
];

const MobileInfo = () => {
  const [currentTab, setCurrentTab] = useState<TabValue>("metamask");

  return (
    <Tabs
      defaultValue="metamask"
      className="relative z-20 flex max-h-96 flex-col items-center md:items-start"
    >
      <TabsList>
        {tabsItems.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value as TabValue}
            onFocus={() => setCurrentTab(tab.value as TabValue)}
            className="flex items-center gap-x-2 rounded-3xl bg-transparent text-white data-[state=active]:bg-white/20"
          >
            <Image src={tab.imgPath} alt={tab.label} width={24} height={24} />
            <AnimatePresence>
              {currentTab === tab.value && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{
                    width: 0,
                    opacity: 0,
                    transition: { width: { delay: 0.1 } },
                  }}
                >
                  <span>{tab.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsTrigger>
        ))}
      </TabsList>
      <AnimatePresence mode="wait">
        <TabsContent
          value={currentTab}
          className="z-20 mt-4 space-y-12 overflow-y-auto overflow-x-hidden overscroll-y-none"
        >
          {tutorialMobile[currentTab].map((step: Step, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="w-11/12"
            >
              <div className="space-y-2">
                <p className="text-xl font-medium text-white">{step.label}</p>
                <ol className="space-y-1 text-neutral-300">
                  {Object.values(step.list).map(
                    (value, i) => value && <li key={i}>{value}</li>,
                  )}
                </ol>
              </div>
            </motion.div>
          ))}
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
};

export default MobileInfo;
