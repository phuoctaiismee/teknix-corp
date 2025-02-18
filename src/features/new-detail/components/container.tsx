import Bounded from "@/components/common/containers/bounded";
import BreadCrumbNewDetail from "./breadcrumb";
import InfoNewDetail from "./info";
import ContentHTML from "./content";
import { HoverBorderGradient } from "@/components/custom/card/card-gradient";
import InputIcon from "@/components/custom/input/input-icon";
import { MoreHorizontal, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import RelatedPost from "./related-post";
import { Post } from "@/stores/features/news";

const NewsContainer = ({ html, title, created_at, locale }: Post & { locale: string }) => {
  const content = html;
  const happenData = [
    {
      name: "TeknixCorp",
      totalPosts: 12,
      description: "Featured keywords are being searched the most",
    },
    {
      name: "TeknixTalent",
      totalPosts: 42,
      description: "Featured keywords are being searched the most",
    },
    {
      name: "TeknixNews",
      totalPosts: 42,
      description: "Featured keywords are being searched the most",
    },
    {
      name: "TeknixNews",
      totalPosts: 42,
      description: "Featured keywords are being searched the most",
    },
    {
      name: "TeknixNews",
      totalPosts: 42,
      description: "Featured keywords are being searched the most",
    },
  ];
  return (
    <Bounded className="py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-[#E6E6E6]">
        <div className="col-span-2 lg:pr-12">
          <div className="flex flex-col gap-4">
            <BreadCrumbNewDetail currentPage={title} locale={locale} />
            <InfoNewDetail title={title} date={created_at} />
            <ContentHTML content={content} />
          </div>
        </div>
        <div className="hidden lg:block col-span-1 lg:pl-12">
          <div className="flex flex-col w-full gap-8 divide-y divide-[#E6E6E6]">
            <div className="flex flex-col gap-8">
              {/* SEARCH */}
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-[8px] bg-[#B4B4B433] w-full"
              >
                <InputIcon
                  placeholder="Search"
                  className="bg-[#B4B4B433] border-none rounded-[8px] text-[13px] !w-full"
                  prefix={<Search className="size-4 text-neutral-500" />}
                />
              </HoverBorderGradient>
              {/* TITLE */}
              <div className="text-[#6D6D6D] text-[14px]">
                What&apos;s happening
              </div>
            </div>
            {/* LIST HAPPENING */}
            <ScrollArea className="h-[350px]">
              <div className="flex flex-col h-full divide-y divide-[#E6E6E6] ">
                {happenData.map((item, index) => (
                  <div
                    className="py-3 flex flex-col gap-1 select-none"
                    key={index}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">#{item.name}</div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </div>
                    <div className="text-base text-[#6D6D6D]">
                      {item.totalPosts} posts
                    </div>
                    <div className="text-base text-[#6D6D6D]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            {/* RELATED POST */}
            <RelatedPost />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col gap-8">
          <RelatedPost />
        </div>
      </div>
    </Bounded>
  );
};

export default NewsContainer;
