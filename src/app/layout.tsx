import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalRootLayout from "@/layouts/root-layout";
import { META_DATA, WEBSITE_HOST_URL } from "@/configs";

const svn_gliroy = localFont({
  src: [
    {
      path: "../../public/fonts/svn_gliroy_regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/svn_gliroy_semibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/svn_gliroy_bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/svn_gliroy_heavy.otf",
      weight: "800",
      style: "heavy",
    },
  ],
});
export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_HOST_URL),
  title: {
    template: "%s",
    default: META_DATA.title,
  },
  description: META_DATA.description,
  openGraph: {
    title: META_DATA.og_title,
    description: META_DATA.og_description,
    url: WEBSITE_HOST_URL,
    locale: "en-US",
    siteName: META_DATA.title,
    type: "website",
    images: [
      {
        url: META_DATA.image,
      },
    ],
  },
  twitter: {
    title: META_DATA.twitter_title,
    description: META_DATA.twitter_description,
    images: META_DATA.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
  keywords: [
    "Mister Tourism World",
    "Vietnam, male pageant",
    "tourism event",
    "cultural ambassador",
    "international pageant",
    "beauty contest",
    "travel",
    "Mister Tourism",
  ],
  icons: {
    icon: [
      {
        url: META_DATA.icon,
        type: "image/png",
      },
      {
        url: META_DATA.icon,
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: META_DATA.icon,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: META_DATA.icon,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [META_DATA.icon],
    apple: [
      { url: META_DATA.icon },
      {
        url: META_DATA.icon,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: META_DATA.icon,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_KEY,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${svn_gliroy.className} antialiased`}>
        <GlobalRootLayout params={params}>{children}</GlobalRootLayout>
      </body>
    </html>
  );
}
