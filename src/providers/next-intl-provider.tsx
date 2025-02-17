import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

export default async function NextIntlProvider({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const message = await getMessages();
  return (
    <NextIntlClientProvider messages={message}>
      {children}
    </NextIntlClientProvider>
  );
}
