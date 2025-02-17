import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import Image from "next/image";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainCardProps {
  image: string;
  title: string;
  description: string;
  createdAt: string | Date;
}

const MainCard = ({ image, title, description, createdAt }: MainCardProps) => {
  return (
    <div className="h-[500px] w-full flex flex-col gap-4 group">
      <div className="relative h-[340px] w-full rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-all duration-300" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <Heading size="sm" className="font-semibold text-xl md:text-[24px]">
            {title}
          </Heading>
          <Paragraph
            size="sm"
            className="text-sm md:text-[15px] text-[#6D6D6D]"
          >
            {format(createdAt, "PPP")}
          </Paragraph>
        </div>
        <Paragraph
          size="sm"
          className="text-sm md:text-base text-[#6D6D6D] line-clamp-2"
        >
          {description}
        </Paragraph>
        <Button size="lg" variant="link" className="w-fit">
          Read More
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default MainCard;
