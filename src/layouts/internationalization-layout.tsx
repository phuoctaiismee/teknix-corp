import { IGlobalLayoutProps } from "@/types";
import NextIntlProvider from "@/providers/next-intl-provider";
import SiteHeader from "@/components/common/header";
import SiteFooter from "@/components/common/footer";
import SiteBanner from "@/components/common/banners";

const InternationalizationLayout = async ({
  children,
  params,
}: IGlobalLayoutProps & { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;

  return (
    <NextIntlProvider params={params}>
      <SiteBanner locale={locale} />
      {/* <FollowCursor /> */}
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </NextIntlProvider>
  );
};

export default InternationalizationLayout;
