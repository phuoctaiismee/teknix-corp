"use client";
import React from "react";
import CardWithCategory from "@/features/news/components/card/card-with-category";
import { useGetListNewsQuery } from "@/stores/features/news";
import CardWithCategorySkeleton from "./skeleton";
const GridContentLatestNew = () => {
  const { data, isLoading } = useGetListNewsQuery({
    page: 1,
    limit: 6,
  });
  const mainNew1 = data?.posts[0];
  const secondaryNew1 = data?.posts.slice(1, 3);
  const mainNew2 = data?.posts[4];
  const secondaryNew2 = data?.posts.slice(3, 5);
  return (
    <React.Fragment>
      {isLoading ? (
        <GridContentLatestNewSkeleton />
      ) : (
        <React.Fragment>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainNew1 && (
              <CardWithCategory
                {...mainNew1}
                className="h-[464px]"
                classNameImage="max-h-[300px]"
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryNew1?.map((item, index) => (
                <CardWithCategory
                  key={index}
                  {...item}
                  className="h-[464px]"
                  classNameImage="max-h-[300px]"
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryNew2?.map((item, index) => (
                <CardWithCategory
                  key={index}
                  {...item}
                  className="h-[464px]"
                  classNameImage="max-h-[300px]"
                />
              ))}
            </div>
            {mainNew2 && (
              <CardWithCategory
                {...mainNew2}
                className="h-[464px]"
                classNameImage="max-h-[300px]"
              />
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default GridContentLatestNew;

const GridContentLatestNewSkeleton = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardWithCategorySkeleton
          className="h-[464px]"
          classNameImage="max-h-[300px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardWithCategorySkeleton
            className="h-[464px]"
            classNameImage="max-h-[300px]"
          />
          <CardWithCategorySkeleton
            className="h-[464px]"
            classNameImage="max-h-[300px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardWithCategorySkeleton
            className="h-[464px]"
            classNameImage="max-h-[300px]"
          />
          <CardWithCategorySkeleton
            className="h-[464px]"
            classNameImage="max-h-[300px]"
          />
        </div>
        <CardWithCategorySkeleton
          className="h-[464px]"
          classNameImage="max-h-[300px]"
        />
      </div>
    </div>
  );
};
