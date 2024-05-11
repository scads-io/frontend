import { Separator } from 'components/ui/separator'
import { useTranslation } from 'contexts/Localization'
import { EN, RU } from 'config/localization/languages'
import { Fragment } from 'react'

interface TokenomicsContentProps {
  id: string
  title: string
  paragraph: string
  paragraph_two?: string
  index: number
  list?: {
    list_one?: string
    list_two?: string
    list_three?: string
    list_four?: string
  }[]
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({ id, title, paragraph, paragraph_two, index, list }) => {
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
          {list.map((item, index) => (
            <Fragment key={index}>
              {item.list_one && <li>{t(item.list_one)}</li>}
              {currentLanguage === EN && (
                <>
                  {item.list_two && <li>{t(item.list_two)}</li>}
                  {item.list_three && <li>{t(item.list_three)}</li>}
                  {item.list_four && <li>{t(item.list_four)}</li>}
                </>
              )}
              {currentLanguage === RU && id !== 'minting-speed' && (
                <>
                  {item.list_two && <li>{t(item.list_two)}</li>}
                  {item.list_three && <li>{t(item.list_three)}</li>}
                  {item.list_four && <li>{t(item.list_four)}</li>}
                </>
              )}
            </Fragment>
          ))}
        </ul>
      )}
      {paragraph_two && <p className="max-w-[1031px]">{t(paragraph_two)}</p>}
      <Separator className="mt-12 bg-white/10" />
    </section>
  )
}

export default TokenomicsContent
