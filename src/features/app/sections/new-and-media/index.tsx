import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import NewCard from "./card";

const NewAndMediaSectionFeatures = ({
  primary,
}: Content.NewMediaSectionSlice) => {
  const data = [
    {
      image: "/images/new1.png",
      title:
        "Case Study: Realizing the power of Data Analytics in Minimizing Transportation...",
      description:
        "In the age of data, companies are bombarded with the influx of information and many wish to make the most out of it.",
    },
    {
      image: "/images/new2.png",
      title:
        "Case Study: Realizing the power of Data Analytics in Minimizing Transportation...",
      description:
        "In the age of data, companies are bombarded with the influx of information and many wish to make the most out of it.",
    },
    {
      image: "/images/new3.png",
      title:
        "Case Study: Realizing the power of Data Analytics in Minimizing Transportation...",
      description:
        "In the age of data, companies are bombarded with the influx of information and many wish to make the most out of it.",
    },
    {
      image: "/images/new3.png",
      title:
        "Case Study: Realizing the power of Data Analytics in Minimizing Transportation...",
      description:
        "In the age of data, companies are bombarded with the influx of information and many wish to make the most out of it.",
    },
    {
      image: "/images/new3.png",
      title:
        "Case Study: Realizing the power of Data Analytics in Minimizing Transportation...",
      description:
        "In the age of data, companies are bombarded with the influx of information and many wish to make the most out of it.",
    },
  ];

  const items = data.map((item, index) => (
    <CarouselItem
      key={index}
      data-aos="fade-up"
      className="basis-full md:basis-1/2 lg:basis-1/3"
    >
      <NewCard {...item} />
    </CarouselItem>
  ));

  const mobileItems = data.slice(0, 3).map((item, index) => (
    <div
      key={index}
      data-aos="fade-up"
      className="basis-full md:basis-1/2 lg:basis-1/3"
    >
      <NewCard {...item} />
    </div>
  ));

  return (
    <Bounded className="xl:h-[540px] w-full flex items-center justify-center py-12 md:py-20">
      <div className="hidden lg:block ">
        <Carousel className="w-full flex flex-col xl:flex-row xl:items-center gap-[120px]">
          <div className="flex flex-row xl:flex-col justify-between xl:justify-start gap-12  min-w-[280px]">
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
                  data-aos="fade-up"
                  components={{
                    paragraph: ({ children }) => (
                      <Paragraph size="sm" className="text-[#6D6D6D]">
                        {children}
                      </Paragraph>
                    ),
                  }}
                />
                <Button variant="link" data-aos="fade-up">
                  {primary.button_text}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up">
              <CarouselPrevious className="relative inset-auto text-[#00359E] border border-[#00359E] disabled:border-[#E6E6E6] disabled:text-[#B1B1B1] disabled:opacity-50 p-2" />
              <CarouselNext className="relative inset-auto text-[#00359E] border border-[#00359E] disabled:border-[#E6E6E6] disabled:text-[#B1B1B1] disabled:opacity-50 p-2" />
            </div>
          </div>
          <CarouselContent className="w-full">
            {items}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="block lg:hidden w-full">
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <PrismicRichText
                field={primary.name}
                components={{
                  heading5: ({ children }) => (
                    <Heading
                      size="sm"
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
                      className="font-semibold text-[28px] md:text-[40px]"
                    >
                      {children}
                    </Heading>
                  ),
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
              <PrismicRichText
                field={primary.description}
                components={{
                  paragraph: ({ children }) => (
                    <Paragraph size="sm" className="text-[#6D6D6D]">
                      {children}
                    </Paragraph>
                  ),
                }}
              />
              <Button variant="link">
                {primary.button_text}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">{mobileItems}</div>
        </div>
      </div>
    </Bounded>
  );
};

export default NewAndMediaSectionFeatures;
