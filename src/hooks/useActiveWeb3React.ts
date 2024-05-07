import { useWeb3React } from '@scads-io/wagmi'
import { useProvider } from 'wagmi'

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = () => {
  const web3React = useWeb3React()
  const chainId = 56
  const provider = useProvider({ chainId })

  return {
    provider,
    ...web3React,
    chainId,
  }
}

export default useActiveWeb3React
