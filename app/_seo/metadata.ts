import { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const siteMetadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Pavones Boxing Club - Boxing & Muay Thai Training in Pavones, Costa Rica",
    template: "%s | Pavones Boxing Club"
  },
  description: "The original boxing and muay thai gym in Pavones, Costa Rica. Professional training for locals and visitors. Learn authentic boxing and muay thai in paradise. Classes for all levels.",
  keywords: [
    "boxing gym Pavones",
    "muay thai Costa Rica",
    "boxing classes Pavones",
    "gym Pavones Costa Rica",
    "boxing training Costa Rica",
    "muay thai training",
    "Pavones fitness",
    "Costa Rica boxing",
    "gimnasio boxeo Pavones",
    "gimnasio Pavones",
    "Pierre boxing coach"
  ],
  authors: [{ name: "Pavones Boxing Club" }],
  creator: "Pavones Boxing Club",
  publisher: "Pavones Boxing Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pavones Boxing Club - Boxing & Muay Thai in Pavones, Costa Rica",
    description: "The original boxing and muay thai gym in Pavones, Costa Rica. Professional training for all levels in paradise.",
    url: defaultUrl,
    siteName: "Pavones Boxing Club",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_CR"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pavones Boxing Club - Boxing and Muay Thai Training"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavones Boxing Club - Boxing & Muay Thai Training",
    description: "Professional boxing and muay thai training in Pavones, Costa Rica. Classes for all levels.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: defaultUrl,
    languages: {
      "en-US": "/en",
      "es-CR": "/es",
    },
  },
  category: "Sports & Fitness",
};