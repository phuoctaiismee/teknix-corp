import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import MainCard from "./main-card";
import { title } from "process";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import * as CarouselCustom from "@/components/custom/carousel/carousel-dots";

import EventCard from "./card";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSectionFeatures = ({ primary }: Content.EventSectionSlice) => {
  const data = [
    {
      image: "/images/event1.png",
      title: "Gala night - Teknix Awards 2024",
      description:
        "In the age of data, companies are bombarded with the influx of information and many wish to make the most out of it. Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
      createdAt: new Date("2024-01-01"),
    },
    {
      image: "/images/event2.png",
      title: "Teknix workshop GD university",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
      createdAt: new Date("2024-01-01"),
    },
    {
      image: "/images/event3.png",
      title: "Teknix workshop GD university",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
      createdAt: new Date("2024-01-01"),
    },
    {
      image: "/images/event4.png",
      title: "Teknix workshop GD university",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus et sagittis scelerisque netus. Aliquet quam enim pretium tempor. In vestibulum aliquam dapibus facilisis morbi dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue. dignissim amet fusce. Facilisi amet libero sapien sed lacinia non amet augue.",
      createdAt: new Date("2024-01-01"),
    },
  ];
  const items = data.slice(0, 4).map((item, index) => (
    <CarouselItem key={index} className="basis-full md:basis-1/3">
      <EventCard {...item} />
    </CarouselItem>
  ));
  const itemsMobile = data.slice(0, 4).map((item, index) => (
    <CarouselCustom.CarouselItem
      key={index}
      className="basis-full md:basis-1/3"
    >
      <EventCard {...item} />
    </CarouselCustom.CarouselItem>
  ));
  return (
    <div className="py-12 md:py-16 flex items-center justify-center bg-[#F2F4F7]">
      <Bounded className="flex flex-col gap-9">
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
        <div className="hidden md:block">
          <div className="flex w-full items-center gap-6 h-[500px]">
            <MainCard {...data[0]} />
            <div className="max-w-[470px] h-full relative">
              <Carousel
                opts={{
                  align: "start",
                }}
                orientation="vertical"
              >
                <CarouselContent className="h-[500px]">{items}</CarouselContent>
                <CarouselNext className="absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 size-[60px] bg-gradient-to-br from-slate-200/20 via-slate-300/50 to-slate-500/80 backdrop-blur [&_svg]:size-5" />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-5">
          <CarouselCustom.Carousel
            opts={{
              align: "start",
            }}
            className="flex flex-col gap-5"
          >
            <CarouselCustom.CarouselContent>
              {itemsMobile}
            </CarouselCustom.CarouselContent>
            <CarouselCustom.CarouselDots />
          </CarouselCustom.Carousel>
          <Button
            variant="ghost"
            className="w-full rounded-full border border-[#000000] text-[#000000] font-semibold"
          >
            View All
          </Button>
        </div>
      </Bounded>
    </div>
  );
};

export default EventsSectionFeatures;
