import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const LanguageDropdown = () => {
  const { setLanguage, t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-transform lg:hover:scale-110">
        <>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger className="hidden md:block">
                <Globe className="md:size-5 lg:size-6" />
              </TooltipTrigger>
              <TooltipContent className="text-sm text-white border-none bg-white/10 backdrop-blur-xl">
                <p>Languages</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span className="md:hidden">{t('Languages')}</span>
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 max-w-[340px] rounded-xl border-none bg-dark-blue lg:mr-0 lg:max-w-none">
        <DropdownMenuGroup className="text-white">
          {languageList.map((lang) => (
            <DropdownMenuItem
              key={lang.locale}
              onClick={() => setLanguage(lang)}
              className="transition-colors hover:text-[#B4BCD0]"
            >
              {lang.language}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropdown
