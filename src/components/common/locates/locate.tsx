import { PrismicDocument } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { createClient, getLocales } from "@/prismicio";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type LocalesProps = {
  document: PrismicDocument;
};

export async function Locales({ document: doc }: LocalesProps) {
  const client = createClient();
  const locales = await getLocales(doc, client);
  const currentLocale = locales.find((locale) => locale.lang === doc.lang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white">
          {currentLocale?.lang_name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
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
