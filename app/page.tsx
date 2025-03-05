import AboutPBC from "@/components/AboutPBC";
import Gallery from "@/components/Gallery";
import SectionDivider from "@/components/global/SectionDivider";
import HomeHero from "@/components/HomeHero";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <AboutPBC />
        <SectionDivider />
        <Gallery />
      </main>
    </>
  );
}
