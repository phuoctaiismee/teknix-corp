import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import CardVision from "./card";

const VisionForFutureSection = ({
  primary,
}: Content.VisionFutureSectionSlice) => {
  return (
    <div
      style={{ backgroundImage: `url(${primary.background.url})` }}
      className="md:h-[908px] bg-cover bg-center py-12 md:py-[100px]"
    >
      <Bounded className="h-full flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-2">
          <PrismicRichText
            field={primary.name}
            components={{
              heading5: ({ children }) => (
                <Heading
                  size="sm"
                  data-aos="fade-up"
                  className="text-[15px] md:text-base font-normal text-white"
                >
                  {children}
                </Heading>
              ),
            }}
          />
          <PrismicRichText
            field={primary.title}
            components={{
              heading2: ({ children }) => (
                <Heading
                  size="sm"
                  data-aos="fade-up"
                  className="font-semibold text-[28px] md:text-[40px] text-white"
                >
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primary.contents.map((item, index) => (
            <CardVision key={index} {...item} />
          ))}
        </div>
      </Bounded>
    </div>
  );
};

export default VisionForFutureSection;
