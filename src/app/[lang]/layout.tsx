import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maaz Gheewale Portfolio",
  description: "Portfolio website of Maaz Gheewale",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }, { lang: "ar" }];
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} no-scrollbar mx-3 flex flex-col items-center gap-2 overflow-auto lg:mx-6 lg:flex-row lg:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
