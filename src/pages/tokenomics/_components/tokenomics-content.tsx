import React, { Fragment } from 'react'
import { useTranslation } from 'contexts/Localization'
import { EN, RU } from 'config/localization/languages'
import { Separator } from 'components/ui/separator'

interface TokenomicsContentProps {
  id: string
  title: string
  paragraph: string
  paragraphTwo?: string
  index: number
  list?: {
    listOne?: string
    listTwo?: string
    listThree?: string
    listFour?: string
  }[]
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({ id, title, paragraph, paragraphTwo, index, list }) => {
  const { t, currentLanguage } = useTranslation()

  return (
    <section
      className="flex scroll-mt-64 flex-col gap-y-4 px-2 text-sm text-[#B4BCD0] md:px-0 md:text-base max-w-[91%] mx-auto md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1031px]"
      id={id}
    >
      <div className="flex items-center gap-x-2">
        <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-xl font-semibold">
          {index}
        </span>
        <h2 className="w-fit text-2xl text-white">{title}</h2>
      </div>
      <p>{t(paragraph)}</p>
      {list && (
        <ul className="flex max-w-[340px] list-disc flex-col gap-y-2 pl-4 md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1031px]">
          {list.map((item) => (
            <Fragment key={item.listOne}>
              {item.listOne && <li>{t(item.listOne)}</li>}
              {currentLanguage === EN && (
                <>
                  {item.listTwo && <li>{t(item.listTwo)}</li>}
                  {item.listThree && <li>{t(item.listThree)}</li>}
                  {item.listFour && <li>{t(item.listFour)}</li>}
                </>
              )}
              {currentLanguage === RU && id !== 'minting-speed' && (
                <>
                  {item.listTwo && <li>{t(item.listTwo)}</li>}
                  {item.listThree && <li>{t(item.listThree)}</li>}
                  {item.listFour && <li>{t(item.listFour)}</li>}
                </>
              )}
            </Fragment>
          ))}
        </ul>
      )}
      {paragraphTwo && <p className="max-w-[1031px]">{t(paragraphTwo)}</p>}
      <Separator className="mt-12 bg-white/10" />
    </section>
  )
}

export default TokenomicsContent
