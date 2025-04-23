import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import SectionDivider from '@/components/global/SectionDivider'

export default async function HomeHero() {
  const supabase = await createClient()
  const { data: heroImgData } = supabase.storage
    .from('publicMedia')
    .getPublicUrl('pavones-boxing-club-hero-image-teep-1.jpg')

  return (
    <>
      <div className="flex w-full flex-col-reverse items-center gap-16 lg:flex-row">
        <div className="flex items-center justify-center gap-8">
          <Image
            src={heroImgData.publicUrl}
            alt="Pavones Boxing and Muay Thai Club Trainer and Student"
            width={600}
            height={600}
            priority
          />
        </div>
        <div>
          <h1 className="text-center">Pavones Boxing and Muay Thai Club</h1>
          <SectionDivider />
          <h2 className="mx-auto max-w-xl text-center !leading-tight">
            The original boxing and muay thai club in
            <br />
            Pavones, Costa Rica
          </h2>
        </div>
      </div>
      <SectionDivider />
    </>
  )
}
