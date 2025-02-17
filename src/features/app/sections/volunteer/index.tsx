import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

const VolunteerSectionFeatures = ({
  primary,
}: Content.VolunteerSectionSlice) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="py-12 md:py-[120px] px-4 md:pl-12 lg:pl-20 2xl:pl-32 flex flex-col justify-between gap-6 md:gap-16">
        <div className="flex flex-col gap-2">
          <PrismicRichText
            field={primary.name}
            components={{
              heading5: ({ children }) => (
                <Heading
                  size="sm"
                  data-aos="fade-down"
                  className="text-[15px] md:text-base font-normal"
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
                  data-aos="fade-down"
                  className="font-semibold text-[28px] md:text-[40px]"
                >
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
        <div className="flex flex-col gap-9 max-w-xl">
          {primary.actives.map((active, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 group"
              data-aos="fade-up"
            >
              <PrismicRichText
                field={active.name}
                components={{
                  heading3: ({ children }) => (
                    <Heading
                      size="sm"
                      
                      className="text-xl md:text-2xl border-b border-[#D0D5DD] group-hover:text-[#00359E] group-hover:border-[#00359E]"
                    >
                      {children}
                    </Heading>
                  ),
                }}
              />
              <PrismicRichText
                field={active.content}
                components={{
                  list: ({ children }) => (
                    <Paragraph className="text-base md:text-lg">
                      {children}
                    </Paragraph>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${primary.image.url})` }}
        className="min-h-[257.25px]  h-full  bg-cover bg-no-repeat md:bg-cover md:bg-center py-[100px] md:py-0 order-first md:order-last"
      />
    </div>
  );
};

export default VolunteerSectionFeatures;
