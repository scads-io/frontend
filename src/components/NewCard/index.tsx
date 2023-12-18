import React from 'react'

const NewCard = ({ className, theme, children }) => {

  return (
    <div
      className={`backdrop-filter backdrop-blur-lg bg-opacity-10 ${
        theme
          ? "bg-[#58585E] text-[#B6B6B6] shadow-sm shadow-[#ffffff20]"
          : " bg-gradient-to-br from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] text-black shadow-sm shadow-white"
      } rounded-[30px] lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default NewCard;
