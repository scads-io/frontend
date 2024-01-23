import React from 'react'
import { Link, Text } from '@scads/uikit'
import { getBscScanLink } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import { useThemeManager } from 'state/user/hooks'
import truncateHash from 'utils/truncateHash'

interface DescriptionWithTxProps {
  // description?: string
  txHash?: string
}

const DescriptionWithTx: React.FC<DescriptionWithTxProps> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React()
  const [isDark] = useThemeManager()
  const { t } = useTranslation()

  return (
    <>
      {typeof children === 'string' ? <Text as='p'>{children}</Text> : children}
      {txHash && (
        <Link external href={getBscScanLink(txHash, 'transaction', chainId)}>
          <span 
            className={`font-bold ${
              isDark ? "text-white" : "text-black"
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
