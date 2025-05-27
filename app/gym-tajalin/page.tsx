import Gallery from '@/components/Gallery'
import SectionDivider from '@/components/global/SectionDivider'
import Image from 'next/image'

export default function GymTajalin() {
  return (
    <>
      <div className="flex w-full flex-col-reverse items-center gap-16 lg:flex-row">
        <Image
          src={
            'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/gym-tajalin-logo.jpg'
          }
          alt="Gym Tajalin | Playa Pavones, Zona Sur, Costa Rica | Weightlifting, Boxing and Muay Thai"
          width={400}
          height={400}
          priority
        />
        <div className="flex w-full flex-col justify-center text-center">
          <h2>About Gym Tajalin</h2>
          <SectionDivider />
          <div className="">
            <p className="mx-auto max-w-[800px]">
              <em>Sayd confirmará qué texto va aquí.</em>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6 px-4">
        <SectionDivider />
        <Gallery />
      </div>
    </>
  )
}
