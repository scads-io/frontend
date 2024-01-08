import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'contexts/Localization'
import Card from "components/NewCard"
import { howToItemsData } from "../../data"

const HowToItem = ({ step, value }) => {
  const { id, header, text, img, imgTwo, link, textSm } = step
  const { theme } = value
  const { t } = useTranslation()

  const stepClassName = `${
    theme.isDark ? "text-[#B6B6B6]" : "text-black"
  } flex flex-col justify-center items-center py-4 px-8 max-w-[340px] lg:max-w-[300px] xl:max-w-[379px]
  ${id === "2" ? "md:mt-16 pb-10" : "mt-6"} 
  ${id === "5" && "md:mt-[80px] lg:max-w-[360px]"} 
  ${id === "8" && "md:mt-16"}
  ${id === "9" && "md:mt-[80px]"}
  `;

  return (
    <Card theme={theme.isDark} className={stepClassName}>
      <h2 className="font-bold text-xl">{t(header)}</h2>
      <p className="max-w-[351px] py-6">{t(text)}</p>
      {imgTwo && <img src={imgTwo} className="pb-6" alt={`Step ${id} - 2`} />}
      {img && <img src={img} alt={`Step ${id}`} />}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 font-semibold"
        >
          {t("Learn More")}
        </a>
      )}
      {textSm && (
        <ul>
          {textSm.split("\n").map((line) => {
            const uniqueKey = uuidv4();
            return (
              <li key={uniqueKey} className="text-xs">
                {line}
              </li>
            );
          })}
        </ul>
      )}
      {id === "5" && (
        <>
          <h2 className="font-bold text-xl mt-12">{t("Step 6")}</h2>
          <p className="max-w-[351px] py-6">{t(howToItemsData[9].text)}</p>
        </>
      )}
      {id === "10" && (
        <>
          <h2 className="font-bold text-xl">{t("Step 11")}</h2>
          <p className="max-w-[351px] py-6">{t(howToItemsData[10].text)}</p>
        </>
      )}
    </Card>
  );
};

export default HowToItem;
