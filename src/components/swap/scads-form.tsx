import React, { useState, useEffect } from 'react'
import { useWalletModal } from 'hooks/use-wallet-modal'
import FormInputs from './form-inputs'
import Taxes from './taxes'
import WalletModal from '../WalletModal/wallet-modal'
import { Button } from '../ui/button'

const ScadsForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [firstToken, setFirstToken] = useState('USDT')
  const [secondToken, setSecondToken] = useState('SCADS')
  const [receivalAmount, setRecivalAmount] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  const walletModal = useWalletModal()

  const handleSwap = () => {
    const tempToken = firstToken
    setFirstToken(secondToken)
    setSecondToken(tempToken)
  }

  useEffect(() => {
    setRecivalAmount(inputValue * 0.97)
  }, [inputValue])

  return (
    <form className="mt-2 flex flex-col gap-y-6">
      <FormInputs
        inputValue={inputValue}
        setInputValue={setInputValue}
        panel={panel}
        handleSwap={handleSwap}
        setFirstToken={setFirstToken}
        setSecondToken={setSecondToken}
        firstToken={firstToken}
        secondToken={secondToken}
      />
      <div className="flex w-full justify-between text-sm text-white">
        <p className="text-[#B4BCD0]">1 SCADS = 1 USDT</p>
        <p>
          <span className="pr-1 text-[#B4BCD0]">You receive:</span>
          {receivalAmount.toFixed(1)}
        </p>
      </div>
      <Taxes />
      {walletModal.isConnected ? (
        <Button
          onClick={() => {}}
          variant="ghost"
          className="w-full rounded-3xl bg-white/20 text-base text-white hover:bg-white/40 hover:text-white"
        >
          Swap
        </Button>
      ) : (
        <WalletModal />
      )}
    </form>
  )
}

export default ScadsForm
