"use client";
import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import IndustryCard from "./card";
import Background from "./background";
import { useMediaQuery } from "@/hooks/use-media-query";

const IndustrySectionFeatures = ({ primary }: Content.IndustrySectionSlice) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="relative lg:h-[690px] overflow-hidden bg-[#F9FAFB] flex items-center justify-center py-12 md:py-20">
      <Background />
      <Bounded className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-full items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <PrismicRichText
              field={primary.name}
              components={{
                heading5: ({ children }) => (
                  <Heading
                    size="sm"
                    data-aos="fade-down"
                    className="text-[15px] md:text-base text-[#464646]"
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
              className="text-sm md:text-lg"
              data-aos="fade-up"
            >
              {primary.button_text}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {primary.industrys
              .slice(0, isMobile ? 4 : primary.industrys.length)
              .map((industry, index) => (
                <IndustryCard
                 
                  key={index}
                  {...industry}
                />
              ))}
            <div className="block md:hidden">
              <Button
                variant="ghost"
                className="border border-neutral-900 text-neutral-900 rounded-full w-full text-sm md:text-lg"
              >
                Load more
              </Button>
            </div>
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default IndustrySectionFeatures;
