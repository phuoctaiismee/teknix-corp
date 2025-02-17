"use client";
import { MoreHorizontal } from "lucide-react";
import Bounded from "@/components/common/containers/bounded";
import Heading from "@/components/common/typography/heading";
import { HoverBorderGradient } from "@/components/custom/card/card-gradient";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/custom/carousel/carousel-dots";
import InputIcon from "@/components/custom/input/input-icon";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardNewHorizontal from "@/features/news/components/card/card-horizontal";
import { Pagination } from "@/features/news/components/pagination/pagination";
import { useNewsActions } from "@/hooks/queries/news";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { Search } from "lucide-react";
import React from "react";
import CardNewHorizontalSkeleton from "./skeleton";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useGetListNewsQuery } from "@/stores/features/news";
const happenData = [
  {
    name: "TeknixCorp",
    totalPosts: 12,
    description: "Featured keywords are being searched the most",
  },
  {
    name: "TeknixTalent",
    totalPosts: 42,
    description: "Featured keywords are being searched the most",
  },
  {
    name: "TeknixNews",
    totalPosts: 42,
    description: "Featured keywords are being searched the most",
  },
  {
    name: "TeknixNews",
    totalPosts: 42,
    description: "Featured keywords are being searched the most",
  },
  {
    name: "TeknixNews",
    totalPosts: 42,
    description: "Featured keywords are being searched the most",
  },
];
const MainContentPreviousNews = ({
  title,
  name,
}: Content.PreviousNewSliceDefaultPrimary) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    data,
    page,
    isLoading,
    isFetching,
    totalPages,
    handlePagination,
    handleNextPage,
    handlePrevPage,
  } = useNewsActions({ limit: 2 });
  const { data: allData, isLoading: isLoadingAllData } = useGetListNewsQuery({
    limit: "all",
  });
  return (
    <Bounded className="grid grid-cols-1 md:grid-cols-3 divide-x divide-[#E6E6E6]">
      <div className="col-span-2 md:pr-12">
        <div className="flex flex-col gap-8">
          {/* HEADING */}
          <div className="flex flex-col gap-2">
            <PrismicRichText
              field={name}
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
            <div className="flex items-center justify-between">
              <PrismicRichText
                field={title}
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
            </div>
          </div>
          {/* LIST NEWS */}
          <div className="hidden md:block">
            {isLoading || isFetching ? (
              <ListNewsSkeleton />
            ) : (
              <div className="flex flex-col gap-8">
                {data?.posts.map((item, index) => (
                  <CardNewHorizontal key={index} {...item} />
                ))}
              </div>
            )}
          </div>

          <div className="block md:hidden">
            <Carousel
              opts={{
                dragFree: true,
                align: "start",
              }}
            >
              <CarouselContent>
                {isLoadingAllData ? (
                  <ListNewsMobileSkeleton />
                ) : (
                  allData?.posts.map((item, index) => (
                    <CarouselItem key={index} className="basis-4/5">
                      <CardNewHorizontal className="h-[428px]" {...item} />
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <CarouselDots className="mt-8" />
            </Carousel>
          </div>
          {/* PAGINATION */}
          <div className="hidden md:block">
            <Pagination
              page={page}
              totalPages={totalPages}
              handlePagination={handlePagination}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block col-span-1 md:pl-12">
        <div className="flex flex-col w-full gap-8 max-h-[544px]">
          {/* SEARCH */}
          <HoverBorderGradient
            as="div"
            containerClassName="rounded-[8px] bg-[#B4B4B433] w-full"
          >
            <InputIcon
              placeholder="Search"
              className="bg-[#B4B4B433] border-none rounded-[8px] text-[13px] !w-full"
              prefix={<Search className="size-4 text-neutral-500" />}
            />
          </HoverBorderGradient>
          {/* TITLE */}
          <div className="pb-3 border-b border-[#E6E6E6] text-[#6D6D6D] text-[14px]">
            What&apos;s happening
          </div>
          {/* LIST HAPPENING */}
          <ScrollArea className="h-[350px]">
            <div className="flex flex-col divide-y divide-[#E6E6E6] ">
              {happenData.map((item, index) => (
                <div
                  className="py-3 flex flex-col gap-1 select-none"
                  key={index}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">#{item.name}</div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </div>
                  <div className="text-base text-[#6D6D6D]">
                    {item.totalPosts} posts
                  </div>
                  <div className="text-base text-[#6D6D6D]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Bounded>
  );
};

export default MainContentPreviousNews;

const ListNewsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <CardNewHorizontalSkeleton />
      <CardNewHorizontalSkeleton />
    </div>
  );
};

const ListNewsMobileSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <CarouselItem key={index} className="basis-4/5">
      <CardNewHorizontalSkeleton />
    </CarouselItem>
  ));
};
