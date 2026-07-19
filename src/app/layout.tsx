import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const homeUrl = new URL("/", portfolio.seo.siteUrl).toString();
const homeSocialImageUrl = new URL(portfolio.seo.socialImage, portfolio.seo.siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.seo.siteUrl),
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  applicationName: portfolio.person.name,
  alternates: {
    canonical: homeUrl
  },
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: homeUrl,
    siteName: portfolio.person.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: homeSocialImageUrl,
        width: 1200,
        height: 630,
        alt: portfolio.seo.socialImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [homeSocialImageUrl]
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
