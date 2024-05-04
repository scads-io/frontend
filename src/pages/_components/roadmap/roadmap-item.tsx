import { Calendar } from "lucide-react";

interface RoadmapItemProps {
  date: string;
  l1: string;
  l2?: string;
  l3?: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ date, l1, l2, l3 }) => {
  return (
    <li className="relative z-20 mb-10 ms-8">
      <Calendar className="absolute -left-6 top-1/2 size-4 -translate-y-1/2 text-white/40" />
      <time className="mb-2 text-sm font-normal leading-none text-white">
        {date}
      </time>
      <ul className="text-base font-normal text-neutral-300 lg:max-w-xl">
        <li>{l1}</li>
        {l2 && <li>{l2}</li>}
        {l3 && <li>{l3}</li>}
      </ul>
    </li>
  );
};

export default RoadmapItem;
