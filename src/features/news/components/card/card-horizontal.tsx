import { Button } from "@/components/ui/button";
import { Post } from "@/stores/features/news";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface CardNewHorizontalProps extends Post {
  className?: string;
}

const CardNewHorizontal = ({
slug,
feature_image,
title,
excerpt,
created_at,
className,
}: CardNewHorizontalProps) => {
  return (
    <Link
      href={`/news/${slug}`}
      className="flex flex-col md:flex-row items-center gap-6 md:h-[200px] group"
    >
      <div className="relative h-[300px] w-full md:h-full min-w-[300px] rounded-[8px] overflow-hidden">
        <Image
          src={feature_image ?? ""}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-500">
            {format(new Date(created_at), "PPP")}
          </p>
          <p className="text-sm md:text-base text-gray-500 line-clamp-4">{excerpt}</p>
        </div>
        <Button
          variant="link"
          className="text-lg font-semibold w-fit
        "
        >
          Read more
        </Button>
      </div>
    </Link>
  );
};

export default CardNewHorizontal;
