import type { Metadata } from "next";
import "@/scss/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "RR-Sondermetalle",
};

export default function LocalLayout({
  children,
  params: { local },
}: Readonly<{
  children: React.ReactNode;
  params: { local: string };
}>) {
  const messages = useMessages();
  unstable_setRequestLocale(local);
  return (
    <html lang={local}>
      <body>
        <NextIntlClientProvider locale={local} messages={messages}>
          <div className="body-inner">
            <Header />
            <main className="main-content pt-[130px] bg-white text-primary">
              {children}
            </main>
            <Footer company={undefined} lang={undefined} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Can be imported from a shared config
const locales = ["en", "de"];

export function generateStaticParams() {
  return locales.map((local) => ({ local }));
}
