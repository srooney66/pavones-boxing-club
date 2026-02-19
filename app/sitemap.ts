import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://pavonesboxingclub.com";

  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/gym-tajalin`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/gym-tajalin`,
          es: `${baseUrl}/es/gym-tajalin`,
        },
      },
    },
    {
      url: `${baseUrl}/muay-thai-and-surf-camp-pavones-cr`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/muay-thai-and-surf-camp-pavones-cr`,
          es: `${baseUrl}/es/muay-thai-and-surf-camp-pavones-cr`,
        },
      },
    },
  ];
}