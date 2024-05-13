import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { accordionItems } from 'constants/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'components/ui/accordion'

interface AccordionItem {
  trigger: string
  content: string
  list?: {
    listOne?: string
    listTwo?: string
    listThree?: string
    listFour?: string
    listFive?: string
  }[]
  paragpraph?: string
  value: string
}

const accordionItemsData: AccordionItem[] = accordionItems

const FaqAccordion = ({ searchValue }: { searchValue: string }) => {
  const filteredItems = accordionItemsData.filter((item) =>
    item.trigger.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const { t } = useTranslation()

  return (
    <Accordion type="single" collapsible className="w-full">
      {filteredItems.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger className="text-start text-sm text-white md:text-base">{t(item.trigger)}</AccordionTrigger>
          <AccordionContent className="text-[#B4BCD0]">
            <p>{t(item.content)}</p>
            {item.list && (
              <ul>
                {item.list.map((filteredItem) => (
                  <li key={filteredItem.listOne}>
                    {filteredItem.listOne && t(filteredItem.listOne)}
                    {filteredItem.listTwo && t(filteredItem.listTwo)}
                    {filteredItem.listThree && t(filteredItem.listThree)}
                    {filteredItem.listFour && t(filteredItem.listFour)}
                    {filteredItem.listFive && t(filteredItem.listFive)}
                  </li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
