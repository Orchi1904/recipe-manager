import { getRecipePreviews } from "@/lib/fetchData";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { urlFor } from "@/lib/sanityUrlFor";
import Link from "next/link";
import RecipeRating from "./RecipeRating";
import RecipeNotFound from "./RecipeNotFound";
import RecipeFilterSection from "./RecipeFilterSection";
import { filterRecipes } from "@/helper/filterRecipes";

type Props = {
  searchTerm: string;
  sorting: string;
};

async function RecipeCardSection({ searchTerm, sorting }: Props) {
  const unfilteredRecipePreviews: RecipePreview[] = await getRecipePreviews();

  const recipePreviews = filterRecipes(
    unfilteredRecipePreviews,
    searchTerm,
    sorting
  );
  const recipesFound = recipePreviews && recipePreviews.length;

  return (
    <section>
      <h2 className="font-caveat font-bold text-4xl mb-2">REZEPTE</h2>
      <RecipeFilterSection />

      {/*Todo: Filter einbauen*/}

      {recipesFound ? (
        <div className="grid gap-5 my-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipePreviews.map((item) => {
            const recipeImage = urlFor(item.image);

            return (
              <Link
                href={`/recipe/${item.current_slug}`}
                key={item.current_slug}
              >
                <Card className="h-full group flex flex-col">
                  <CardHeader className="px-0 py-0 w-full h-32 sm:h-40 md:h-60 relative rounded-lg overflow-hidden">
                    <Image
                      src={recipeImage}
                      alt={item.image.alt}
                      fill
                      className="h-10 w-10 object-cover md:group-hover:scale-110 md:duration-500"
                    />
                  </CardHeader>

                  <CardContent className="px-2 py-2 space-y-2 flex-1 flex flex-col">
                    <h3 className="line-clamp-3 font-tilt font-bold text-lg hyphens-auto leading-5">
                      {item.title}
                    </h3>

                    <p className="line-clamp-2 hyphens-auto text-sm text-gray-500 leading-4">
                      {item.intro_description}
                    </p>

                    <div className="flex items-end flex-1">
                      <RecipeRating
                        rating={item.rating}
                        prepTime={item.prep_time}
                        ratingStyle="md:font-bold"
                        dividerStyle="md:h-7"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <RecipeNotFound />
      )}
    </section>
  );
}

export default RecipeCardSection;
