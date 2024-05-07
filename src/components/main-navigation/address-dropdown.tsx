import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu'
import { addresses } from 'constants/content'
import toast from 'react-hot-toast'
import { Copy, NotebookTabs } from 'lucide-react'
import { useTranslation } from 'contexts/Localization'
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
              <p>Token addresses</p>
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
              <p className="text-white md:w-[12%]">{item.address}</p>
              <div className="flex items-center rounded-3xl bg-indigo-600/10 px-4 py-2 md:w-[88%] md:justify-between">
                <p className="text-xs text-[#B4BCD0] md:min-w-[332px]">{item.value}</p>
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
  )
}

export default AddressDropdown
