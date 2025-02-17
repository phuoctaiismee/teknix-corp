import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const CardNewHorizontalSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-6 md:h-[200px]",
        className
      )}
    >
      <div className="relative h-[300px] w-full md:h-full md:max-w-[300px] rounded-[8px] overflow-hidden">
        <Skeleton className="w-full h-full bg-black/10 rounded" />
      </div>
      <div className="flex flex-col gap-2 justify-between h-full w-full">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-3/4 bg-black/10 rounded" />
          <Skeleton className="h-4 w-1/4 bg-black/10 rounded" />
          <Skeleton className="h-4 w-full md:w-3/4 bg-black/10 rounded" />
        </div>
        <Skeleton className="h-6 w-24 bg-black/10 rounded" />
      </div>
    </div>
  );
};

export default CardNewHorizontalSkeleton;
