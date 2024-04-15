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
