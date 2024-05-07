"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip";
import { statItems } from "constants/content";
import { useTranslation } from "contexts/Localization";
import { EN } from "config/localization/languages";
import { cn } from "lib/utils";
import { Info } from "lucide-react";

const GeneralStats = () => {
  const { t, currentLanguage } = useTranslation();

  return (
    <div className="flex items-end justify-center">
      <div className="z-20 flex min-w-full flex-col items-center gap-y-4 px-4 pt-8 md:w-full md:min-w-0 md:flex-row md:flex-wrap md:items-start md:justify-between md:px-8 lg:flex-nowrap">
        {statItems.map((item) => (
          <div
            key={item.id}
            className="flex min-w-full items-center justify-between gap-x-10 md:min-w-[200px] md:justify-normal md:gap-x-3 lg:min-w-0"
          >
            <div
              className={cn(
                "rounded-full bg-white/10 p-3 lg:p-2 xl:p-3",
                currentLanguage !== EN && "xl:p-2",
              )}
            >
              <div
                className={cn(
                  "relative flex items-center justify-center text-[#B4BCD0] [&>*]:size-7 md:[&>*]:size-5 xl:[&>*]:size-6",
                  currentLanguage !== EN && "xl:size-5",
                )}
              >
                {item.icon}
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1 md:items-start">
              <div className="flex items-center gap-x-1">
                <p className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-end text-sm font-normal text-black text-transparent lg:text-start lg:text-xs xl:text-sm">
                  {t(item.name)}
                </p>
                {item.info && currentLanguage === EN && (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="hidden size-4 text-[#B4BCD0] lg:block" />
                      </TooltipTrigger>
                      <TooltipContent className="border-none bg-white/10 text-white backdrop-blur-xl">
                        <p className="max-w-sm">
                          {item.info}{" "}
                          {item.id === "s1" && (
                            <a
                              href="/tokenomics/#minting-speed"
                              aria-label="minting speed"
                              className="underline"
                            >
                              predetermined criteria
                            </a>
                          )}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <p className="text-white lg:text-sm xl:text-base">
                {item.placeholder}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralStats;
