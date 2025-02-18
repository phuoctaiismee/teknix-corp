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
import { shortLocaleToLong } from "@/i18n/routing";

type LocalesProps = {
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name?: string;
  })[];
};

export function LocalesSelector({ locales }: LocalesProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-white bg-[#464646] w-full min-w-[250px] md:w-[200px] lg:w-[250px] rounded-[8px] justify-between hover:bg-[#464646]/80 hover:text-white"
        >
          <div className="flex items-center gap-1">
            <Check className="size-4" />
            <Paragraph className="text-white text-sm md:text-[14px]">
              {locales[0].lang_name}
            </Paragraph>
          </div>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[8px] bg-white/10 backdrop-blur-lg border-none text-black">
        {locales.map((locale) => (
          <DropdownMenuItem style={{
            width: 'var(--radix-dropdown-menu-trigger-width)'
          }} key={locale.lang} asChild className="rounded-[8px] backdrop-blur-none bg-transparent hover:bg-white/20 hover:backdrop-blur-lg hover:text-blue-800 transition-all duration-100 cursor-pointer">
            <PrismicNextLink
              href={`/${shortLocaleToLong(locale.lang) ?? ""}`}
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
