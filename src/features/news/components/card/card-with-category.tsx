import { cn } from "@/lib/utils";
import { Post } from "@/stores/features/news";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardWithCategoryProps extends Post {
  className?: string;
  classNameImage?: string;
  classNameDescription?: string;
}

const CardWithCategory = ({
  slug,
  title,
  feature_image,
  created_at,
  tags,
  plaintext,
  excerpt,
  className,
  classNameImage,
  classNameDescription,
}: CardWithCategoryProps) => {
  const locale = sessionStorage.getItem("locale");
  return (
    <Link
      href={`/${locale ?? ""}/news/${slug}`}
      className={cn("flex flex-col w-full relative gap-6 group", className)}
    >
      <div
        className={cn(
          "w-full relative h-[300px] rounded-[8px] overflow-hidden",
          classNameImage
        )}
      >
        <Image
          src={feature_image ?? ""}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover  group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[#6D6D6D] text-xs md:text-sm font-semibold">
          {tags ?? "Hot News Pick"}
        </p>
        <div className="h-[1px] w-full bg-[#E6E6E6]" />
        <div className="flex flex-col gap-2 ">
          <p className="text-base md:text-lg font-semibold line-clamp-1">
            {title}
          </p>
          <p
            className={cn(
              "text-[#6D6D6D] text-sm md:text-base line-clamp-2  ",
              classNameDescription
            )}
          >
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardWithCategory;
