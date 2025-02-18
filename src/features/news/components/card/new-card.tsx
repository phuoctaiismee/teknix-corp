import { cn } from "@/lib/utils";
import { Post } from "@/stores/features/news";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewCardProps extends Post {

  className?: string;
  classNameDescription?: string;
}

const NewCard = ({
  title,
  plaintext,
  feature_image,
  slug,
  excerpt,
  created_at,
  className,
  classNameDescription,
}: NewCardProps) => {
  const locale = sessionStorage.getItem("locale");
  return (
    <Link
      href={`/${locale ?? ""}/news/${slug}`}
      className={cn(
        "p-6 rounded-[8px] relative flex flex-col justify-between h-full w-full bg-cover bg-center bg-no-repeat group overflow-hidden",
        className
      )}
      style={{
        background: `
        linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 78.73%)`,
      }}
    >
      <Image
        src={feature_image ?? ""}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="z-[-1] object-cover group-hover:scale-105 transition-all duration-300"
      />
      <div className="opacity-0" />
      <div className="flex flex-col gap-2">
        <h4 className="text-white text-[20px] font-bold line-clamp-1">
          {title}
        </h4>
        <p className="text-base text-white">{format(created_at, "PPP")}</p>
        <p
          className={cn(
            "text-base text-[#B1B1B1] line-clamp-2  ",
            classNameDescription
          )}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default NewCard;
