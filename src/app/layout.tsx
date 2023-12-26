import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./font.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devled",
  description: "Capture dados e engaje seu cliente de forma personalizada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
      <Head>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Devled</title>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NB0SC4BE78" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NB0SC4BE78');
        `}
      </Script>
    </html>
  );
}
