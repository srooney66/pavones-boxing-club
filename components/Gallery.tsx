import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import Image from 'next/image'

const galleryImages = [
  {
    url: 'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-student-pad-holding-boxing-mits.jpg',
    alt: 'Boxing pad training session with trainer and student at Pavones Boxing Club'
  },
  {
    url: 'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-coach-pierre-holding-boxing-mits.jpg',
    alt: 'Coach Pierre holding boxing mitts during training at Pavones Boxing Club'
  },
  {
    url: 'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-athlete-muay-thai-clinch.jpg',
    alt: 'Muay Thai clinch technique demonstration at Pavones Boxing Club'
  },
  {
    url: 'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-group-class-boxing-and-muay-thai.jpg',
    alt: 'Group boxing and Muay Thai class in session at Pavones Boxing Club'
  },
  {
    url: 'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-coach-pierre-holding-muay-thai-pads.jpg',
    alt: 'Coach Pierre holding Muay Thai pads during training session'
  },
]

export default function Gallery() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="mx-auto w-full max-w-7xl"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {galleryImages.map((image, i) => (
          <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading={i < 3 ? "eager" : "lazy"}
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious 
        className="border-pbcGreen text-pbcGreen hover:bg-pbcGreen hover:text-white transition-colors"
        aria-label="View previous images" 
      />
      <CarouselNext 
        className="border-pbcGreen text-pbcGreen hover:bg-pbcGreen hover:text-white transition-colors"
        aria-label="View next images" 
      />
    </Carousel>
  )
}
