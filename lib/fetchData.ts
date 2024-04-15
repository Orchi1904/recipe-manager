import { client } from "@/sanity/client";

export async function getHero() {
  const query = `*[_type == "homepage"]{
        hero{
          slogan,
          image,
        }
      }`;

  const data = await client.fetch(query);

  return data[0].hero;
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
