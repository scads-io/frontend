"use client";

import { useState } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import FormInputs from "./form-inputs";
import Taxes from "./taxes";
import { useWalletModal } from "hooks/use-wallet-modal";
import WalletModal from "../wallet/wallet-modal";
import { Button } from "../ui/button";

const TwineForm: React.FC<{ panel: string }> = ({ panel }) => {
  const [inputValue, setInputValue] = useState(0);
  const walletModal = useWalletModal();

  return (
    <form className="mt-2 flex flex-col gap-y-4 2xl:gap-y-6">
      <FormInputs
        inputValue={inputValue}
        setInputValue={setInputValue}
        panel={panel}
        firstToken="TWINE"
        secondToken="SCADS"
      />
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
      <div className="flex items-center justify-center space-x-2 text-white">
        <Switch id="airplane-mode" className="bg-white/5" />
        <Label htmlFor="airplane-mode" className="text-white">
          Auto-compound
        </Label>
      </div>
      <div className="flex flex-col items-center gap-y-2 text-sm text-white">
        <p>
          <span className="text-[#B4BCD0]">SCADS owned:</span> 0.00
        </p>
        <div className="w-full space-y-2">
          <p className="flex justify-between">
            <span className="text-[#B4BCD0]">Time invested:</span> 62 Days 19
            Hours 20 Minutes
          </p>
          <p className="flex justify-between">
            <span className="text-[#B4BCD0]">TWINE minted:</span> 5.495
          </p>
          <p className="flex justify-between">
            <span className="text-[#B4BCD0]">TWINE claimed:</span> 2.745
          </p>
        </div>
      </div>
      {walletModal.isConnected ? (
        <Button
          onClick={() => {}}
          variant="ghost"
          className="w-full rounded-3xl bg-white/20 text-base text-white hover:bg-white/40 hover:text-white"
        >
          Claim
        </Button>
      ) : (
        <WalletModal />
      )}
    </form>
  );
};

export default TwineForm;
