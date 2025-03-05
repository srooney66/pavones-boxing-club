import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import SectionDivider from "@/components/global/SectionDivider";

export default async function HomeHero() {
  const supabase = await createClient();
  const { data: heroImgData } = supabase.storage
    .from("publicMedia")
    .getPublicUrl("pavones-boxing-club-hero-image-teep-1.jpg");

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-16 items-center w-full">
        <div className="flex gap-8 justify-center items-center">
          <Image
            src={heroImgData.publicUrl}
            alt="Pavopes Boxing and Muay Thai Club Trainer and Student"
            width={600}
            height={600}
            priority
          />
        </div>
        <div>
          <h1 className="text-center">Pavones Boxing and Muay Thai Club</h1>
          <SectionDivider />
          <h2 className="!leading-tight mx-auto max-w-xl text-center">
            The original boxing and muay thai club in
            <br />
            Pavones, Costa Rica
          </h2>
        </div>
      </div>
      <SectionDivider />
    </>
  );
}
