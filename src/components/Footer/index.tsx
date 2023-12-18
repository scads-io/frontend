import React from 'react'

const socialIcons = [
  {
    id: "i1",
    icon: "/images/home/logo-x.webp",
    redirect: "https://twitter.com/Scads_io",
  },
  {
    id: "i2",
    icon: "/images/home/telegram_logo.svg",
    redirect: "https://t.me/scads_io",
  },
  {
    id: "i3",
    icon: "/images/home/instagram_logo.svg",
  },
  {
    id: "i4",
    icon: "/images/home/discord_logo.svg",
  },
  {
    id: "i5",
    icon: "/images/home/github_logo.svg",
    redirect: "https://github.com/scads-io",
  },
  {
    id: "i6",
    icon: "/images/home/logo-medium.svg",
  },
];

const Footer = (props) => {
  const { theme, className } = props

  const year = new Date().getFullYear()

  return (
    <div
      className={`flex flex-col justify-center items-center pb-10 lg:pb-10 gap-6 ${className}`}
    >
      <div className="flex items-center gap-5">
        {socialIcons.map((item) => (
          <a
            href={item.redirect}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            key={item.id}
          >
            <img
              src={item.icon}
              className={`${theme.isDark && "invert"}`}
              alt="social icon"
              width={28}
            />
          </a>
        ))}
      </div>
      <p
        className={`font-['Poppins'] text-lg text-center flex gap-1 items-center ${
          theme.isDark && "text-[#B6B6B6]"
        }`}
      >
        {`SCADS © Copyright ${year}. All rights reserved.`}{" "}
        <img
          src="/images/home/trademark-icon.svg"
          className={`${theme.isDark && "invert contrast-50"}`}
          width={10}
          alt=""
        />
      </p>
    </div>
  )
}

export default Footer
