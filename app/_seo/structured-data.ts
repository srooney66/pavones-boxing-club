export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": "https://pavonesboxingclub.com",
  name: "Pavones Boxing Club",
  description: "The original boxing and muay thai gym in Pavones, Costa Rica. Professional training for locals and visitors.",
  url: "https://pavonesboxingclub.com",
  telephone: "+506-8705-5390",
  email: "info@pavonesboxingclub.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Road",
    addressLocality: "Pavones",
    addressRegion: "Puntarenas",
    postalCode: "60702",
    addressCountry: "CR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.3901,
    longitude: -83.1308
  },
  image: [
    "https://pavonesboxingclub.com/og-image.jpg"
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Boxing and Muay Thai Classes",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boxing Training",
          description: "Professional boxing training for all levels"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Muay Thai Training",
          description: "Authentic muay thai training with experienced coaches"
        }
      }
    ]
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Boxing Ring"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Heavy Bags"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Training Equipment"
    }
  ],
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "Local Boxer"
    },
    reviewBody: "Best boxing gym in Pavones. Pierre is an excellent coach!"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "45"
  },
  areaServed: [
    {
      "@type": "City",
      name: "Pavones"
    },
    {
      "@type": "State",
      name: "Puntarenas"
    },
    {
      "@type": "Country",
      name: "Costa Rica"
    }
  ],
  knowsLanguage: ["en", "es", "fr"],
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "USD, CRC",
  founder: {
    "@type": "Person",
    name: "Pierre",
    jobTitle: "Head Coach"
  }
};