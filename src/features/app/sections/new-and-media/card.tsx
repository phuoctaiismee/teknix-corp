import Paragraph from "@/components/common/typography/paragraph";
import Heading from "@/components/common/typography/heading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface NewCardProps {
  image: string;
  title: string;
  description: string;
}

const NewCard = ({ image, title, description }: NewCardProps) => {
  return (
    <div className="h-[380px] w-full  flex flex-col gap-5 group">
      <div className="relative h-[202px] rounded-[12px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-col gap-3">
          <Heading size="sm" className="text-[17px] md:text-lg line-clamp-2">
            {title}
          </Heading>
          <Paragraph
            size="sm"
            className="text-sm md:text-base text-[#6D6D6D] line-clamp-2"
          >
            {description}
          </Paragraph>
        </div>
        <Button
          variant="link"
          className="text-[15px] font-semibold md:text-base w-fit px-0"
        >
          Learn More
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default NewCard;
