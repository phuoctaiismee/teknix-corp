import GlobalLoading from "@/components/common/loaders/global-loading";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">
      <GlobalLoading />
    </div>
  );
}
