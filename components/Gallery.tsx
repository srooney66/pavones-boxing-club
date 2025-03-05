import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const galleryImgUrlArr: string[] = [
  "https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-student-pad-holding-boxing-mits.jpg",
  "https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-coach-pierre-holding-boxing-mits.jpg",
  "https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-athlete-muay-thai-clinch.jpg",
  "https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-group-class-boxing-and-muay-thai.jpg",
  "https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/pavones-boxing-club-trainer-coach-pierre-holding-muay-thai-pads.jpg",
];

export default function Gallery() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[80%] mx-auto justify-center md:w-full"
    >
      <CarouselContent>
        {galleryImgUrlArr.map((url, i) => (
          // 50% on small screens and 33% on larger screens.
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="relative w-full h-[400px] p-4">
              <Image
                src={url}
                alt={`Pavones Boxing and Muay Thai Club Gallery Image ${i}`}
                fill
                quality={80}
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
