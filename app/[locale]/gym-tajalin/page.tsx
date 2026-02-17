import Gallery from '@/components/Gallery'
import SectionDivider from '@/components/global/SectionDivider'
import PageHero from '@/components/global/PageHero'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params
  const isSpanish = locale === 'es'
  
  return {
    title: isSpanish 
      ? "Gym Tajalin - Pesas, Boxeo y Muay Thai | Playa Pavones"
      : "Gym Tajalin - Weightlifting, Boxing & Muay Thai | Playa Pavones",
    description: isSpanish
      ? "Gym Tajalin en Playa Pavones, Costa Rica. Instalación completa de fitness que ofrece entrenamiento de pesas, boxeo y muay thai. Ubicado en la Zona Sur, perfecto para locales y turistas."
      : "Gym Tajalin in Playa Pavones, Costa Rica. Complete fitness facility offering weightlifting, boxing, and muay thai training. Located in the Zona Sur, perfect for locals and tourists.",
    keywords: [
      "Gym Tajalin",
      "gym Playa Pavones",
      "weightlifting Costa Rica",
      "fitness Pavones",
      "gimnasio Pavones",
      "pesas Pavones",
      "Zona Sur gym",
      "Costa Rica fitness"
    ],
    openGraph: {
      title: isSpanish
        ? "Gym Tajalin - Instalación Completa de Fitness en Playa Pavones"
        : "Gym Tajalin - Complete Fitness Facility in Playa Pavones",
      description: isSpanish
        ? "Entrenamiento de pesas, boxeo y muay thai en Gym Tajalin en Pavones, Costa Rica."
        : "Weightlifting, boxing, and muay thai training at Gym Tajalin in Pavones, Costa Rica.",
      images: [
        {
          url: "https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/gym-tajalin-logo.jpg",
          width: 400,
          height: 400,
          alt: "Gym Tajalin Logo"
        }
      ],
    },
  }
}

export default async function GymTajalin() {
  const t = await getTranslations('gymTajalin')
  return (
    <>
      <PageHero
        imageSrc="https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/gym-tajalin-logo.jpg"
        imageAlt="Gym Tajalin | Playa Pavones, Zona Sur, Costa Rica | Weightlifting, Boxing and Muay Thai"
        imagePosition="left"
        priority={true}
      >
        <h2 className="text-center lg:text-left">{t('title')}</h2>
        <SectionDivider />
        <p className="mx-auto max-w-[800px] text-center lg:text-left lg:mx-0">
          {t('description')}
        </p>
      </PageHero>
      <SectionDivider />
      <Gallery />
    </>
  )
}
