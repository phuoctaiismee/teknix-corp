import React from "react";
import InternationalizationLayout from "@/layouts/internationalization-layout";
import { IGlobalLayoutProps } from "@/types";

const LocaleLayout = async ({
  children,
  params,
}: IGlobalLayoutProps & { params: Promise<{ locale: string }> }) => {
  return (
    <InternationalizationLayout params={params}>
      {children}
    </InternationalizationLayout>
  );
};

export default LocaleLayout;
