import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionItems } from "@/constants/content";

interface AccordionItem {
  trigger: string;
  content: string;
  list?: {
    list_one?: string;
    list_two?: string;
    list_three?: string;
    list_four?: string;
    list_five?: string;
  }[];
  paragpraph?: string;
  value: string;
}

const accordionItemsData: AccordionItem[] = accordionItems;

const FaqAccordion = ({ searchValue }: { searchValue: string }) => {
  const filteredItems = accordionItemsData.filter((item) =>
    item.trigger.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      {filteredItems.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger className="text-start text-sm text-white md:text-base">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-neutral-300">
            <p>{item.content}</p>
            {item.list && (
              <ul>
                {item.list.map((item, index) => (
                  <li key={index}>
                    {item.list_one && item.list_one}
                    {item.list_two && item.list_two}
                    {item.list_three && item.list_three}
                    {item.list_four && item.list_four}
                    {item.list_five && item.list_five}
                  </li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
