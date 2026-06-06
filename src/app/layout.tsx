import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  DM_Sans,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deltatraders.co.in"),
  title: {
    template: "%s | Delta Traders — uPVC Windows & Doors in Saharanpur",
    default:
      "Delta Traders — Best uPVC Windows & Doors in Saharanpur | Dealer & Supplier",
  },
  description:
    "Delta Traders is a leading supplier of uPVC windows and doors in Saharanpur, offering sliding windows, casement windows, French doors, and custom uPVC solutions. Professional installation services for residential and commercial projects.",
  keywords: [
    "Saharanpur Delta Traders",
    "Delta Traders",
    "uPVC Windows in Saharanpur",
    "uPVC Doors in Saharanpur",
    "Best uPVC Windows in Saharanpur",
    "uPVC Window Dealer in Saharanpur",
    "uPVC Door Supplier in Saharanpur",
    "u-pvc near me",
    "uPVC Windows Near Me",
    "uPVC Doors Near Me",
    "Sliding uPVC Windows",
    "Casement uPVC Windows",
    "French uPVC Windows",
    "Soundproof Windows",
    "Energy Efficient Windows",
    "Delta Traders Saharanpur",
    "Best window supplier near me",
    "Aluminium Windows Saharanpur",
    "Glass Partitions Saharanpur",
    "Commercial uPVC Saharanpur",
    "Residential uPVC Saharanpur",
    "Premium quality uPVC doors"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Delta Traders",
    title: "Best uPVC Windows & Doors in Saharanpur | Delta Traders",
    description:
      "Delta Traders is a leading supplier of uPVC windows and doors in Saharanpur, offering sliding windows, casement windows, French doors, balcony doors, and customized uPVC solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best uPVC Windows & Doors in Saharanpur | Delta Traders",
    description:
      "Delta Traders is a leading supplier of uPVC windows and doors in Saharanpur, offering sliding windows, casement windows, French doors, balcony doors, and customized uPVC solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EUBBVSqvAh-T-0AJWsTHaEKcQR7yw1Z93nHbPWv1v7c",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Delta Traders",
  description: "Delta Traders is a leading supplier of uPVC windows and doors in Saharanpur, offering sliding windows, casement windows, French doors, balcony doors, and customized uPVC solutions. We provide professional installation services for residential and commercial projects with a focus on quality, durability, energy efficiency, and sound insulation.",
  url: "https://deltatraders.co.in",
  telephone: "+91-7668228828",
  email: "tradersd091@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Near Manviklan Bus Stand, Opp. Paramount City, Delhi Road",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "247001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.9643,
    longitude: 77.5449,
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  image: "https://deltatraders.in/images/hero-1.png",
  areaServed: [
    "Uttar Pradesh",
    "Saharanpur",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "uPVC Windows & Doors",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "156",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
