import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import { generateSiteMetadata } from '@/app/_seo/metadata';
import { ThemeProvider } from "next-themes";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import FloatingWhatsApp from "@/components/global/FloatingWhatsApp";
import SeoHead from "@/app/_seo/SeoHead";

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  return generateSiteMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});

  return (
    <>
      <SeoHead />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <Header />
              <div className="flex flex-col gap-20 max-w-7xl p-5 w-full">
                {children}
              </div>
              <Footer />
            </div>
          </main>
          <FloatingWhatsApp />
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}