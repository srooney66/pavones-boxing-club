import AboutPBC from "@/components/AboutPBC";
import Gallery from "@/components/Gallery";
import SectionDivider from "@/components/global/SectionDivider";
import HomeHero from "@/components/HomeHero";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <AboutPBC />
      <SectionDivider />
      <Gallery />
    </>
  );
}
