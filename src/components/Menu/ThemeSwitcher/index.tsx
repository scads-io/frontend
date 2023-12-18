import React from "react"

export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <button
    type='button'
    onClick={() => toggleTheme(!isDark)}
    className={`
      w-14 
      h-8
      rounded-full 
      p-1 
      ${isDark ? "bg-[#E2E6E9]" : "bg-[#0D0D0D]"}
      relative 
      transition-colors 
      duration-500 
      ease-in
      `}
    >
    <div
      id="toggle"
      className={`
          rounded-full 
          w-6 
          h-6 
          relative
          ${isDark ? "ml-6" : " ml-0"} 
          pointer-events-none 
          transition-all 
          duration-300 
          ease-out
      `}
    >
      {isDark ? (
        <img
          src='images/home/moon.svg'
          className="invert"
          height={40}
          width={40}
          alt="moon"
        />
      ) : (
        <img src='images/home/sun.svg' className="invert" height={40} width={40} alt="sun" />
      )}
    </div>
  </button>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
