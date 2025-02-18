import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Post } from "@/stores/features/news";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface CardNewHorizontalProps extends Post {
  className?: string;
  classNameDescription?: string;
  classNameImage?: string;
}

const CardNewHorizontal = ({
  slug,
  feature_image,
  title,
  excerpt,
  created_at,
  className,
  classNameDescription,
  classNameImage,
}: CardNewHorizontalProps) => {
  const locale = sessionStorage.getItem("locale");
  return (
    <Link
      href={`/${locale ?? ""}/news/${slug}`}
      className={cn(
        "flex flex-col lg:flex-row items-center gap-6 lg:h-[200px] group",
        className
      )}
    >
      <div
        className={cn(
          "relative h-[300px] w-full md:h-full lg:min-w-[300px] rounded-[8px] overflow-hidden",
          classNameImage
        )}
      >
        <Image
          src={feature_image ?? ""}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-500">
            {format(new Date(created_at), "PPP")}
          </p>
          <p
            className={cn(
              "text-sm md:text-base text-gray-500 line-clamp-4",
              classNameDescription
            )}
          >
            {excerpt}
          </p>
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
