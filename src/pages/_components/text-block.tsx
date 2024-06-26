import React from 'react'
import SectionHeader from 'components/ui/section-header'
import { useTranslation } from 'contexts/Localization'
import { Separator } from 'components/ui/separator'
import { AiOutlineProject, AiOutlineSafety } from 'react-icons/ai'
import { MdAutorenew, MdOutlineSecurity } from 'react-icons/md'
import { GiStrongbox } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const TextBlock = () => {
  const { t } = useTranslation()

  return (
    <section className="relative flex flex-col items-center px-4 mt-32 text-white gap-y-4 md:px-0">
      <SectionHeader title="Introducing Scads" y={-50} />
      <div className="max-w-[91%] text-[#B4BCD0] md:max-w-[720px] lg:max-w-[1024px] text-center md:text-start">
        <p className="z-10">
          <span className="text-white">
            {t('The evolution of Decentralized Finance (DeFi) from a nascent niche market to a formidable player')}
          </span>{' '}
          {t(
            'in the financial industry has been remarkable over the past few years. While it was valued at around $170 billion USD as of May 2024, the estimate can only continue thanks to the increasing adoption and interest from investors. Still, all this growth was not without issues as the followed major challenges:',
          )}
        </p>
        <Separator className="my-12 bg-white/10" />
        <ul className="flex flex-col justify-between gap-y-8 md:flex-row">
          <li className="max-w-[480px]">
            <span className="inline-flex items-center text-white gap-x-1">
              <AiOutlineProject />
              {t('Product integrity:')}
            </span>{' '}
            {t(
              'A notable aspect within the DeFi space involves certain projects operating unsustainably, offering returns without adequate security, or failing to fulfill their promised outcomes.',
            )}
          </li>
          <li className="max-w-[480px]">
            <span className="inline-flex items-center text-white gap-x-1">
              <MdOutlineSecurity />
              {t('Platform security:')}
            </span>{' '}
            {t(
              'Technical issues represented another challenge due to the significant number of breaches happening that at times turned into financial loses.',
            )}
          </li>
        </ul>
        <Separator className="my-12 bg-white/10" />
        <p>
          {t(
            'SCADS, an innovative stablecoin built on the Proof of Holding algorithm, has the potential to significantly impact the digital currency landscape.',
          )}
        </p>
        <Separator className="my-12 bg-white/10" />
        <div className="relative w-full px-4 py-8 mt-6 size-fit rounded-xl bg-gradient-to-b from-white/15 to-dark-blue">
          <ul className="flex flex-col justify-between w-full gap-y-6 md:flex-row">
            <div className="space-y-6">
              <li className="max-w-[480px]">
                <span className="inline-flex items-center text-white gap-x-1">
                  <RxCross1 />
                  {t('Non-pegged:')}
                </span>{' '}
                {t(
                  'Unlike traditional stablecoins, SCADS is not pegged to fiat currencies (dollar, euro, etc.), it uses USDT only as a point of reference. This makes it more resistant to inflation and economic shocks.',
                )}
              </li>
              <li className="max-w-[480px]">
                <span className="inline-flex items-center text-white gap-x-1">
                  <MdAutorenew />
                  {t('Autonomous:')}
                </span>{' '}
                {t(
                  'SCADS operates without owners, managed solely by an algorithm. This eliminates the possibility of manipulation and fraud.',
                )}
              </li>
            </div>
            <div className="space-y-[52px]">
              <li className="max-w-[480px]">
                <span className="inline-flex items-center text-white gap-x-1">
                  <AiOutlineSafety />
                  {t('Risk-free:')}
                </span>{' '}
                {t(
                  'SCADS offers passive income without staking or participating in liquidity pools. This guarantees no risks or losses.',
                )}
              </li>
              <li className="max-w-[480px]">
                <span className="inline-flex items-center text-white gap-x-1">
                  <GiStrongbox />
                  {t('Reliable:')}
                </span>{' '}
                {t('User funds are stored in their own wallets, which ensures maximum security.')}
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="absolute top-1/2 h-32 w-full bg-violet-900 blur-[300px]" />
    </section>
  )
}

export default TextBlock
