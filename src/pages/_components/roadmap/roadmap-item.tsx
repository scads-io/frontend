import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Calendar } from 'lucide-react'

interface RoadmapItemProps {
  date: string
  l1: string
  l2?: string
  l3?: string
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ date, l1, l2, l3 }) => {
  const { t } = useTranslation()

  return (
    <li className="relative z-20 mb-10 ms-8">
      <Calendar className="absolute -translate-y-1/2 -left-6 top-1/2 size-4 text-white/40" />
      <time className="mb-2 text-sm font-normal leading-none text-white">{t(date)}</time>
      <ul className="text-base font-normal text-[#B4BCD0] lg:max-w-xl">
        <li>{t(l1)}</li>
        {l2 && <li>{t(l2)}</li>}
        {l3 && <li>{t(l3)}</li>}
      </ul>
    </li>
  )
}

export default RoadmapItem
