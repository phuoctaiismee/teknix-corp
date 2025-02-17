import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import ScrollElement from "@/components/custom/scroll/scroll-element";
import TextAnimation from "@/components/custom/scroll/scroll-text";
import BlurText from "@/components/custom/text/text-blur";
import { Button } from "@/components/ui/button";
import { asText, Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import React from "react";
import BreadcrumbNews from "./breadcrumb";
const components: JSXMapSerializer = {
  heading1: ({ children }) => {
    return (
      <Heading className="font-bold text-white leading-[37px] md:leading-[57px] text-[32px] md:text-5xl">
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => (
    <Paragraph size="sm" className="text-white">
      {children}
    </Paragraph>
  ),
};
const HeroSectionFeatures = ({
  primary,
  variation,
}: Content.HeroSectionSlice) => {
  return (
    <div
      style={{
        backgroundImage: `url(${primary.background.url})`,
      }}
      className="h-[600px] md:h-[650px] bg-cover bg-no-repeat bg-center"
    >
      {variation === "default" && (
        <Bounded className="flex flex-col h-full justify-between py-12">
          <div />
          <div className="flex flex-col gap-2.5">
            <PrismicRichText
              field={primary.title}
              components={components}
              data-aos="fade-top"
            />

            <PrismicRichText
              data-aos="fade-bottom"
              field={primary.description}
              components={components}
            />
          </div>

          <div className="flex gap-2.5">
            <Button
              data-aos="fade-left"
              variant="secondary"
              className="rounded-full transition-all duration-300 text-sm md:text-lg font-semibold px-6 py-3"
            >
              {primary.primary_button_text}
            </Button>
            <Button
              data-aos="fade-right"
              variant="ghost"
              className="rounded-full transition-all duration-300 text-sm md:text-lg font-semibold px-6 py-3 border text-white border-white bg-black/[1%] backdrop-blur-[24px]"
            >
              {primary.secondary_button_text}
            </Button>
          </div>
        </Bounded>
      )}

      {variation === "heroNews" && (
        <Bounded className="flex items-center h-full">
          <div className="flex flex-col gap-2">
            <BreadcrumbNews />
            <PrismicRichText
              field={primary.title}
              components={components}
              data-aos="fade-top"
            />
          </div>
        </Bounded>
      )}
    </div>
  );
};

export default HeroSectionFeatures;
