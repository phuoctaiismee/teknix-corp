import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { ChevronRight } from "lucide-react";
import GridContentLatestNew from "./components/grid-content";
import CarouselContentLatestNew from "./components/carousel-content";

const LatestNewsSectionFeatures = ({ primary }: Content.LatestNewsSlice) => {
  return (
    <div className="bg-[#F2F4F7] py-12 lg:py-20 flex items-center justify-center">
      <Bounded className="flex flex-col w-full gap-14">
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
          <div className="flex flex-col md:flex-row  items-start md:items-center justify-between">
            <PrismicRichText
              field={primary.title}
              components={{
                heading2: ({ children }) => (
                  <Heading
                    size="sm"
                    className="font-bold text-[28px] md:text-[40px]"
                    data-aos="fade-down"
                  >
                    {children}
                  </Heading>
                ),
              }}
            />
            <Button variant="link">
              {primary.button_text}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-col gap-14">
            <GridContentLatestNew />
          </div>
        </div>
        <div className="block lg:hidden">
          <CarouselContentLatestNew />
        </div>
      </Bounded>
    </div>
  );
};

export default LatestNewsSectionFeatures;
