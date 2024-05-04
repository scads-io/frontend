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
import { Copy } from "lucide-react";

const AddressDropdown = () => {
  const onCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard.");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative invert-0 transition-all focus:outline-none focus:ring-0 md:size-10 lg:size-8 lg:hover:scale-110">
        <Image
          src="/images/address.svg"
          alt="addresses"
          fill
          className="hidden md:block"
        />
        <span className="md:hidden">Addresses</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-20 mt-2 max-w-fit rounded-xl border-none bg-dark-blue md:max-w-none lg:mr-0">
        <DropdownMenuGroup className="flex flex-col space-y-2 px-4 py-3">
          {addresses.map((item) => (
            <DropdownMenuItem
              key={item.address}
              className="flex w-full flex-col items-start text-sm md:flex-row md:items-center"
            >
              <p className="text-white md:w-[12%]">{item.address}</p>
              <div className="flex items-center rounded-3xl bg-indigo-600/10 px-4 py-2 md:w-[88%] md:justify-between">
                <p className="text-xs text-neutral-300 md:min-w-[332px]">
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
