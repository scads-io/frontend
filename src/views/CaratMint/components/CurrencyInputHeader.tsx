import React from 'react'
import { useTranslation } from 'contexts/Localization'

interface Props {
  title: string
  subtitle: string
  theme: boolean
}

const CurrencyInputHeader: React.FC<Props> = ({ title, subtitle, theme }) => {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1 className="text-lg text-center">{title}</h1>
      <p className="text-sm text-center mt-3 max-w-[152px] lg:max-w-[182px]">
        {subtitle}
      </p>
      <div
        className={`flex gap-2 mt-8 lg:mt-4 xl:mt-8 ${
          theme ? "text-white" : "text-black"
        } `}
      >
        <div className="flex flex-col items-center gap-1">
          <ul className="list-disc">
            <li>{t('GAS')}</li>
            <li>{t('SLIPPAGE')}</li>
            <li>{t('TAX')}</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span>0.05%</span>
          <span>3%</span>
          <span>3%</span>
        </div>
        {theme ? <img src='/images/tokens/twine_symbol_lighttheme.webp' className="ms-14" width={40} height={65} alt="TWINE" /> :
          <img src='/images/tokens/twine_symbol_darktheme.webp' className="ms-14" width={40} height={65} alt="TWINE" />}
      </div>
    </div>
  )
}

export default CurrencyInputHeader
