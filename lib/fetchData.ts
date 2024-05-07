import { client } from "./sanityClient";

export async function getHero() {
  const query = `*[_type == "homepage"]{
        hero{
          slogan,
          image,
        }
      }[0]`;

  const data = await client.fetch(query);

  return data.hero;
}

export async function getRecipeFilterData() {
  const query = `*[_type == "homepage"]{
    search_recipe_placeholder,
    sort_recipe_placeholder,
    sort_recipe_values,
    filter_recipe_placeholder,
    filter_recipe_values
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export async function getNoRecipeFoundError() {
  const query = `*[_type == "homepage"]{
    no_recipe_found{
      text,
      headline
    }
  }[0]`;

  const data = await client.fetch(query);

  return data.no_recipe_found;
}

export async function getRecipePreviews() {
  const query = `*[_type == "recipe"]{
    title,
    image,
    _createdAt,
    "current_slug": slug.current,
    intro_description,
    rating,
    prep_time,
    tags
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getFooter() {
  const query = `*[_type == "footer"]{
    contact_options_title,
    contact_options
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export async function getRecipeFull(slug: string) {
  const query = `*[_type == "recipe" && slug.current == "${slug}"]{
    image,
    title,
    intro_description,
    prep_time,
    rating,
    ingredients,
    preparation,
    tags
  }[0]`;

  const data = await client.fetch(query);

  return data;
}
