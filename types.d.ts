type HeroData = {
  slogan: string;
  image: SanityImageSource;
};

type NoRecipeFoundError = {
  text: string;
  headline: string;
};

type RecipeFilterData = {
  search_recipe_placeholder: string;
  sort_recipe_placeholder: string;
  sort_recipe_values: SortRecipeValues[];
  filter_recipe_placeholder: string;
  filter_recipe_values: FilterRecipeValues[];
};

type RecipePreview = {
  title: string;
  image: SanityImageSource;
  _createdAt: string;
  current_slug: string;
  intro_description: string;
  rating: number;
  prep_time: number;
  tags: string[];
};

type RecipeFull = {
  title: string;
  image: SanityImageSource;
  intro_description: string;
  rating: number;
  prep_time: number;
  preparation: any;
  ingredients: Ingredient[];
  nutrition_facts: NutritionFacts;
  tags: string[];
};

type FooterData = {
  contact_options_title: string;
  contact_options: {
    contact_href: string;
    contact_option: string;
    _key: string;
  }[];
};

type SocialMediaLinks = {
  [key: string]: (href: string, mapKey?: string) => JSX.Element;
};

type TagBuilder = {
  [key: string]: JSX.Element;
};

type Ingredient = {
  amount: number;
  unit: string;
  ingredient_name: string;
  _key: string;
};

type SortRecipeValues = {
  sort_title: string;
  _type: string;
  sort_value: string;
  _key: string;
};

type FilterRecipeValues = {
  filter_title: string;
  _type: string;
  filter_value: string;
  _key: string;
};

type NutritionFacts = {
  calories: number;
  fat: number;
  saturated_fat: number;
  carbohydrates: number;
  sugar: number;
  protein: number;
};
