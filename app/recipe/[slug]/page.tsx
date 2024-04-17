import { getRecipeFull } from "@/lib/fetchData";
import { urlFor } from "@/sanity/urlFor";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

/* Todo: Für große Bildschirme anpassen */

async function Recipe({ params }: { params: { slug: string } }) {
  const recipeData: RecipeFull = await getRecipeFull(params.slug);
  console.log(recipeData);

  if (!recipeData) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="font-tilt font-bold text-2xl px-4 mb-4">
        {recipeData.title}
      </h1>
      <div className="relative h-64 mb-4">
        <Image
          src={urlFor(recipeData.image)}
          alt={recipeData.image.alt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="px-4 flex flex-col gap-4">
        <div className="flex justify-around">
          <div className="border rounded-xl border-black bg-gray-100 text-center px-2 py-2">
            <p className="font-bold text-base">Bewertung</p>
            <p className="font-bold text-2xl text-lime-600">
              {recipeData.rating}
            </p>
            <p className="text-sm text-gray-500">von 10</p>
          </div>
          <div className="border rounded-xl border-black bg-gray-100 text-center px-2 py-2">
            <p className="font-bold">Arbeitszeit</p>
            <p className="font-bold text-2xl text-lime-600">
              {recipeData.prep_time}
            </p>
            <p className="text-sm text-gray-500">Min.</p>
          </div>
        </div>

        <p>{recipeData.intro_description}</p>

        <hr />

        <h2 className="font-marker text-xl">ZUTATEN</h2>
        <ul>
          {recipeData.ingredients.map((item) => (
            <li
              className="grid grid-cols-3 gap-4 py-1 odd:bg-lime-100"
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

        <h2 className="font-marker text-xl">ZUBEREITUNG</h2>
        <div className="prose prose-li:marker:text-lime-500">
          <PortableText value={recipeData.preparation} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
