type HeroData = {
  slogan: string;
  image: SanityImageSource;
};

type RecipePreview = {
  title: string;
  image: SanityImageSource;
  _updatedAt: string;
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
  ingredients: {
    amount: number;
    unit: string;
    ingredient_name: string;
    _key: string;
  }[];
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
