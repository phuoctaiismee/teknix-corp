import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { shortLocaleToLong } from "@/i18n/routing";

type Params = { uid: string; locale: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid, locale } = await params;
  const client = createClient();
  const page = await client
    .getByUID("page", uid, { lang: shortLocaleToLong(locale) })
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid, locale } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid, { lang: shortLocaleToLong(locale) }).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title)
        ? page.data.meta_title
        : undefined,
      description: isFilled.keyText(page.data.meta_description)
        ? page.data.meta_description
        : undefined,
      images: isFilled.image(page.data.meta_image)
        ? [asImageSrc(page.data.meta_image)]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("page", { lang: "*" });
  
    return pages.map((page) => ({
      uid: page.uid,
      locale: page.lang,
    }));
  }
  