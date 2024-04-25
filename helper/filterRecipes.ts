import Fuse from "fuse.js";

export const filterRecipes = (
  unfilteredRecipes: RecipePreview[],
  searchTerm: string,
  sorting: string
) => {
  let filteredRecipes = search(unfilteredRecipes, searchTerm);
  sort(filteredRecipes, sorting);
  return filteredRecipes;
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
    case "rating":
      unsortedRecipes.sort((a, b) => b.rating - a.rating);
      break;
    case "time":
      unsortedRecipes.sort((a, b) => a.prep_time - b.prep_time);
      break;
    default:
      return unsortedRecipes.sort(
        (a, b) => getTime(a._createdAt) - getTime(b._createdAt)
      );
  }
};

const getTime = (timestamp: string) => {
  return new Date(timestamp).getTime();
};