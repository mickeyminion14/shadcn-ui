import type { Metadata } from "next";
import "./globals.scss";
// import { textFont } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

//basic meta data

const baseUrl = "https://maxx-marketing.appskeeper.in";
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
        url: `${baseUrl}/images/logo.png`,
      },
    ],
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: {
      default: siteConfig.basic.name,
      template: `%s | ${siteConfig.basic.name}`,
    },
    description: siteConfig.basic.description,
    siteName: siteConfig.basic.appName,
    images: [
      {
        url: `${baseUrl}/images/logo.png`,
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
        <link rel="shortcut icon" href={`${baseUrl}/images/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${baseUrl}/images/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${baseUrl}/images/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${baseUrl}/images/favicon-16x16.png`}
        />
        <meta name="theme-color" content="blue" />
      </head>
      <body
        style={{
          backgroundImage: `url(${"/images/background.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
        // className={textFont.className}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
