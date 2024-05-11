import Image from 'next/image'
import Socials from '../socials'
import Disclaimer from './disclaimer'
import { usePathname } from 'next/navigation'
import { cn } from 'lib/utils'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathName = usePathname()

  return (
    <footer
      className={cn(
        'relative z-50 mx-auto mt-32 flex max-w-[91%] flex-col items-center justify-between border-t border-white/10 py-8 md:max-w-[720px] md:flex-row md:items-end lg:max-w-[1060px] xl:max-w-[1240px] 2xl:max-w-[1340px]',
        pathName === '/whitepaper' && 'hidden',
      )}
    >
      <div className="flex flex-col items-center gap-y-5 md:items-start">
        <div className="flex items-center gap-x-2 text-xl font-bold text-white">
          <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
          SCADS
        </div>
        <p className="text-center text-sm text-[#B4BCD0] md:text-start md:text-base whitespace-nowrap">
          SCADS © Copyright {currentYear}. All rights reserved. ™
        </p>
      </div>
      <Socials />
      <Disclaimer />
    </footer>
  )
}

export default Footer
