"use client";
import NewCard from "@/features/news/components/card/new-card";
import { useGetListNewsQuery } from "@/stores/features/news";
import React, { useMemo } from "react";
import ExploreNewSkeleton from "./skeleton";

const GridContent = () => {
  const { data: news, isLoading } = useGetListNewsQuery({
    page: 1,
    limit: 6,
  });
  const mainNews = useMemo(() => news?.posts?.[0], [news]);
  const secondaryNews = useMemo(() => news?.posts?.slice(1, 3), [news?.posts]);
  const otherNews = useMemo(() => news?.posts?.slice(3, 5), [news?.posts]);
  if (isLoading) return <GridSkeleton />;
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-3">
        <div className="flex flex-col gap gap-8">
          {mainNews && <NewCard {...mainNews} className="h-[450px]" />}
          <div className="grid grid-cols-2 gap-8">
            {secondaryNews?.map((news, index) => (
              <NewCard
                key={index}
                {...news}
                className="h-[300px]"
                classNameDescription="line-clamp-1"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 h-full">
        <div className="max-w-[512px] h-full">
          <div className="grid grid-cols-1 gap-8">
            {otherNews?.map((news, index) => (
              <NewCard
                key={index}
                {...news}
                className="h-[375px]"
                classNameDescription="line-clamp-1"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContent;

const GridSkeleton = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-3">
        <div className="flex flex-col gap gap-8">
          <ExploreNewSkeleton className="h-[450px]" />
          <div className="grid grid-cols-2 gap-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <ExploreNewSkeleton key={index} className="h-[300px]" />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 h-full">
        <div className="max-w-[512px] h-full">
          <div className="grid grid-cols-1 gap-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <ExploreNewSkeleton key={index} className="h-[375px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
