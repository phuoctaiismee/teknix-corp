"use client";
import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/custom/carousel/carousel-dots";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const CarouselAccordion = ({ primary }: Content.CaseStudiesSectionSlice) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Bounded className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <PrismicRichText
          field={primary.name}
          components={{
            heading5: ({ children }) => (
              <Heading
                size="sm"
                className="text-[15px] md:text-base font-normal text-white"
                // data-aos="fade-down"
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
                className="font-semibold text-[28px] md:text-[40px] text-white"
                // data-aos="fade-down"
              >
                {children}
              </Heading>
            ),
          }}
        />
      </div>

      <div
        className="flex flex-col md:flex-row md:h-[842px] gap-12 relative overflow-hidden"
        data-aos="fade-right"
      >
        {/* Carousel */}
        <div className="w-full h-full">
          <Carousel
            activeSlide={selectedIndex}
            setActiveSlide={(slide) => {
              setSelectedIndex(slide);
            }}
            opts={{
              align: "start",
              loop: true,
            }}
            orientation={isMobile ? "horizontal" : "vertical"}
            className="w-full h-full"
          >
            <CarouselContent className="h-full mt-0 md:h-[842px]">
              {primary.casestudies.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "basis-full p-0 ",
                    isMobile ? "pl-4" : "basis-full p-0 pb-4"
                  )}
                >
                  <div className="w-full h-full md:h-[842px] overflow-hidden rounded-[8px]">
                    <PrismicNextImage
                      field={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots
              orientation={isMobile ? "horizontal" : "vertical"}
              className={cn(
                isMobile
                  ? "absolute z-10 bottom-2 inset-x-0  gap-0.5"
                  : "absolute z-10 right-2 top-1/2 -translate-y-1/2"
              )}
              dotClassName="bg-white hover:bg-white"
              dotActiveClassName="bg-white hover:bg-white"
            />
          </Carousel>
        </div>

        {/* Accordion */}
        <div
          className="flex flex-col w-full md:min-w-[500px] max-w-[500px] gap-10 h-full"
          data-aos="fade-left"
        >
          <Accordion
            value={selectedIndex.toString() + "-case"}
            onValueChange={(value) => {
              if (value !== "") {
                setSelectedIndex(parseInt(value));
              }
            }}
            type="single"
            collapsible
            className="h-full flex flex-col justify-between"
          >
            {primary.casestudies.map((item, index) => (
              <AccordionItem
                key={index}
                className="border-none data-[state=open]:border-b"
                value={index + "-case"}
                onClick={() => {
                //   console.log("🚀 ~ CarouselAccordion ~ index:", index);
                  setSelectedIndex(index);
                }} // Đồng bộ với Carousel
              >
                <AccordionTrigger className="hover:no-underline &[svg]:hidden">
                  <div className="flex items-center gap-8">
                    <p className="text-[#B1B1B1] text-xl font-normal">
                      0{index + 1}.
                    </p>
                    <PrismicRichText
                      field={item.name}
                      components={{
                        heading3: ({ children }) => (
                          <Heading
                            size="sm"
                            className="text-[#B1B1B1] text-base text-start md:text-xl font-semibold"
                          >
                            {children}
                          </Heading>
                        ),
                      }}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#B1B1B1] text-sm md:text-base text-start font-normal pl-14">
                  <PrismicRichText field={item.description} />
                  <Button variant="link" className="font-semibold">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Bounded>
  );
};

export default CarouselAccordion;
