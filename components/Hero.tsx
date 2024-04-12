import Image from "next/image";
import hero from "../public/assets/Hero.jpg";

/* Todo: Sanity für Hero nutzen + Fallback */
function Hero() {
  return (
    <section className="bg-gradient-to-r from-black from-70% to-white rounded-lg relative mt-8">
      <Image
        src={hero}
        alt="Hero image"
        quality={100}
        className="rounded-lg relative opacity-80 max-h-full md:h-96 md:object-cover lg:h-[400px]"
      />
      <h1 className="absolute flex items-center top-0 left-4 w-[50%] h-full text-xl font-bold text-white line-clamp-1 sm:text-3xl md:text-4xl lg:text-5xl">
        Lass Dich von unseren Rezepten inspirieren
      </h1>
    </section>
  );
}

export default Hero;
