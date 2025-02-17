import Heading from "@/components/common/typography/heading";
import { format } from "date-fns";
import React from "react";

interface InfoNewDetailProps {
  title: string;
  date: string;
}

const InfoNewDetail = ({ title, date }: InfoNewDetailProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className="text-4xl leading-[48px] md:text-[40px] md:leading-[52px] font-bold">
        {title}
      </Heading>
      <p className="text-sm md:text-base font-medium">{format(date, "PPP")}</p>
    </div>
  );
};

export default InfoNewDetail;
