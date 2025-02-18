"use client";
import Heading from "@/components/common/typography/heading";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/custom/carousel/carousel-dots";
import CardNewHorizontal from "@/features/news/components/card/card-horizontal";
import NewCard from "@/features/news/components/card/new-card";
import { useGetListNewsQuery } from "@/stores/features/news";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RelatedPost = () => {
  const [locale, setLocale] = useState<string | null>(null);
  const { data } = useGetListNewsQuery({
    page: 1,
    limit: 3,
  });
  useEffect(() => {
    const locale = sessionStorage.getItem("locale");
    setLocale(locale);
  }, []);
  return (
    <div className="flex flex-col gap-6 pt-6">
      <Heading className="text-base md:text-lg font-bold">Related Post</Heading>
      <div className="hidden lg:block">
        <div className="flex flex-col gap-6">
          {data?.posts.map((item, index) => (
            <Link
              href={`/${locale ?? ""}/news/${item.slug}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[120px]"
              key={index}
            >
              <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src={item.feature_image ?? ""}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Heading className="text-base md:text-lg font-bold line-clamp-1">
                  {item.title}
                </Heading>
                <div className="flex flex-col gap-2">
                  <p className="text-sm md:text-[14px] text-[#6D6D6D]">
                    {format(item.created_at, "PPP")}
                  </p>
                  <p className="text-sm md:text-base text-[#6D6D6D] line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="block lg:hidden">
        <Carousel>
          <CarouselContent>
            {data?.posts.map((item, index) => (
              <CarouselItem key={index}>
                <CardNewHorizontal key={index} {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="mt-8" />
        </Carousel>
      </div>
    </div>
  );
};

export default RelatedPost;
