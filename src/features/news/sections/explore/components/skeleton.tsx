import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ExploreNewSkeletonProps {
  className?: string;
}

const ExploreNewSkeleton = ({ className }: ExploreNewSkeletonProps) => {
  return (

    <div
      className={cn(
        "p-6 rounded-[8px] relative flex flex-col justify-between h-full w-full bg-cover bg-center bg-no-repeat group overflow-hidden bg-gradient-to-b from-transparent to-black/20 border border-gray-50",
        className
      )}
  
    >
      <div/>
      <div className="flex flex-col gap-2 z-10">
        <Skeleton className="h-6 rounded w-3/4" />
        <Skeleton className="h-4 rounded w-1/2" />
        <Skeleton className={cn("h-4 rounded w-full")} />
      </div>
    </div>
  );
};

export default ExploreNewSkeleton;
