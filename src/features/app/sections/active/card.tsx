import Heading from "@/components/common/typography/heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ActiveCardProps {
  title: string;
  description: string;
  image: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}
const ActiveCard = ({
  title,
  description,
  image,
  orientation = "vertical",
  className,
}: ActiveCardProps) => {
  return (
    <div
      data-aos="fade-up"
      className={cn(
        "md:h-[542px] w-full rounded-[8px] bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden",
        {
          "md:h-[364px] md:grid md:grid-cols-2": orientation === "horizontal",
        },
        className
      )}
    >
      <div
        className={cn("h-[250px] md:h-[296px] relative overflow-hidden", {
          "md:h-full": orientation === "horizontal",
        })}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div
        className={cn(
          "md:h-[246px] px-4 md:px-12 py-4 md:py-8 flex flex-col gap-6",
          {
            "md:h-full md:justify-between": orientation === "horizontal",
          }
        )}
      >
        <div className="flex flex-col gap-4">
          <Heading
            size="sm"
            className="font-semibold text-[17px] md:text-[28px]"
          >
            {title}
          </Heading>
          <div className="bg-[#EAECF0] h-[1px] w-full" />
          <p className="text-sm md:text-base text-[#6D6D6D]">{description}</p>
          <div className="bg-[#EAECF0] h-[1px] w-full" />
        </div>
        <Button
          variant="ghost"
          className="text-base md:text-lg w-fit px-0 hover:bg-transparent font-medium text-[#00359E]"
        >
          View Details <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ActiveCard;
