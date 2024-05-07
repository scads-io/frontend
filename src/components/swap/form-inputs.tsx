import Input from "./input";
import { AiOutlineSwap } from "react-icons/ai";
import { Separator } from "../ui/separator";
import { cn } from "lib/utils";

interface FormInputsProps {
  inputValue: number;
  setInputValue: (value: number) => void;
  panel: string;
  handleSwap?: () => void;
  setFirstToken?: (token: string) => void;
  firstToken: string;
  setSecondToken?: (token: string) => void;
  secondToken: string;
}

const FormInputs: React.FC<FormInputsProps> = ({
  inputValue,
  setInputValue,
  panel,
  handleSwap,
  setFirstToken,
  firstToken,
  setSecondToken,
  secondToken,
}) => {
  return (
    <div className="relative flex h-full justify-between rounded-3xl border border-black border-white/10 bg-transparent px-4 lg:w-[460px]">
      <Input
        className={cn(
          "items-start pb-1 pt-4 text-white placeholder:text-white",
        )}
        balanceClassName={cn("justify-start text-white")}
        tokenClassName="text-white"
        setToken={setFirstToken}
        token={firstToken}
        setValue={setInputValue}
        value={inputValue}
        panel={panel}
      />
      <Separator
        orientation="vertical"
        className="absolute left-1/2 -translate-x-1/2 bg-white/10"
      />
      {panel === "SCADS" && (
        <button
          type="button"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0c0e22] p-1 text-white transition hover:text-indigo-600"
          onClick={handleSwap}
        >
          <AiOutlineSwap size={24} />
        </button>
      )}
      <Input
        className="items-end pb-1 pt-4 text-end text-white placeholder:text-white"
        balanceClassName="justify-end text-white"
        tokenClassName="text-white"
        setToken={setSecondToken}
        token={secondToken}
        setValue={setInputValue}
        value={inputValue}
        panel={panel}
      />
    </div>
  );
};

export default FormInputs;
