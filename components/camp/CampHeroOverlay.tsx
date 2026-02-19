import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export default async function CampHeroOverlay() {
  const t = await getTranslations('surfCamp')

  return (
    <section className="relative w-full overflow-hidden rounded-lg" style={{ minHeight: '500px' }}>
      <Image
        src="https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-hero-image-teep-1.jpg"
        alt="Muay Thai training at Pavones Boxing Club"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 py-20 text-center text-white">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight lg:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-white/80 lg:text-2xl">
          {t('hero.subtitle')}
        </p>
        <span className="mt-6 inline-block rounded-full border-2 border-pbcGreen bg-pbcGreen/80 px-8 py-3 text-lg font-bold tracking-wide text-white lg:text-xl">
          {t('hero.badge')}
        </span>
      </div>
    </section>
  )
}
