import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Set text direction for RTL languages (Hebrew)
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen flex flex-col" dir={dir}>
        <Header locale={locale} />
        <main className="flex-1 pt-20">{children}</main>
        <Footer locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}

