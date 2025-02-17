import { PrismicDocument } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Paragraph from "../typography/paragraph";
import { Check, ChevronDown } from "lucide-react";
import { useMemo } from "react";

type LocalesProps = {
  initialLocale: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name?: string;
  })[];
  locale: string;
};

export function LocalesSelector({ initialLocale, locale }: LocalesProps) {
  const name = useMemo(() => {
    return locale?.startsWith("/vi") ? "VietNam" : "English";
  }, [locale]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-white bg-[#464646] w-full min-w-[250px] md:w-[250px] rounded-[8px] justify-between hover:bg-[#464646]/80 hover:text-white"
        >
          <div className="flex items-center gap-1">
            <Check className="size-4" />
            <Paragraph className="text-white text-sm md:text-[14px]">
              {name}
            </Paragraph>
          </div>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {initialLocale.map((locale) => (
          <DropdownMenuItem key={locale.lang} asChild>
            <PrismicNextLink
              document={locale}
              aria-label={`Change language to ${locale?.lang_name}`}
            >
              {locale?.lang_name}
            </PrismicNextLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
