import { useMemo } from 'react'
import { useWeb3React } from '@scads-io/wagmi'
import { useAccount, useProvider, useSigner } from 'wagmi'

export const useProviderOrSigner = (withSignerIfPossible = true) => {
  const web3React = useWeb3React()
  const { chainId } = web3React
  const provider = useProvider({ chainId })
  const { address, isConnected } = useAccount()
  const { data: signer } = useSigner()

  return useMemo(
    () => (withSignerIfPossible && address && isConnected && signer ? signer : provider),
    [address, isConnected, provider, signer, withSignerIfPossible],
  )
}
