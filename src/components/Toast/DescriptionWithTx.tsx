import React from 'react'
import { Link, Text } from '@scads/uikit'
import useTheme from 'hooks/useTheme'
import { getBscScanLink } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import truncateHash from 'utils/truncateHash'

interface DescriptionWithTxProps {
  // description?: string
  txHash?: string
}

const DescriptionWithTx: React.FC<DescriptionWithTxProps> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React()
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <>
      {typeof children === 'string' ? <Text as='p'>{children}</Text> : children}
      {txHash && (
        <Link external href={getBscScanLink(txHash, 'transaction', chainId)}>
          <span 
            className={`font-bold ${
            theme.isDark ? "text-white" : "text-black"
            }`}
          >
            {t('View on BscScan')}: {truncateHash(txHash, 8, 0)}
          </span>
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
