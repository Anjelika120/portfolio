import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.seo.siteUrl),
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  applicationName: portfolio.person.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: "/",
    siteName: portfolio.person.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: portfolio.seo.socialImage,
        width: 1200,
        height: 630,
        alt: `${portfolio.person.name} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [portfolio.seo.socialImage]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
