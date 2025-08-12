import Gallery from '@/components/Gallery'
import SectionDivider from '@/components/global/SectionDivider'
import PageHero from '@/components/global/PageHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Gym Tajalin - Weightlifting, Boxing & Muay Thai | Playa Pavones",
  description: "Gym Tajalin in Playa Pavones, Costa Rica. Complete fitness facility offering weightlifting, boxing, and muay thai training. Located in the Zona Sur, perfect for locals and tourists.",
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
    title: "Gym Tajalin - Complete Fitness Facility in Playa Pavones",
    description: "Weightlifting, boxing, and muay thai training at Gym Tajalin in Pavones, Costa Rica.",
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

export default function GymTajalin() {
  return (
    <>
      <PageHero
        imageSrc="https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/gym-tajalin-logo.jpg"
        imageAlt="Gym Tajalin | Playa Pavones, Zona Sur, Costa Rica | Weightlifting, Boxing and Muay Thai"
        imagePosition="left"
        priority={true}
      >
        <h2 className="text-center lg:text-left">About Gym Tajalin</h2>
        <SectionDivider />
        <p className="mx-auto max-w-[800px] text-center lg:text-left lg:mx-0">
          <em>Sayd confirmará qué texto va aquí.</em>
        </p>
      </PageHero>
      <SectionDivider />
      <Gallery />
    </>
  )
}
