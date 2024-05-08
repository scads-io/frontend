import { useCallback } from 'react'
import { caratBuy, caratRedeem, caratClaim, addAutoCompoundAddress, removeAutoCompoundAddress } from 'utils/calls'
import { useCaratContract } from 'hooks/useContract'

const useCaratMint = () => {
  const caratContract = useCaratContract()

  const handleBuy = useCallback(
    async (amount: string) => {
      const txHash = await caratBuy(caratContract, amount)
    },
    [caratContract],
  )

  const handleRedeem = useCallback(
    async (amount: string) => {
      const txHash = await caratRedeem(caratContract, amount)
    },
    [caratContract],
  )

  const handleClaim = useCallback(async () => {
    const txHash = await caratClaim(caratContract)
  }, [caratContract])

  const handleAddAutoCompoundAddress = useCallback(async () => {
    const txHash = await addAutoCompoundAddress(caratContract)
  }, [caratContract])

  const handleRemoveAutoCompoundAddress = useCallback(async () => {
    const txHash = await removeAutoCompoundAddress(caratContract)
  }, [caratContract])

  return {
    caratBuy: handleBuy,
    caratRedeem: handleRedeem,
    caratClaim: handleClaim,
    addCompoundAddress: handleAddAutoCompoundAddress,
    removeCompoundAddress: handleRemoveAutoCompoundAddress,
  }
}

export default useCaratMint
