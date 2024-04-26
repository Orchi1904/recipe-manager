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
};

type RecipePreview = {
  title: string;
  image: SanityImageSource;
  _createdAt: string;
  current_slug: string;
  intro_description: string;
  rating: number;
  prep_time: number;
};

type RecipeFull = {
  title: string;
  image: SanityImageSource;
  intro_description: string;
  rating: number;
  prep_time: number;
  preparation: any;
  ingredients: Ingredient[];
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
