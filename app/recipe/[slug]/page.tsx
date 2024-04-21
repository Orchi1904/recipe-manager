import { getRecipeFull } from "@/lib/fetchData";
import { urlFor } from "@/sanity/urlFor";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import RecipeRating from "@/components/RecipeRating";
import RecipeDetailSection from "@/components/RecipeDetailSection";
import RecipeIngredients from "@/components/RecipeIngredients";

/* Todo: Portionen auswählbar machen */

async function Recipe({ params }: { params: { slug: string } }) {
  const recipeData: RecipeFull = await getRecipeFull(params.slug);

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
        <div className="-my-2 md:-my-6">
          <RecipeRating
            rating={recipeData.rating}
            prepTime={recipeData.prep_time}
            ratingStyle="!font-bold w-9 h-9 text-xl"
            dividerStyle="h-8 mx-2"
            timerIconStyle="text-xl"
            prepTimeStyle="!text-lg"
          />
        </div>

        <p className="md:text-lg">{recipeData.intro_description}</p>

        <RecipeDetailSection headline="ZUTATEN">
          <RecipeIngredients ingredients={recipeData.ingredients} />
        </RecipeDetailSection>

        <RecipeDetailSection headline="ZUBEREITUNG">
          <div className="prose prose-li:marker:text-rm_detail prose-li:marker:font-semibold prose-h3:font-normal min-w-full md:text-lg">
            <PortableText value={recipeData.preparation} />
          </div>
        </RecipeDetailSection>
      </div>
    </div>
  );
}

export default Recipe;
