import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tangra Fusion",
  description: "Simple Next.js scaffold for Tangra Fusion.",
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
