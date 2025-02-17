import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface CardWithCategorySkeletonProps {
  className?: string;
  classNameImage?: string;
  classNameDescription?: string;
}

const CardWithCategorySkeleton = ({
  className,
  classNameImage,
  classNameDescription,
}: CardWithCategorySkeletonProps) => {
  return (
    <div className={cn("flex flex-col w-full relative gap-6", className)}>
      <div
        className={cn(
          "w-full relative h-[300px] rounded-[8px] overflow-hidden",
          classNameImage
        )}
      >
        <Skeleton className="w-full h-full bg-black/10 rounded" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-1/4 bg-black/10 rounded" />
        <div className="h-[1px] w-full bg-[#E6E6E6]" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-3/4 bg-black/10 rounded" />
          <Skeleton className={cn("h-4 w-full bg-black/10 rounded", classNameDescription)} />
        </div>
      </div>
    </div>
  );
};

export default CardWithCategorySkeleton;
