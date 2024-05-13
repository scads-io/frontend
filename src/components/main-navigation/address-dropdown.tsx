import React from 'react'
import toast from 'react-hot-toast'
import { Copy, NotebookTabs } from 'lucide-react'
import { addresses } from 'constants/content'
import { useTranslation } from 'contexts/Localization'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const AddressDropdown = () => {
  const onCopy = (address: string) => {
    navigator.clipboard.writeText(address)
    toast.success('Address copied to clipboard.')
  }

  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="hidden md:block">
              <NotebookTabs className="transition-all focus:outline-none focus:ring-0 md:size-6 lg:hover:scale-110" />
            </TooltipTrigger>
            <TooltipContent className="text-sm text-white border-none bg-white/10 backdrop-blur-xl">
              <p>{t('Token addresses')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="md:hidden">{t('Addresses')}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 mr-20 border-none max-w-fit rounded-xl bg-dark-blue md:mr-0 md:max-w-none">
        <DropdownMenuGroup className="flex flex-col px-4 py-3 space-y-2">
          {addresses.map((item) => (
            <DropdownMenuItem
              key={item.address}
              className="flex flex-col items-start w-full text-sm md:flex-row md:items-center"
            >
              <p className="text-white w-[12%]">{item.address}</p>
              <div className="flex items-center rounded-3xl bg-indigo-600/10 px-4 py-2 w-[340px] md:w-[88%] justify-between">
                <p className="text-xs text-[#B4BCD0] md:min-w-[332px] truncate">{item.value}</p>
                <button
                  type="button"
                  aria-label="Copy"
                  onClick={() => onCopy(item.value)}
                  className="text-white transition hover:opacity-70"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AddressDropdown
