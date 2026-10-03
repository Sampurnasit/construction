import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteContent";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B5D2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "BSA Enterprise | Govt Civil Contractor & General Order Supplier in Kolkata",
  description:
    "BSA Enterprise (Founder: Sayantan Das, GST: 19DQYPD2942H1ZC) is a premier Government Civil Contractor and General Order Supplier in Kolkata, West Bengal. Infrastructure works, RCC roads, drainage, building construction, and certified materials supply.",
  keywords: [
    "BSA Enterprise",
    "Sayantan Das",
    "Govt Civil Contractor Kolkata",
    "General Order Supplier Kolkata",
    "Government Registered Contractor",
    "19DQYPD2942H1ZC",
    "Construction Company Kolkata",
    "Regent Colony Kolkata 700040",
    "Civil Engineering West Bengal",
    "PWD Contractor Kolkata",
    "Building Construction Kolkata",
    "TMT Steel Cement Supplier",
  ],
  authors: [{ name: "Sayantan Das", url: "https://bsaenterprise.com" }],
  creator: "BSA Enterprise",
  publisher: "BSA Enterprise",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://bsaenterprise.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bsaenterprise.com",
    title: "BSA Enterprise | Govt Civil Contractor & General Order Supplier in Kolkata",
    description:
      "Building a Better Tomorrow. Premier Government Civil Contractor and General Order Supplier based in Regent Colony, Kolkata. Founder: Sayantan Das.",
    siteName: "BSA Enterprise",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "BSA Enterprise - Govt Civil Contractor & General Order Supplier Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BSA Enterprise | Govt Civil Contractor & General Order Supplier in Kolkata",
    description:
      "Premier Government Civil Contractor and General Order Supplier based in Regent Colony, Kolkata. GST: 19DQYPD2942H1ZC.",
    images: ["/banner.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": siteConfig.company.name,
    "legalName": siteConfig.company.legalName,
    "image": "https://bsaenterprise.com/logo.png",
    "description": "Government Civil Contractor and General Order Supplier in Kolkata, West Bengal.",
    "telephone": siteConfig.company.contact.phoneFormatted,
    "email": siteConfig.company.contact.email,
    "taxID": siteConfig.company.gstNo,
    "founder": {
      "@type": "Person",
      "name": siteConfig.company.founder,
      "jobTitle": siteConfig.company.founderRole,
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.company.address.street,
      "addressLocality": siteConfig.company.address.city,
      "addressRegion": siteConfig.company.address.state,
      "postalCode": siteConfig.company.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.company.geo.latitude,
      "longitude": siteConfig.company.geo.longitude,
    },
    "url": "https://bsaenterprise.com",
    "openingHours": "Mo-Sa 09:00-19:30",
    "priceRange": "$$",
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFDF0] text-[#1F2933] antialiased selection:bg-[#D4A017] selection:text-[#063D1E]">
        {children}
      </body>
    </html>
  );
}
