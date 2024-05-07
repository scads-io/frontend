import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { cn } from "lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const tokens = [
  {
    name: "BNB",
  },
  {
    name: "SCADS",
  },
  {
    name: "TWINE",
  },
  {
    name: "USDC",
  },
  {
    name: "USDT",
  },
];

interface TokenSelectProps {
  setToken?: (token: string) => void;
  token: string;
}

const TokenSelect: React.FC<TokenSelectProps> = ({ setToken, token }) => {
  const tokenIconClassNames =
    (token === "USDT" && "w-5 h-5") ||
    (token === "BNB" && "h-5 w-5") ||
    (token === "SCADS" && "h-5 w-3") ||
    (token === "TWINE" && "h-5 w-3");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group flex w-[120px] items-center justify-between rounded-3xl border border-white/10 bg-white/[.02] px-3 py-2 lg:w-[140px]",
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className={cn("relative", tokenIconClassNames)}>
            <Image
              src={`/images/currency/${token}.svg`}
              alt="currency placeholder"
              fill
            />
          </div>
          <span className="text-white">{token}</span>
        </div>
        <ChevronRight
          size={16}
          className="group- text-white transition-transform hover:rotate-90"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl border-none bg-dark-blue text-white">
        <DropdownMenuLabel>Select a token</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        {tokens.map((token) => (
          <DropdownMenuItem
            key={token.name}
            className="flex items-center gap-x-1 text-sm hover:bg-white/20"
            onClick={() => setToken!(token.name)}
          >
            <Image
              src={`/images/currency/${token.name}.svg`}
              alt={token.name}
              width={12}
              height={12}
            />
            <span>{token.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TokenSelect;
