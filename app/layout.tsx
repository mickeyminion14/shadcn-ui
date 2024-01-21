import type { Metadata } from "next";
import "./globals.scss";
import { textFont } from "@/lib/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.basic.name,
    template: `${siteConfig.basic.name} | %s`,
  },
  description: siteConfig.basic.description,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
