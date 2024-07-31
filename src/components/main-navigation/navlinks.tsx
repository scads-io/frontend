import React from 'react'
import Link from 'next/link'
import { documents, tokenomicsLinks } from 'constants/content'
import { useTranslation } from 'contexts/Localization'
import { cn } from 'lib/utils'
import { RU } from 'config/localization/languages'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

const NavLinks = () => {
  const { t, currentLanguage } = useTranslation()

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden items-center gap-x-4 rounded-3xl border border-white/10 bg-white/[.02] px-6 text-sm text-white backdrop-blur-2xl md:flex">
        <NavigationMenuItem>
          <Link href="/faq" className="transition hover:text-[#B4BCD0]">
            {t('FAQ')}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <NavigationMenuTrigger className="bg-transparent p-0 font-normal hover:text-[#B4BCD0]">
            {t('Documents')}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl bg-dark-blue">
            <ul className="flex flex-col gap-y-2 rounded-xl p-2 text-sm text-white md:min-w-64">
              {documents.map((document) => (
                <li key={document.name}>
                  <NavigationMenuLink
                    href={document.path}
                    className="flex gap-x-2 rounded-lg p-2 transition-all hover:bg-white/20"
                  >
                    <div className="pt-0.5 text-neutral-400">{document.icon}</div>
                    <div className="flex flex-col gap-y-1">
                      <span className="flex gap-x-1">{t(document.name)}</span>
                      <span className="text-neutral-400">{t(document.description)}</span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/tokenomics" className="transition hover:text-[#B4BCD0]">
            {t('Tokenomics')}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavLinks
