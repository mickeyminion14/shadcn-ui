import type { Metadata } from "next";
import "./globals.scss";
import { textFont } from "@/lib/fonts";
import { siteConfig } from "@/config/site";

//basic meta data
export const metadata: Metadata = {
  title: {
    default: siteConfig.basic.name,
    template: `%s | ${siteConfig.basic.name}`,
  },
  description: siteConfig.basic.description,
  keywords: siteConfig.basic.keywords,
  twitter: {
    site: "@site",
    title: siteConfig.basic.name,
    card: "summary_large_image",
    description: siteConfig.basic.description,
    images: [
      {
        url: "https://maxx-marketing.appskeeper.in/images/logo.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: siteConfig.basic.url,
    title: {
      default: siteConfig.basic.name,
      template: `%s | ${siteConfig.basic.name}`,
    },
    description: siteConfig.basic.description,
    siteName: siteConfig.basic.appName,
    images: [
      {
        url: "https://maxx-marketing.appskeeper.in/images/logo.png",
        height: 600,
        width: 1200,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  applicationName: siteConfig.basic.appName,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>
      <body
        style={{
          backgroundImage: `url(${"/images/background.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
        className={textFont.className}
      >
        {children}
      </body>
    </html>
  );
}
