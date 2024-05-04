import { Separator } from "@/components/ui/separator";

interface TokenomicsContentProps {
  id: string;
  title: string;
  paragraph: string;
  paragraph_two?: string;
  list?: {
    list_one?: string;
    list_two?: string;
    list_three?: string;
    list_four?: string;
  }[];
}

const TokenomicsContent: React.FC<TokenomicsContentProps> = ({
  id,
  title,
  paragraph,
  paragraph_two,
  list,
}) => {
  return (
    <section
      className="flex scroll-mt-64 flex-col gap-y-4 px-2 text-sm text-neutral-300 md:px-0 md:text-base"
      id={id}
    >
      <h2 className="w-fit text-2xl text-white">{title}</h2>
      <p className="max-w-[340px] lg:max-w-[900px] xl:max-w-[1031px]">
        {paragraph}
      </p>
      {list && (
        <ul className="flex max-w-[340px] list-disc flex-col gap-y-2 pl-4 lg:max-w-[900px] xl:max-w-[1031px]">
          {list.map((item, index) => (
            <li key={index}>
              {item.list_one && item.list_one}
              {item.list_two && item.list_two}
              {item.list_three && item.list_three}
              {item.list_four && item.list_four}
            </li>
          ))}
        </ul>
      )}
      {paragraph_two && <p className="max-w-[1031px]">{paragraph_two}</p>}
      <Separator className="mt-12 bg-white/10" />
    </section>
  );
};

export default TokenomicsContent;
