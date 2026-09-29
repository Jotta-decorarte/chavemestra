import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getSiteUrl, site } from "@/lib/site";
import "@/styles/globals.css";

const alta = localFont({ src: "../assets/fonts/alta-regular.otf", variable: "--font-alta", display: "swap", weight: "400" });
const poppins = localFont({ src: [
  { path: "../assets/fonts/poppins/Poppins-Regular.ttf", weight: "400", style: "normal" },
  { path: "../assets/fonts/poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
  { path: "../assets/fonts/poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
], variable: "--font-poppins", display: "swap" });
const base = getSiteUrl();
export const metadata: Metadata = {
  title: site.title, description: site.description,
  ...(base ? { metadataBase: base, alternates: { canonical: "/" } } : {}),
  robots: { index: !!base, follow: !!base },
  openGraph: { title: site.title, description: site.description, siteName: site.name, locale: "pt_BR", type: "website", ...(base ? { url: base } : {}) },
  twitter: { card: "summary", title: site.title, description: site.description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" className={`${alta.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
