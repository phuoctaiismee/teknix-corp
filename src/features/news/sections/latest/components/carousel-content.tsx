"use client";
import CardWithCategory from "@/features/news/components/card/card-with-category";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/custom/carousel/carousel-dots";
import { useGetListNewsQuery } from "@/stores/features/news/news-api";
const CarouselContentLatestNew = () => {
  const { data: latestNews } = useGetListNewsQuery({
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
      <CarouselContent>
        {latestNews?.posts.map((item, index) => (
          <CarouselItem key={index} className="basis-4/5">
            <CardWithCategory {...item} classNameImage="h-[300px]" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots className="mt-8" />
    </Carousel>
  );
};

export default CarouselContentLatestNew;
