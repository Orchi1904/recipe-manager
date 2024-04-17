import { getRecipePreviews } from "@/lib/fetchData";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/urlFor";
import TimerIcon from "@mui/icons-material/Timer";
import Link from "next/link";

// Todo: Fallback implementieren, falls keine Rezepte gefunden wurden

async function RecipeSection() {
  const recipePreviews: RecipePreview[] = await getRecipePreviews();

  return (
    <section>
      <h2 className="font-marker text-3xl">REZEPTE</h2>

      {/*Todo: Suche, Filter & Co. einbauen*/}

      <div className="grid gap-5 my-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipePreviews.map((item) => {
          const recipeImage = urlFor(item.image);

          return (
            <Link href={`/recipe/${item.current_slug}`} key={item.current_slug}>
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
                  <div className="flex justify-between items-end flex-1 sm:justify-start">
                    <div className="border font-bold rounded-full w-7 text-center text-lime-600 border-lime-600">
                      <p>{item.rating}</p>
                    </div>
                    <span className="hidden sm:block h-7 border border-gray-500 mx-1" />
                    <div className="flex items-center">
                      <TimerIcon className="text-xl text-lime-600 mr-1" />
                      <p className="text-gray-500">{item.prep_time} Min.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default RecipeSection;