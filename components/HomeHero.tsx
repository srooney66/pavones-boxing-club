import { createClient } from '@/utils/supabase/server'
import PageHero from '@/components/global/PageHero'
import SectionDivider from '@/components/global/SectionDivider'
import { getTranslations } from 'next-intl/server'

export default async function HomeHero() {
  const supabase = await createClient()
  const t = await getTranslations('hero')
  
  const { data: heroImgData } = supabase.storage
    .from('publicMedia')
    .getPublicUrl('pavones-boxing-club-hero-image-teep-1.jpg')

  return (
    <>
      <PageHero
        imageSrc={heroImgData.publicUrl}
        imageAlt="Pavones Boxing and Muay Thai Club Trainer and Student"
        imagePosition="left"
        priority={true}
      >
        <h1 className="text-center lg:text-left">{t('title')}</h1>
        <SectionDivider />
        <h2 className="mx-auto max-w-xl text-center lg:text-left !leading-tight lg:mx-0">
          {t('subtitle')}
          <br />
          {t('location')}
        </h2>
      </PageHero>
      <SectionDivider />
    </>
  )
}
