"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { addresses } from "constants/content";
import Image from "next/image";
import toast from "react-hot-toast";
import { Copy, NotebookTabs } from "lucide-react";
import { useTranslation } from "contexts/Localization";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const AddressDropdown = () => {
  const onCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard.");
  };

  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:pt-1.5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <NotebookTabs className="transition-all focus:outline-none focus:ring-0 md:size-6 lg:hover:scale-110" />
            </TooltipTrigger>
            <TooltipContent className="border-none bg-white/10 text-sm text-white backdrop-blur-xl">
              <p>Token addresses.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="md:hidden">{t("Addresses")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-20 mt-2 max-w-fit rounded-xl border-none bg-dark-blue md:mr-0 md:max-w-none">
        <DropdownMenuGroup className="flex flex-col space-y-2 px-4 py-3">
          {addresses.map((item) => (
            <DropdownMenuItem
              key={item.address}
              className="flex w-full flex-col items-start text-sm md:flex-row md:items-center"
            >
              <p className="text-white md:w-[12%]">{item.address}</p>
              <div className="flex items-center rounded-3xl bg-indigo-600/10 px-4 py-2 md:w-[88%] md:justify-between">
                <p className="text-xs text-[#B4BCD0] md:min-w-[332px]">
                  {item.value}
                </p>
                <button
                  type="button"
                  onClick={() => onCopy(item.value)}
                  className="hidden text-white transition hover:opacity-70 md:block"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddressDropdown;
