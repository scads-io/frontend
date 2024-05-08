import React, { useCallback, useMemo, useState } from "react";
import { Currency, Token } from '@scads/sdk'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "lib/utils";
import useDebounce from 'hooks/useDebounce'
import { useAllTokens } from 'hooks/Tokens'
import { filterTokens, useSortedTokensByQuery } from 'components/SearchModal/filtering'
import useTokenComparator from 'components/SearchModal/sorting'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";


interface TokenSelectProps {
  selectedCurrency?: Currency | null
  onCurrencySelect: (currency: Currency) => void
  otherSelectedCurrency?: Currency | null
}

const TokenSelect: React.FC<TokenSelectProps> = ({ 
  onCurrencySelect,
  selectedCurrency,
 }) => {

  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 200)

  const [invertSearchOrder] = useState<boolean>(false)

  const allTokens = useAllTokens()

  const showETH: boolean = useMemo(() => {
    const s = debouncedQuery.toLowerCase().trim()
    return s === '' || s === 'b' || s === 'bn' || s === 'bnb'
  }, [debouncedQuery])

  const tokenComparator = useTokenComparator(invertSearchOrder)

  const filteredTokens: Token[] = useMemo(() => {
    return filterTokens(Object.values(allTokens), debouncedQuery)
  }, [allTokens, debouncedQuery])

  const sortedTokens: Token[] = useMemo(() => {
    return filteredTokens.sort(tokenComparator)
  }, [filteredTokens, tokenComparator])

  const filteredSortedTokens = useSortedTokensByQuery(sortedTokens, debouncedQuery)
  const formattedTokens: (Currency | undefined)[] = showETH ? [Currency.ETHER, ...filteredSortedTokens] : filteredSortedTokens

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      onCurrencySelect(currency)
    },
    [onCurrencySelect],
  )

  const tokenIconClassNames =
    (selectedCurrency?.symbol === "USDT" && "w-5 h-5") ||
    (selectedCurrency?.symbol === "USDC" && "w-5 h-5") ||
    (selectedCurrency?.symbol === "BNB" && "h-5 w-5") ||
    (selectedCurrency?.symbol === "Scads" && "h-5 w-3") ||
    (selectedCurrency?.symbol === "TWINE" && "h-5 w-3");

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
              src={`/images/currency/${selectedCurrency?.symbol}.svg`}
              alt="currency placeholder"
              fill
            />
          </div>
          <span className="text-white">{selectedCurrency?.symbol}</span>
        </div>
        <ChevronRight
          size={16}
          className="group- text-white transition-transform hover:rotate-90"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl border-none bg-dark-blue text-white">
        <DropdownMenuLabel>Select a token</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        {formattedTokens.map((token) => (
          <DropdownMenuItem
            key={token.symbol}
            className="flex items-center gap-x-1 text-sm hover:bg-white/20"
            onClick={() => handleCurrencySelect(token)}
          >
            <Image
              src={`/images/currency/${token.symbol}.svg`}
              alt={token.symbol}
              width={12}
              height={12}
            />
            <span>{token.symbol}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TokenSelect;
