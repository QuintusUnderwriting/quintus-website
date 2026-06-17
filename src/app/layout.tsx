import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { LaunchSoonPopup } from "@/components/LaunchSoonPopup";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Quintus Underwriting",
    template: "%s | Quintus Underwriting",
  },
  description:
    "Specialist UK MGA delivering expert underwriting, intelligent technology, and broker-first service.",
  metadataBase: new URL("https://quintusunderwriting.com"),
  openGraph: {
    title: "Quintus Underwriting",
    description:
      "Specialist UK MGA delivering expert underwriting, intelligent technology, and broker-first service.",
    url: "https://quintusunderwriting.com",
    siteName: "Quintus Underwriting",
    images: [
      {
        url: "/images/quintus-underwriting-hero.png",
        width: 1680,
        height: 945,
        alt: "Premium underwriting workspace with property plans and navy-gold materials",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <SiteHeader />
        <LaunchSoonPopup />
        <CookieConsentBanner />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
