import React from "react"

const Hamburger = ({ value }) => {
  const { isDark, setIsOpen, isOpen } = value;

  const genericHamburgerLine = `h-1 w-6 my-1 ${
    isDark ? "bg-[#E2E6E9]" : "bg-black"
  } transition ease transform duration-300`;

  return (
    <button
      type='button'
      aria-label="button"
      className="flex flex-col h-12 w-12 justify-center items-center group relative z-30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3" : ""
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
