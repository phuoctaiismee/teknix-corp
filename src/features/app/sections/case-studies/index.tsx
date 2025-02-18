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
import CarouselAccordion from "./carousel-accodion";
const CaseStudiesSectionFeatures = ({
  primary,
  id,
  slice_type,
  slice_label,
  items,
  variation,
  version,
}: Content.CaseStudiesSectionSlice) => {
  return (
    <div
      style={{ backgroundImage: `url(${primary.background.url})` }}
      className="bg-cover bg-center bg-no-repeat lg:h-[1150px] w-full flex items-center justify-center py-12 md:py-20"
    >
      <CarouselAccordion
        primary={primary}
        slice_type={slice_type}
        slice_label={slice_label}
        id={id}
        variation={variation}
        version={version}
        items={items}
      />
    </div>
  );
};

export default CaseStudiesSectionFeatures;
