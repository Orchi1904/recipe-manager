import Fuse from "fuse.js";

export const filterRecipes = (
  unfilteredRecipes: RecipePreview[],
  searchTerm: string,
  sorting: string,
  filters: string[]
) => {
  let filteredRecipes = search(unfilteredRecipes, searchTerm);
  filteredRecipes = sort(filteredRecipes, sorting);
  filteredRecipes = filter(filteredRecipes, filters);
  return filteredRecipes;
};

const getTime = (timestamp: string) => {
  return new Date(timestamp).getTime();
};

const search = (unsearchedRecipes: RecipePreview[], searchTerm: string) => {
  const fuzzySearchOptions = {
    keys: ["title"],
    threshold: 0.3,
    distance: 100,
  };
  const fuzzySearch = new Fuse(unsearchedRecipes, fuzzySearchOptions);

  return searchTerm
    ? fuzzySearch.search(searchTerm).map((result) => result.item)
    : unsearchedRecipes;
};

const sort = (unsortedRecipes: RecipePreview[], sorting: string) => {
  switch (sorting) {
    case "best":
      return unsortedRecipes.sort((a, b) => b.rating - a.rating);
    case "fastest":
      return unsortedRecipes.sort((a, b) => a.prep_time - b.prep_time);
    default:
      return unsortedRecipes.sort(
        (a, b) => getTime(b._createdAt) - getTime(a._createdAt)
      );
  }
};

const filter = (unfilteredRecipes: RecipePreview[], filters: string[]) => {
  if (filters.length > 0) {
    return unfilteredRecipes.filter((recipe) =>
      filters.every((filter) => recipe.tags.includes(filter))
    );
  } else {
    return unfilteredRecipes;
  }
};
