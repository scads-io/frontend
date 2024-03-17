import React, { KeyboardEvent, RefObject, useCallback, useMemo, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Currency, ETHER, Token } from '@scads/sdk'
import { Text, Input, Box } from '@scads-io/uikit'
import { useTranslation } from 'contexts/Localization'
import { FixedSizeList } from 'react-window'
import useDebounce from 'hooks/useDebounce'
import { useAllTokens, useFoundOnInactiveList } from '../../hooks/Tokens'
import { isAddress } from '../../utils'
import Column, { AutoColumn } from '../Layout/Column'
import Row from '../Layout/Row'
import CurrencyList from './CurrencyList'
import { filterTokens, useSortedTokensByQuery } from './filtering'
import useTokenComparator from './sorting'

const StyledInput = styled(Input)`
  display: none;
  border-radius: 16px;
  border: 1px solid rgba(165,161,150,0.84);
  box-shadow: ${({ theme }) => theme.shadows.inset};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.overlay};
  font-weight: bold;
  font-size: 16px;
`

interface CurrencySearchProps {
  selectedCurrency?: Currency | null
  onCurrencySelect: (currency: Currency) => void
  otherSelectedCurrency?: Currency | null
}

function CurrencySearch({
  selectedCurrency,
  onCurrencySelect,
  otherSelectedCurrency,
}: CurrencySearchProps) {
  const { t } = useTranslation()

  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>()

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

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      onCurrencySelect(currency)
    },
    [onCurrencySelect],
  )

  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInput = useCallback((event) => {
    const input = event.target.value
    const checksummedInput = isAddress(input)
    setSearchQuery(checksummedInput || input)
    fixedList.current?.scrollTo(0)
  }, [])

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const s = debouncedQuery.toLowerCase().trim()
        if (s === 'bnb') {
          handleCurrencySelect(ETHER)
        } else if (filteredSortedTokens.length > 0) {
          if (
            filteredSortedTokens[0].symbol?.toLowerCase() === debouncedQuery.trim().toLowerCase() ||
            filteredSortedTokens.length === 1
          ) {
            handleCurrencySelect(filteredSortedTokens[0])
          }
        }
      }
    },
    [filteredSortedTokens, handleCurrencySelect, debouncedQuery],
  )

  // if no results on main list, show option to expand into inactive
  const inactiveTokens = useFoundOnInactiveList(debouncedQuery)
  const filteredInactiveTokens: Token[] = useSortedTokensByQuery(inactiveTokens, debouncedQuery)

  return (
    <>
      <div>
        <AutoColumn gap='16px'>
          <Row>
            <StyledInput
              id='token-search-input'
              placeholder={t('Search name or paste address')}
              scale='lg'
              autoComplete='off'
              value={searchQuery}
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
              onKeyDown={handleEnter}
            />
          </Row>
        </AutoColumn>
        {filteredSortedTokens?.length > 0 || filteredInactiveTokens?.length > 0 ? (
          <Box margin='24px -24px'>
            <CurrencyList
              height={390}
              showETH={showETH}
              currencies={
                filteredInactiveTokens ? filteredSortedTokens.concat(filteredInactiveTokens) : filteredSortedTokens
              }
              breakIndex={inactiveTokens && filteredSortedTokens ? filteredSortedTokens.length : undefined}
              onCurrencySelect={handleCurrencySelect}
              otherCurrency={otherSelectedCurrency}
              selectedCurrency={selectedCurrency}
              fixedListRef={fixedList}
            />
          </Box>
        ) : (
          <Column style={{ padding: '20px', height: '100%' }}>
            <Text color='overlay' fontSize='15px' bold textAlign='center' mb='20px'>
              {t('No results found.')}
            </Text>
          </Column>
        )}
      </div>
    </>
  )
}

export default CurrencySearch
