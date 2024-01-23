import React from "react"

export interface Props {
  theme: boolean
  toggleTheme: (isDark: boolean) => void
}

const ThemeSwitcher: React.FC<Props> = ({ theme, toggleTheme }) => (
  <button
    type='button'
    onClick={() => toggleTheme(!theme)}
    className={`
      w-14 
      h-8
      rounded-full 
      p-1 
      ${theme ? "bg-[#E2E6E9]" : "bg-[#0D0D0D]"}
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
        ${theme ? "ml-6" : " ml-0"} 
        pointer-events-none 
        transition-all 
        duration-300 
        ease-out
      `}
    >
      {theme ? (
        <img
          src='images/home/moon.svg'
          className="invert"
          height={40}
          width={40}
          alt="moon"
        />
      ) : (
        <img 
          src='images/home/sun.svg'
          className="invert"
          height={40}
          width={40}
          alt="sun" 
        />
      )}
    </div>
  </button>
)

export default React.memo(ThemeSwitcher, (prev, next) => prev.theme === next.theme)
