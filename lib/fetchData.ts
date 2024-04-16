import { client } from "@/sanity/client";

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

export async function getRecipePreviews() {
  const query = `*[_type == "recipe"]{
    title,
    image,
    _updatedAt,
    "current_slug": slug.current,
    intro_description,
    rating,
    prep_time
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
    preparation
  }[0]`;

  const data = await client.fetch(query);

  return data;
}
