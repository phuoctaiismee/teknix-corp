import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

const CardVision = ({
  content_hovered,
  image,
  name,
  title_hovered,
}: Content.VisionFutureSectionSliceDefaultPrimaryContentsItem) => {
  return (
    <div
      data-aos="fade-up"
      className="h-[457px] md:h-[576px] rounded-[12px] overflow-hidden flex-1 group"
    >
      <div className="relative h-[402px] md:h-[505px]">
        <PrismicNextImage
          field={image}
          className="w-full h-full object-cover"
        />
        <div
          style={{
            backgroundImage: `url(./vector.svg)`,
          }}
          className="bg-center opacity-0 group-hover:opacity-100 hover:bg-black/30 transition-all duration-300 z-10 absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <div className="flex flex-col gap-4 px-6">
            <PrismicRichText
              field={title_hovered}
              components={{
                heading5: ({ children }) => (
                  <Heading as="h5" className="text-lg md:text-xl text-white group-hover:animate-fade-down">
                    {children}
                  </Heading>
                ),
              }}
            />
            {content_hovered && (
              <PrismicRichText
                field={content_hovered}
                components={{
                  list: ({ children }) => (
                    <Paragraph
                      as="ul"
                      className="text-base md:text-lg text-white/80 list-disc list-inside group-hover:animate-fade-up"
                    >
                      {children}
                    </Paragraph>
                  ),
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="h-[55px] md:h-[71px] flex items-center text-base md:text-lg font-semibold pl-6 bg-gradient-to-r from-[#155EEF] to-[#00359E] text-white">
        {name}
      </div>
    </div>
  );
};

export default CardVision;
