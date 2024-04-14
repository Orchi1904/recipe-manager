import Image from "next/image";
import { getHero } from "@/lib/fetchData";
import { urlFor } from "@/sanity/urlFor";

/* Todo: Untersuchen, warum Sanity image nich verwendet wird (upstream image response failed) + Slogan von Sanity nutzen + revalidate + Fallback */
async function Hero() {
  const heroData: HeroData = await getHero();
  console.log(heroData);
  const bgImageUrl = heroData.image
    ? urlFor(heroData.image).url()
    : "/assets/Hero.jpg";

  return (
    <section className="bg-gradient-to-r from-black from-70% to-white rounded-lg relative mt-4 md:mt-8 h-[160px] sm:h-[220px] md:h-[320px] lg:h-[420px]">
      <Image
        src={bgImageUrl}
        alt={heroData.image.alt} //fallback hinzufügen
        fill
        priority
        className="rounded-lg opacity-80 object-cover"
      />
      <h1 className="absolute flex items-center top-0 left-4 w-[50%] h-full text-xl font-bold text-white line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
        Lass Dich von unseren Rezepten inspirieren
      </h1>
    </section>
  );
}

export default Hero;
