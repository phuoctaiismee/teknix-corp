import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import ActiveCard from "./card";
import { cn } from "@/lib/utils";
const data = [
  {
    title: "Work-Life Balance",
    description:
      "Flexible work options, health programs, and employee recognition efforts to support balance, well-being, and motivation.",
    image: "/images/active3.jpg",
  },
  {
    title: "Employee Stories",
    description:
      "Employee testimonials highlighting their career growth, achievements, and success stories at Teknix.",
    image: "/images/active2.png",
  },
  {
    title: "Our People",
    description:
      "A culture of innovation and diversity where employees can grow, contribute ideas, and thrive. We foster creativity, respect differences, and build a strong, adaptable team. Diversity drives our continuous innovation and success.",
    image: "/images/active.jpg",
  },
];
const ActiveSectionFeatures = ({ primary }: Content.ActiveSectionSlice) => {
  return (
    <div className="bg-[#F2F4F7] py-12 md:py-20">
      <Bounded className="flex flex-col gap-9">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map((item, index) => {
            return (
              <ActiveCard
                key={index}
                {...item}
                className={cn({
                  "md:col-span-2": index >= 2,
                })}
                orientation={index < 2 ? "vertical" : "horizontal"}
              />
            );
          })}
        </div>
      </Bounded>
    </div>
  );
};

export default ActiveSectionFeatures;
