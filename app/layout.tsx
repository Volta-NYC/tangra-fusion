import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tangra Fusion | Chinese-Indian Cuisine in Queens",
  description:
    "Tangra Fusion serves Chinese cuisine Indian style, halal meat, and Indo-Chinese signatures in Elmhurst and Sunnyside, Queens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
