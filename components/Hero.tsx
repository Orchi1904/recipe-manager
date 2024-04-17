import Image from "next/image";
import { getHero } from "@/lib/fetchData";
import { urlFor } from "@/sanity/urlFor";
import { bgAltFallback, sloganFallback } from "@/helper/fallbacks";

/* Todo: revalidate auf längere Zeit anpassen */
async function Hero() {
  const heroData: HeroData = await getHero();

  const bgImageUrl = urlFor(heroData.image);
  const alt = heroData.image.alt ? heroData.image.alt : bgAltFallback;
  const slogan = heroData.slogan ? heroData.slogan : sloganFallback;

  return (
    <section className="bg-gradient-to-r from-black from-70% to-white rounded-lg relative h-[160px] sm:h-[220px] md:h-[320px] lg:h-[420px]">
      <Image
        src={bgImageUrl}
        alt={alt}
        fill
        priority
        className="rounded-lg opacity-80 object-cover"
      />
      <h1 className="absolute flex items-center top-0 left-4 w-[50%] h-full text-xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {slogan}
      </h1>
    </section>
  );
}

export default Hero;
