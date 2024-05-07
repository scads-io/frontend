import { cn } from "lib/utils";
import { Dispatch, SetStateAction } from "react";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  const hamburgerLine =
    "h-0.5 w-6 my-1 transition ease transform duration-300 bg-white";

  return (
    <button
      className="group relative z-50 flex h-12 w-12 flex-col items-center justify-center md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cn(hamburgerLine, isOpen && "origin-center rotate-45")} />
      <div
        className={cn(
          hamburgerLine,
          isOpen && "origin-center -translate-y-[10px] -rotate-45",
        )}
      />
    </button>
  );
};

export default Hamburger;
