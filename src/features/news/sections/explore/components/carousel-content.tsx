"use client";
import {
  Carousel,
  CarouselContent as CarouselContentDots,
  CarouselDots,
  CarouselItem,
} from "@/components/custom/carousel/carousel-dots";
import NewCard from "@/features/news/components/card/new-card";
import { useGetListNewsQuery } from "@/stores/features/news";
import ExploreNewSkeleton from "./skeleton";

const CarouselContent = () => {
  const { data, isLoading } = useGetListNewsQuery({
    page: 1,
    limit: "all",
  });
  return (
    <Carousel
      opts={{
        dragFree: true,
        align: "start",
      }}
    >
      <CarouselContentDots>
        {isLoading ? (
          <CarouselContentSkeleton />
        ) : (
          data?.posts.map((news, index) => (
            <CarouselItem key={index} className="basis-4/5">
              <NewCard
                {...news}
                className="h-[400px]"
                classNameDescription="line-clamp-1"
              />
            </CarouselItem>
          ))
        )}
      </CarouselContentDots>
      <CarouselDots className="mt-8" />
    </Carousel>
  );
};

export default CarouselContent;

const CarouselContentSkeleton = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <CarouselItem key={index} className="basis-4/5">
      <ExploreNewSkeleton className="h-[400px]" />
    </CarouselItem>
  ));
};
