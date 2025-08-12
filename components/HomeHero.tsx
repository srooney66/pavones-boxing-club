import { createClient } from '@/utils/supabase/server'
import PageHero from '@/components/global/PageHero'
import SectionDivider from '@/components/global/SectionDivider'

export default async function HomeHero() {
  const supabase = await createClient()
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
        <h1 className="text-center lg:text-left">Pavones Boxing Club & Muay Thai Club</h1>
        <SectionDivider />
        <h2 className="mx-auto max-w-xl text-center lg:text-left !leading-tight lg:mx-0">
          The original boxing and muay thai club in
          <br />
          Pavones, Costa Rica
        </h2>
      </PageHero>
      <SectionDivider />
    </>
  )
}
