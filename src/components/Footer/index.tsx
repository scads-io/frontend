import React from 'react'
import { Link } from '@scads/uikit'

const Footer = ({ theme, className }) => {

  const year = new Date().getFullYear()

  return (
    <div
      className={`flex flex-col justify-center items-center pb-10 lg:pb-10 gap-6 ${className}`}
      >
      <div className="flex gap-5">
        <Link href='https://twitter.com/home' external>
          <img src='/images/home/twitter_logo 1.svg' className={`${theme.isDark && "invert"}`} alt="" />
        </Link>
        <Link href='https://web.telegram.org/z/' external>
          <img src='/images/home/telegram_logo 1.svg' className={`${theme.isDark && "invert"}`} alt="" />
        </Link>
        <Link href='https://www.facebook.com/' external>
          <img src='/images/home/facebook_logo 1.svg' className={`${theme.isDark && "invert"}`} alt="" />
        </Link>
        <Link href='https://www.instagram.com/' external>
          <img src='/images/home/instagram_logo 1.svg' className={`${theme.isDark && "invert"}`} alt="" />
        </Link>
        <Link href='https://discord.com/' external>
          <img src='/images/home/discord_logo 1.svg' className={`${theme.isDark && "invert"}`} alt="" />
        </Link>
        <Link href='https://github.com/' external>
          <img src='/images/home/github_logo 1.svg' className={`${theme.isDark && "invert"}`} alt="" />
        </Link>
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
  );
};

export default Footer;
