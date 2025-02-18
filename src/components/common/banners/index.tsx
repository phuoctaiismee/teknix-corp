"use client";
import React, { useEffect, useState } from "react";
import Bounded from "../containers/bounded";
import Paragraph from "../typography/paragraph";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient, getLocales } from "@/prismicio";
import { shortLocaleToLong } from "@/i18n/routing";
import { PrismicRichText } from "@prismicio/react";
import { LocalesSelector } from "../locates";
import { useBannerAction } from "./use-banner-action";
import { Skeleton } from "@/components/ui/skeleton";

const SiteBanner = ({ locale }: { locale: string }) => {
  const [settings, setSettings] = useState<any>(null);
  const [locales, setLocales] = useState<any[]>([]);

  const { isBannerVisible, hideBanner } = useBannerAction();
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const fetchedSettings = await client.getSingle("settings", {
        lang: shortLocaleToLong(locale),
      });
      setSettings(fetchedSettings);

      const fetchedLocales = await getLocales(fetchedSettings, createClient());
      setLocales(fetchedLocales);
    };

    fetchData();
  }, [locale]);

  if (!settings || locales.length === 0) return <SiteBannerLoading />;

  // Nếu banner không hiển thị, trả về null
  if (!isBannerVisible) return null;

  return (
    <div
      className={cn(
        "md:h-[56px] p-4 md:p-0  flex items-center animate-fade-down animate-duration-300 justify-center bg-[#222222]"
      )}
    >
      <Bounded className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-0 2xl:px-[8rem]">
        <div className="flex items-center justify-between w-full gap-4">
          <PrismicRichText
            field={settings.data.banner_title}
            components={{
              paragraph: ({ children }) => (
                <Paragraph className="text-white text-sm md:text-[14px] line-clamp-2">
                  {children}
                </Paragraph>
              ),
            }}
          />
          <div className="block md:hidden">
            <Button
              onClick={hideBanner} // Gọi hideBanner khi người dùng đóng banner
              variant="ghost"
              size="icon"
              className="text-white rounded aspect-square"
            >
              <X className="size-6 aspect-square" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <LocalesSelector locales={locales} />
          <Button variant="secondary" className="rounded-full">
            {settings.data.banner_text_button}
          </Button>
          <Button
            onClick={hideBanner} // Gọi hideBanner khi người dùng đóng banner
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

export default SiteBanner;

const SiteBannerLoading = () => {
  return (
    <div
      className={cn(
        "md:h-[56px] p-4 md:p-0 flex items-center animate-fade-down animate-duration-300 justify-center bg-[#222222]"
      )}
    >
      <Bounded className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-0 2xl:px-[8rem]">
        <div className="flex items-center justify-between w-full gap-4">
          {/* Skeleton cho banner title */}
          <Skeleton className="w-3/4 h-[20px] md:h-[14px] bg-gray-400 rounded-full" />

          <div className="block md:hidden">
            {/* Skeleton cho nút đóng */}
            <Skeleton className="w-6 h-6 rounded-full bg-gray-400 " />
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          {/* Skeleton cho LocalesSelector */}
          <Skeleton className="w-full min-w-[250px] md:w-[200px] lg:w-[250px]  h-10 bg-gray-400 rounded-[8px]" />

          {/* Skeleton cho banner text button */}
          <Skeleton className="w-20 h-10 bg-gray-400 rounded-full" />

          <Button
            onClick={() => {}}
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex text-white rounded"
          >
            <Skeleton className="w-6 h-6 rounded-full bg-gray-400" />
          </Button>
        </div>
      </Bounded>
    </div>
  );
};
