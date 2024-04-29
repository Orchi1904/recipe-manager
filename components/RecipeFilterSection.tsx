import { getRecipeFilterData } from "@/lib/fetchData";
import Search from "./Search";
import Sort from "./Sort";
import Filter from "./Filter";

async function RecipeFilterSection() {
  const recipeFilterData: RecipeFilterData = await getRecipeFilterData();

  return (
    <section className="grid gap-2 items-center md:gap-4 md:grid-cols-4">
      <Search
        className="md:col-span-2"
        placeholder={recipeFilterData.search_recipe_placeholder}
      />
      <div className="grid gap-2 min-[350px]:grid-cols-2 sm:gap-4 md:col-span-2">
        <Sort
          placeholder={recipeFilterData.sort_recipe_placeholder}
          sortValues={recipeFilterData.sort_recipe_values}
        />
        <Filter
          placeholder={recipeFilterData.filter_recipe_placeholder}
          filterValues={recipeFilterData.filter_recipe_values}
        />
      </div>
    </section>
  );
}

export default RecipeFilterSection;
