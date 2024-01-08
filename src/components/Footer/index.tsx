import React from 'react'

const socialIcons = [
  {
    id: "i1",
    icon: "/images/footer/x.webp",
    redirect: "https://twitter.com/Scads_io",
  },
  {
    id: "i2",
    icon: "/images/footer/telegram.svg",
    redirect: "https://t.me/scads_io",
  },
  {
    id: "i3",
    icon: "/images/footer/discord.svg",
  },
  {
    id: "i4",
    icon: "/images/footer/github.svg",
    redirect: "https://github.com/scads-io",
  },
  {
    id: "i5",
    icon: "/images/footer/medium.svg",
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
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <p
        className={`text-lg text-center ${
          theme.isDark && "text-[#B6B6B6]"
        }`}
      >
        {`SCADS © Copyright ${year}. All rights reserved.`}{" ™"}
      </p>
    </div>
  )
}

export default Footer
