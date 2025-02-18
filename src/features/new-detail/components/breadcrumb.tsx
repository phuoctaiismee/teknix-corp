import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { removeBoldUnicode } from "@/utils/text";

interface BreadCrumbNewDetailProps {
  currentPage: string;
  locale: string;
}

const BreadCrumbNewDetail = ({ currentPage, locale }: BreadCrumbNewDetailProps) => {
  const currentPageText = removeBoldUnicode(currentPage);
  return (
    <Breadcrumb className="font-medium ">
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="text-[#B1B1B1]">
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="text-[#B1B1B1]">
            <Link href={`/${locale}/news`}>News</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-normal line-clamp-1">
            {currentPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbNewDetail;
