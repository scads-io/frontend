import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import SwapModal from "../swap/swap-modal";
import { documents, tokenomicsLinks } from "constants/content";

const NavLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden items-center gap-x-4 rounded-3xl border border-white/10 bg-white/[.02] px-6 text-sm text-white backdrop-blur-2xl lg:flex">
        <NavigationMenuItem>
          <Link href="/" className="transition hover:text-neutral-300">
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <SwapModal navigation />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq" className="transition hover:text-neutral-300">
            FAQ
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <NavigationMenuTrigger className="bg-transparent p-0 font-normal hover:text-neutral-300">
            Documents
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl bg-dark-blue">
            <ul className="flex flex-col gap-y-2 rounded-xl p-2 text-sm text-white md:min-w-64">
              {documents.map((document) => (
                <li key={document.name}>
                  <NavigationMenuLink
                    href={document.path}
                    className="flex gap-x-2 rounded-lg p-2 transition-all hover:bg-white/20"
                  >
                    <div className="pt-0.5 text-neutral-400">
                      {document.icon}
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="flex gap-x-1">{document.name}</span>
                      <span className="text-neutral-400">
                        {document.description}
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <NavigationMenuTrigger className="bg-transparent p-0 font-normal hover:text-neutral-300">
            <Link href="/tokenomics">Tokenomics</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-x-4 rounded-xl bg-dark-blue">
            <ul className="grid grid-cols-1 gap-x-2 gap-y-2 rounded-xl p-2 text-sm text-white md:w-[448px] md:grid-cols-2 lg:grid-cols-3">
              {tokenomicsLinks.map((link) => (
                <li key={link.name}>
                  <NavigationMenuLink
                    href={link.path}
                    className="flex gap-x-2 rounded-lg p-2 transition-all hover:bg-white/20 hover:text-white"
                  >
                    <div className="flex flex-col gap-y-1">
                      <span className="flex gap-x-1">{link.name}</span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
