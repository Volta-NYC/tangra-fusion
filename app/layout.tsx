import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { site } from "./content";
import { defaultTitle, restaurantJsonLd } from "./seo";
import { ScrollReveal } from "./scroll-reveal";
import { StructuredData } from "./structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s | Tangra Fusion",
  },
  description:
    "Tangra Fusion serves Chinese cuisine Indian style, halal meat, and Indo-Chinese signatures in Elmhurst and Sunnyside, Queens.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: defaultTitle,
    description:
      "Chinese cuisine, Indian style with halal meat and Indo-Chinese signatures in Elmhurst and Sunnyside, Queens.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Chinese cuisine, Indian style with halal meat and Indo-Chinese signatures in Elmhurst and Sunnyside, Queens.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={restaurantJsonLd()} />
        <ScrollReveal />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
