import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient, getLocales } from "@/prismicio";
import { components } from "@/slices";
import { longLocaleToShort, shortLocaleToLong } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const locale = (await params).locale;

  const client = createClient();
  const page = await client.getSingle("homepage", {
    lang: shortLocaleToLong(locale),
  });

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const client = createClient();
  const home = await client.getSingle("homepage", {
    lang: shortLocaleToLong(locale),
  });

  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
export async function generateStaticParams({
  params,
}: Props): Promise<{ locale: string }[]> {
  const client = createClient();
  const pages = await client.getAllByType("homepage", { lang: "*" });

  return pages.map((page) => ({
    locale: longLocaleToShort(page.lang),
  }));
}
