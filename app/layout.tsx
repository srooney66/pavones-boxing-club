import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import FloatingWhatsApp from "@/components/global/FloatingWhatsApp";
import SeoHead from "./_seo/SeoHead";
import { siteMetadata } from "./_seo/metadata";

export const metadata = siteMetadata;

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <SeoHead />
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
      </body>
    </html>
  );
}
