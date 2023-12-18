import { useCallback } from 'react'
import { scadsMint, scadsSell } from 'utils/calls'
import { useScadsContract } from 'hooks/useContract'
import { utils } from 'ethers'

const useScadsMint = () => {
  const scadsContract = useScadsContract()

  const handleMint = useCallback(
    async (amount: string, token: string) => {
      const txHash = await scadsMint(scadsContract, utils.parseEther(amount), token)
    },
    [scadsContract],
  )

  const handleSell = useCallback(
    async (amount: string, token: string) => {
      const txHash = await scadsSell(scadsContract, utils.parseEther(amount), token)
    },
    [scadsContract],
  )

  return { scadsMint: handleMint, scadsSell: handleSell }
}

export default useScadsMint
