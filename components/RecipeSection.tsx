import { getRecipePreviews } from "@/lib/fetchData";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/urlFor";
import TimerIcon from "@mui/icons-material/Timer";
import Link from "next/link";

async function RecipeSection() {
  const recipePreviews: RecipePreview[] = await getRecipePreviews();
  console.log(recipePreviews);

  return (
    <section>
      <h2 className="font-marker text-3xl">REZEPTE</h2>

      {/*Todo: Suche, Filter & Co. einbauen*/}

      <div className="grid gap-5 my-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipePreviews.map((item) => {
          const recipeImage = urlFor(item.image);

          {
            /*Next Todo: Ansicht auf größere Seiten optimieren*/
          }

          return (
            <Link href={`/recipe/${item.current_slug}`} key={item.current_slug}>
              <Card className="h-full">
                <CardHeader className="px-0 py-0 w-full h-32 sm:h-40 md:h-60 relative">
                  <Image
                    src={recipeImage}
                    alt={item.image.alt}
                    fill
                    className="rounded-lg h-10 w-10 object-cover"
                  />
                </CardHeader>
                <CardContent className="px-2 py-2 space-y-2">
                  <h3 className="line-clamp-3 font-tilt font-bold text-lg hyphens-auto leading-5">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 hyphens-auto text-sm text-gray-500 leading-4">
                    {item.intro_description}
                  </p>
                  <div className="flex justify-between">
                    <div className="border font-bold rounded-full w-7 text-center text-lime-600 border-lime-600">
                      <p>{item.rating}</p>
                    </div>
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
