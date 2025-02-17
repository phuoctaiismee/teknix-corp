import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading size="lg" className="text-neutral-400" data-aos="fade-down">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Paragraph size="sm" className="text-neutral-400" data-aos="fade-up">
      {children}
    </Paragraph>
  ),
};

const AboutSectionFeatures = ({ primary }: Content.AboutUsSectionSlice) => {
  return (
    <Bounded className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 md:py-[100px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <PrismicRichText
            field={primary.name}
            components={{
              heading5: ({ children }) => (
                <Heading
                  size="sm"
                  className="text-[15px] md:text-base text-[#464646]"
                  data-aos="fade-down"
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
                  className="font-semibold text-[28px] md:text-[40px]"
                  data-aos="fade-down"
                >
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
        <div className="flex flex-col items-start gap-6">
          <PrismicRichText
            field={primary.description}
            components={{
              paragraph: ({ children }) => (
                <Paragraph
                  size="sm"
                  className="text-[#6D6D6D]"
                  data-aos="fade-up"
                >
                  {children}
                </Paragraph>
              ),
            }}
          />
          <Button
            variant="link"
            className="text-[15px] font-semibold md:text-lg"
            data-aos="fade-up"
          >
            {primary.button_text}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-auto md:grid-cols-2 gap-6 md:gap-8">
        {primary.abouts.map((about, index) => (
          <div
            className="flex flex-col gap-2 py-5 transition-all duration-300 border-t-2 cursor-pointer group border-t-[#E6E6E6] hover:border-t-2 hover:border-t-[#00359E]"
            key={index}
            data-aos="fade-up"
          >
            <PrismicRichText
              field={about.title}
              components={{
                heading4: ({ children }) => (
                  <Heading
                    size="sm"
                    className="text-base md:text-lg"
                    data-aos="fade-up"
                  >
                    {children}
                  </Heading>
                ),
              }}
            />
            <PrismicRichText
              field={about.description}
              components={{
                paragraph: ({ children }) => (
                  <Paragraph
                    size="sm"
                    className="text-[#6D6D6D] group-hover:text-neutral-600 transition-all duration-300  line-clamp-2"
                  >
                    {children}
                  </Paragraph>
                ),
              }}
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default AboutSectionFeatures;
