import Image from "next/image";
import { getHero } from "@/lib/fetchData";
import { urlFor } from "@/lib/sanityUrlFor";
import { bgAltFallback, sloganFallback } from "@/helper/fallbacks";

async function Hero() {
  const heroData: HeroData = await getHero();

  const bgImageUrl = urlFor(heroData.image);
  const alt = heroData.image.alt ?? bgAltFallback;
  const slogan = heroData.slogan ?? sloganFallback;

  return (
    <section className="bg-gradient-to-r from-black from-80% to-white rounded-lg relative h-[160px] sm:h-[220px] md:h-[320px] lg:h-[420px]">
      <Image
        src={bgImageUrl}
        alt={alt}
        fill
        priority
        className="rounded-lg opacity-75 object-cover"
      />
      <h1 className="absolute flex items-center top-0 left-4 w-[50%] h-full text-xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {slogan}
      </h1>
    </section>
  );
}

export default Hero;
