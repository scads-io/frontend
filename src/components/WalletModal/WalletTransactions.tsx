import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Box, Button, Flex, Text } from '@scads-io/uikit'
import { AppDispatch } from 'state'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { clearAllTransactions } from 'state/transactions/actions'
import { orderBy } from 'lodash'
import TransactionRow from './TransactionRow'

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

interface WalletTransactionsProps {
  theme: boolean
}

const WalletTransactions: React.FC<WalletTransactionsProps> = ({ theme }) => {
  const { chainId } = useActiveWeb3React()
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslation()
  const allTransactions = useAllTransactions()
  const sortedTransactions = orderBy(Object.values(allTransactions).filter(isTransactionRecent), 'addedTime', 'desc')

  const handleClearAll = () => {
    if (chainId) {
      dispatch(clearAllTransactions({ chainId }))
    }
  }

  return (
    <Box minHeight='120px'>
      <Flex alignItems='center' justifyContent='space-between' mb='24px'>
        <div
          className={`${theme ? "text-white" : "text-black"}`}
          >
          <h1 className="text-2 font-semibold">{t('RECENT TRANSACTIONS')}</h1>
        </div>
        {sortedTransactions.length > 0 && (
          <StyledButton scale='sm' onClick={handleClearAll} variant='text' px='0'>
            {t('Clear all')}
          </StyledButton>
        )}
      </Flex>
      {sortedTransactions.length > 0 ? (
        sortedTransactions.map((txn) => <TransactionRow key={txn.hash} txn={txn} />)
      ) : (
        <StyledText bold textAlign='center'>{t('No recent transactions')}</StyledText>
      )}
    </Box>
  )
}

export default WalletTransactions
