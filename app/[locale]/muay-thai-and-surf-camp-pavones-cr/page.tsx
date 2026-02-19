import { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Dumbbell, Waves, Home, Users, Check } from 'lucide-react'
import SectionDivider from '@/components/global/SectionDivider'
import CampHeroOverlay from '@/components/camp/CampHeroOverlay'
import FeatureCard from '@/components/camp/FeatureCard'
import WeekSchedule from '@/components/camp/WeekSchedule'
import FAQ from '@/components/camp/FAQ'
import CampWhatsAppCTA from '@/components/camp/CampWhatsAppCTA'

const campPath = '/muay-thai-and-surf-camp-pavones-cr'
const campOgImage =
  'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-point-surf-waves-costa-rica.jpg'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'surfCamp.meta' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'muay thai camp costa rica',
      'surf camp pavones',
      'muay thai and surf retreat',
      'fight and surf camp',
      'pavones costa rica training',
      'combat sport surf retreat',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}${campPath}`,
      siteName: 'Pavones Boxing Club',
      type: 'website',
      locale: locale === 'es' ? 'es_CR' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_CR'],
      images: [
        {
          url: campOgImage,
          width: 1200,
          height: 630,
          alt:
            locale === 'es'
              ? 'Camp de Muay Thai y Surf en Pavones, Costa Rica'
              : 'Muay Thai & Surf Camp in Pavones, Costa Rica',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [campOgImage],
    },
    alternates: {
      canonical: `/${locale}${campPath}`,
      languages: {
        en: `/en${campPath}`,
        es: `/es${campPath}`,
      },
    },
  }
}

const campStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'Muay Thai & Surf Camp — Pavones, Costa Rica',
  description:
    'One month of professional muay thai training and world-class surfing in Pavones, Costa Rica. Lodging, coaching, and equipment included.',
  url: 'https://pavonesboxingclub.com/en/muay-thai-and-surf-camp-pavones-cr',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  startDate: '2027',
  location: {
    '@type': 'Place',
    name: 'Pavones Boxing Club',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pavones',
      addressRegion: 'Puntarenas',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.3901,
      longitude: -83.1308,
    },
  },
  organizer: {
    '@type': 'SportsActivityLocation',
    name: 'Pavones Boxing Club',
    url: 'https://pavonesboxingclub.com',
  },
  performer: {
    '@type': 'Person',
    name: 'Pierre',
    jobTitle: 'Head Coach & Founder',
  },
  offers: {
    '@type': 'Offer',
    price: '2500',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
    url: 'https://pavonesboxingclub.com/en/muay-thai-and-surf-camp-pavones-cr',
  },
  image: campOgImage,
}

export default async function SurfCampPage() {
  const t = await getTranslations('surfCamp')

  const includeKeys = [
    'training',
    'surf',
    'lodging',
    'coaching',
  ] as const

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(campStructuredData) }}
      />

      {/* Hero — full-bleed overlay from Page A */}
      <CampHeroOverlay />

      <SectionDivider />

      {/* Feature Cards */}
      <section className="w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FeatureCard
            icon={<Dumbbell className="h-8 w-8" />}
            title={t('features.training.title')}
            description={t('features.training.description')}
          />
          <FeatureCard
            icon={<Waves className="h-8 w-8" />}
            title={t('features.surf.title')}
            description={t('features.surf.description')}
          />
          <FeatureCard
            icon={<Home className="h-8 w-8" />}
            title={t('features.lodging.title')}
            description={t('features.lodging.description')}
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title={t('features.allLevels.title')}
            description={t('features.allLevels.description')}
          />
        </div>
      </section>

      <SectionDivider />

      {/* Sample Week */}
      <WeekSchedule />

      <SectionDivider />

      {/* About Pavones */}
      <section className="w-full">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:flex-row-reverse lg:gap-16">
          <div className="flex w-full flex-1 flex-col justify-center text-center lg:text-left">
            <h2>{t('location.title')}</h2>
            <p className="mx-auto max-w-[800px] lg:mx-0">
              {t('location.description')}
            </p>
          </div>
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]">
              <Image
                src="https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-point-surf-waves-costa-rica.jpg"
                alt="Aerial view of Pavones coastline and surf break, Costa Rica"
                fill
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Your Coach */}
      <section className="w-full">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-1 flex-col justify-center text-center lg:text-left">
            <h2>{t('coach.title')}</h2>
            <p className="text-xl font-semibold text-pbcGreen">{t('coach.name')}</p>
            <p className="mx-auto max-w-[800px] lg:mx-0">{t('coach.description')}</p>
          </div>
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]">
              <Image
                src="https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-coach-pierre-holding-boxing-mits.jpg"
                alt="Coach Pierre at Pavones Boxing Club"
                fill
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Pricing Card */}
      <section className="w-full py-2 text-center">
        <div className="mx-auto max-w-md rounded-lg border border-pbcGreen/30 bg-card p-8 shadow-lg">
          <span className="mb-4 inline-block rounded-full border border-pbcGreen bg-pbcGreen/10 px-3 py-1 text-sm font-medium text-pbcGreen">
            {t('pricing.badge')}
          </span>
          <h2 className="mb-2">{t('pricing.title')}</h2>
          <p className="text-muted-foreground">{t('pricing.startingFrom')}</p>
          <p className="my-4 text-5xl font-bold text-pbcGreen">
            {t('pricing.price')}
            <span className="text-xl font-normal text-muted-foreground">
              {t('pricing.period')}
            </span>
          </p>
          <div className="mt-6 text-left">
            <p className="mb-3 text-sm font-semibold">
              {t('pricing.includesTitle')}
            </p>
            {includeKeys.map((key) => (
              <div key={key} className="flex items-center gap-2 py-1">
                <Check className="h-4 w-4 shrink-0 text-pbcGreen" />
                <span className="text-sm text-muted-foreground">
                  {t(`pricing.includes.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CampWhatsAppCTA source="camp_page_pricing" />

      <SectionDivider />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CampWhatsAppCTA source="camp_page_bottom" />
    </>
  )
}
