import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import CardService from "./card";
import { PrismicNextImage } from "@prismicio/next";
import ImageService from "./image";

const ServiceSectionFeatures = ({ primary }: Content.ServiceSectionSlice) => {
  return (
    <div
      style={{
        backgroundImage: `url(${primary.background.url})`,
      }}
      className="lg:h-[956px] bg-cover bg-no-repeat bg-center flex items-center py-12 md:py-20 overflow-hidden"
    >
      <Bounded className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
        <div className="flex flex-col justify-between gap-10 h-full">
          <div className="flex flex-col gap-4">
            <PrismicRichText
              field={primary.name}
              components={{
                heading5: ({ children }) => (
                  <Heading
                    size="sm"
                    className="text-sm md:text-base text-white"
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
                  <Heading size="sm" className="text-white">
                    {children}
                  </Heading>
                ),
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-8">
            <div className="grid grid-cols-1 gap-8">
              {primary.services.slice(0, 2).map((item, index) => (
                <CardService key={index} {...item} />
              ))}
            </div>
            {primary.services.slice(2, 3).map((item, index) => (
              <CardService key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex justify-end h-full">
          <ImageService field={primary.image} />
        </div>
      </Bounded>
    </div>
  );
};

export default ServiceSectionFeatures;
