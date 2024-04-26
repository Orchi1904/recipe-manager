import { getRecipeFilterData } from "@/lib/fetchData";
import Search from "./Search";
import Sort from "./Sort";

async function RecipeFilterSection() {
  const recipeFilterData: RecipeFilterData = await getRecipeFilterData();

  return (
    <section className="grid gap-2 items-center md:gap-4 md:grid-cols-4">
      <Search
        className="md:col-span-2"
        placeholder={recipeFilterData.search_recipe_placeholder}
      />
      <Sort
        placeholder={recipeFilterData.sort_recipe_placeholder}
        sortValues={recipeFilterData.sort_recipe_values}
      />
    </section>
  );
}

export default RecipeFilterSection;
