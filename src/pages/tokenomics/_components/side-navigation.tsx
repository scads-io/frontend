"use client";

import { tokenomicsLinks } from "constants/content";
import { useTranslation } from "contexts/Localization";
import Link from "next/link";

const SideNavigation = () => {
  const { t } = useTranslation();

  return (
    <aside className="sticky left-0 top-32 hidden h-fit flex-col gap-y-6 rounded-xl border border-white/10 bg-white/10 px-6 py-8 lg:flex xl:top-24 xl:px-8 2xl:top-32">
      <p className="whitespace-nowrap text-white xl:text-lg">
        {t("Table of contents")}
      </p>
      <ul className="space-y-2 text-[#B4BCD0] xl:space-y-4">
        {tokenomicsLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className="group flex items-center gap-x-2 whitespace-nowrap text-sm xl:text-base"
            >
              {t(link.name)}
              <svg
                className="hidden lg:block"
                width="14"
                height="14"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="-translate-x-[3px] transition-transform group-hover:translate-x-0"
                  d="M8 15L14 8.5L8 2"
                  stroke="currentColor"
                  stroke-width="3"
                />
                <line
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  x1="13"
                  y1="8.5"
                  y2="8.5"
                  stroke="currentColor"
                  stroke-width="3"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNavigation;
