import { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export function generateSiteMetadata(locale: string = 'en'): Metadata {
  const baseMetadata = {
    metadataBase: new URL(defaultUrl),
    authors: [{ name: "Pavones Boxing Club" }],
    creator: "Pavones Boxing Club",
    publisher: "Pavones Boxing Club",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    category: "Sports & Fitness",
  };

  if (locale === 'es') {
    return {
      ...baseMetadata,
      title: {
        default: "Pavones Boxing Club - Boxeo y Muay Thai en Pavones, Costa Rica",
        template: "%s | Pavones Boxing Club"
      },
      description: "El gimnasio original de boxeo y muay thai en Pavones, Costa Rica. Entrenamiento profesional para locales y visitantes. Aprende boxeo y muay thai auténtico en el paraíso. Clases para todos los niveles.",
      keywords: [
        "gimnasio boxeo Pavones",
        "muay thai Costa Rica",
        "clases boxeo Pavones",
        "gimnasio Pavones Costa Rica",
        "entrenamiento boxeo Costa Rica",
        "entrenamiento muay thai",
        "fitness Pavones",
        "Costa Rica boxeo",
        "gimnasio boxeo Pavones",
        "gimnasio Pavones",
        "Pierre entrenador boxeo"
      ],
      openGraph: {
        title: "Pavones Boxing Club - Boxeo y Muay Thai en Pavones, Costa Rica",
        description: "El gimnasio original de boxeo y muay thai en Pavones, Costa Rica. Entrenamiento profesional para todos los niveles en el paraíso.",
        url: `${defaultUrl}/es`,
        siteName: "Pavones Boxing Club",
        type: "website",
        locale: "es_CR",
        alternateLocale: ["en_US"],
        images: [
          {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Pavones Boxing Club - Entrenamiento de Boxeo y Muay Thai"
          }
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Pavones Boxing Club - Entrenamiento de Boxeo y Muay Thai",
        description: "Entrenamiento profesional de boxeo y muay thai en Pavones, Costa Rica. Clases para todos los niveles.",
        images: ["/og-image.jpg"],
      },
      alternates: {
        canonical: `${defaultUrl}/es`,
        languages: {
          "en": `${defaultUrl}/en`,
          "es": `${defaultUrl}/es`,
        },
      },
    };
  }

  // Default English metadata
  return {
    ...baseMetadata,
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
    openGraph: {
      title: "Pavones Boxing Club - Boxing & Muay Thai in Pavones, Costa Rica",
      description: "The original boxing and muay thai gym in Pavones, Costa Rica. Professional training for all levels in paradise.",
      url: `${defaultUrl}/en`,
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
    alternates: {
      canonical: `${defaultUrl}/en`,
      languages: {
        "en": `${defaultUrl}/en`,
        "es": `${defaultUrl}/es`,
      },
    },
  };
}