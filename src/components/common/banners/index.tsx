"use client";
import React from "react";
import Bounded from "../containers/bounded";
import Paragraph from "../typography/paragraph";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { LocalesSelector } from "../locates";
import { useBanner } from "./banner-provider";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const LocateDynamic = dynamic(() =>
  import("@/components/common/locates").then((mod) => mod.LocalesSelector)
);
const BannerHeader = () => {
  const { isBannerVisible, hideBanner, initialLocale, language, settings } =
    useBanner();

  return (
    <div
      className={cn(
        "md:h-[56px] p-4 md:p-0  flex items-center animate-fade-down animate-duration-300 justify-center bg-[#222222]",
        !isBannerVisible && "h-0 opacity-0 hidden"
      )}
    >
      <Bounded className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-0 2xl:px-[8rem]">
        <div className="flex items-center justify-between w-full gap-4">
          <Paragraph className="text-white text-sm md:text-[14px] line-clamp-2">
            Select another country or region to see appropriate content based on
            your location!
          </Paragraph>
          <div className="block md:hidden ">
            <Button
              onClick={hideBanner}
              variant="ghost"
              size="icon"
              className="text-white rounded aspect-square"
            >
              <X className="size-6 aspect-square" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <LocateDynamic initialLocale={initialLocale} locale={language} />
          <Button variant="secondary" className="rounded-full">
            Continue
          </Button>
          <Button
            onClick={hideBanner}
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex text-white rounded"
          >
            <X className="size-6" />
          </Button>
        </div>
      </Bounded>
    </div>
  );
};

export default BannerHeader;
