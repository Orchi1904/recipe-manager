import {
  noRecipeFoundHeadlineFallback,
  noRecipeFoundTextFallback,
} from "@/helper/fallbacks";
import { getNoRecipeFoundError } from "@/lib/fetchData";

async function RecipeNotFound() {
  const noRecipeFoundError: NoRecipeFoundError = await getNoRecipeFoundError();
  const noRecipeFoundHeadline =
    noRecipeFoundError.headline ?? noRecipeFoundHeadlineFallback;
  const noRecipeFoundText =
    noRecipeFoundError.text ?? noRecipeFoundTextFallback;

  return (
    <div className="flex flex-col gap-4 h-screen mt-14 text-center md:mt-20">
      <h3 className="font-bold text-2xl md:text-3xl">
        {noRecipeFoundHeadline}
      </h3>
      <p className="md:text-lg">{noRecipeFoundText}</p>
    </div>
  );
}

export default RecipeNotFound;
