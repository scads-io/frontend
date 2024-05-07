"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip";
import { treasuryItems } from "constants/content";
import { useTranslation } from "contexts/Localization";
import { RU } from "config/localization/languages";
import { cn } from "lib/utils";
import { Info } from "lucide-react";
import Image from "next/image";

const Treasury = () => {
  const { t, currentLanguage } = useTranslation();

  return (
    <section className="lg:rounded-t-0 relative flex flex-col items-center gap-y-8 rounded-b-3xl px-4 pb-10 md:px-8">
      <span
        className={cn(
          "absolute -top-16 left-1/2 -translate-x-1/2 rounded-3xl border border-white/10 bg-gradient-to-b from-transparent via-dark-blue to-transparent px-6 py-1 text-sm text-white backdrop-blur-3xl lg:-top-6",
          currentLanguage === RU && "lg:-top-9",
        )}
      >
        {t("Treasury")}
      </span>
      <div className="flex w-full flex-col items-center gap-y-10 rounded-b-3xl md:flex-row md:justify-between lg:mt-8">
        {treasuryItems.map((item) => (
          <div
            className="relative flex min-w-full items-center gap-x-10 md:min-w-0 xl:gap-x-20"
            key={item.id}
          >
            <div className="z-10 flex min-w-full items-center justify-between gap-y-2 md:min-w-0 md:flex-col">
              <div className="flex items-center gap-x-1">
                <p className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-sm font-semibold text-transparent lg:text-xs xl:text-sm">
                  {t(item.name)}
                </p>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="hidden size-4 text-[#B4BCD0] lg:block" />
                    </TooltipTrigger>
                    <TooltipContent className="border-none bg-white/10 text-white backdrop-blur-xl">
                      <p className="max-w-sm">{t(item.info)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-x-0.5">
                {item.id === "ti2" && (
                  <Image
                    src="/images/currency/SCADS.svg"
                    alt="Scads"
                    width={7}
                    height={16}
                  />
                )}
                {item.id === "ti3" && (
                  <Image
                    src="/images/currency/TWINE.svg"
                    alt="Scads"
                    width={7}
                    height={16}
                  />
                )}
                <p className="text-white lg:text-sm xl:text-base">
                  {item.amount}
                </p>
              </div>
            </div>
            {item.id !== "ti5" && (
              <>
                <div className="absolute -right-2/3 hidden h-24 w-[1px] bg-white/10 lg:block" />
                <div className="absolute -right-2/3 hidden h-4 w-[1px] bg-white/30 lg:block" />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treasury;
