import BannerHeader from "@/components/common/banners";
import { BannerProvider } from "@/components/common/banners/banner-provider";
import FollowCursor from "@/components/common/cursify/follow-cursor";
import SiteFooter from "@/components/common/footer";
import SiteHeader from "@/components/common/header";
import ScrollProgressBar from "@/components/common/scrollbar/top-scrollbar";
import { shortLocaleToLong } from "@/i18n/routing";
import { createClient, getLocales } from "@/prismicio";
import { AppProvider } from "@/providers/app-provider";
import NextIntlProvider from "@/providers/next-intl-provider";
import { IGlobalLayoutProps } from "@/types";
import NextTopLoader from "nextjs-toploader";

const GlobalRootLayout = async ({ children }: IGlobalLayoutProps) => {
  return (
    <AppProvider>
      {children}

      <ScrollProgressBar color="#132163" type="bar" />
      <NextTopLoader showSpinner={false} />
    </AppProvider>
  );
};

export default GlobalRootLayout;
