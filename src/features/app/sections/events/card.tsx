import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  createdAt: string | Date;
}

const EventCard = ({
  image,
  title,
  description,
  createdAt,
}: EventCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:h-[145px] group">
      <div className="relative h-[202px] w-full md:h-full min-w-[200px]  rounded-[6px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-all duration-300" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <Heading
            size="sm"
            className="font-semibold text-[17px] md:text-lg line-clamp-1"
          >
            {title}
          </Heading>
          <Paragraph
            size="sm"
            className="text-[13px] md:text-[15px] font-semibold"
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
        <Button
          variant="link"
          className="text-[15px] md:text-base w-fit font-semibold"
        >
          Read More
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
