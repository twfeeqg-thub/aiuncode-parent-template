import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "../config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.site.name,
  description: config.pwa.appDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // حقن الألوان والحواف ديناميكياً من JSON
  const dynamicStyles = {
    "--primary": config.theme?.primary || "221.2 83.2% 53.3%",
    "--radius": config.theme?.radius || "0.5rem",
  } as React.CSSProperties;

  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className} style={dynamicStyles}>
        {children}
      </body>
    </html>
  );
}
