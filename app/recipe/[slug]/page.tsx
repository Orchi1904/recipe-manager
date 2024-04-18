import { getRecipeFull } from "@/lib/fetchData";
import { urlFor } from "@/sanity/urlFor";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import TimerIcon from "@mui/icons-material/Timer";

/* Todo: Konstanten für die wichtigsten Farben erstellen
         + Diese Page in Komponenten aufteilen (Eine Komponente für das Rating und die Zeit mit einstellbarer größe) */

async function Recipe({ params }: { params: { slug: string } }) {
  const recipeData: RecipeFull = await getRecipeFull(params.slug);
  console.log(recipeData);

  if (!recipeData) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="font-tilt font-bold text-2xl px-4 mb-4 md:mb-8 md:text-3xl lg:px-32">
        {recipeData.title}
      </h1>

      <div className="relative h-72 mb-4 sm:mx-4 sm:h-96 md:mb-8 md:h-[450px] lg:h-[500px] lg:mx-32">
        <Image
          src={urlFor(recipeData.image)}
          alt={recipeData.image.alt}
          fill
          priority
          className="object-cover sm:rounded-lg"
        />
      </div>

      <div className="px-4 flex flex-col gap-4 md:gap-8 lg:px-32">
        <div className="flex items-center -my-2 md:-my-6">
          <div className="flex items-center justify-center border font-bold rounded-full w-9 h-9 text-[#c4b07e] border-[#c4b07e] text-xl">
            <p>{recipeData.rating}</p>
          </div>
          <span className="h-8 border border-gray-500 mx-2" />
          <div className="flex items-center">
            <TimerIcon className="text-xl text-[#c4b07e] mr-1" />
            <p className="text-lg text-gray-500">{recipeData.prep_time} Min.</p>
          </div>
        </div>

        <p className="md:text-lg">{recipeData.intro_description}</p>

        <hr />

        <h2 className="font-caveat font-bold text-2xl md:text-3xl">ZUTATEN</h2>
        <ul>
          {recipeData.ingredients.map((item) => (
            <li
              className="grid grid-cols-3 gap-4 py-1 odd:bg-[#F7F2ED] md:gap-8 md:text-lg"
              key={item._key}
            >
              <span className="col-span-1 text-end flex justify-end items-center">
                {item.amount} {item.unit}
              </span>
              <span className="col-span-2 flex items-center">
                {item.ingredient_name}
              </span>
            </li>
          ))}
        </ul>

        <hr />

        <h2 className="font-caveat font-bold text-2xl md:text-3xl">ZUBEREITUNG</h2>
        <div className="prose prose-li:marker:text-[#806D47] min-w-full md:text-lg">
          <PortableText value={recipeData.preparation} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
