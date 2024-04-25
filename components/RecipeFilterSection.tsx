"use client";

import Search from "./Search";
import Sort from "./Sort";

type Props = {
  searchPlaceholder?: string;
};

function RecipeFilterSection({ searchPlaceholder }: Props) {
  return (
    <section className="grid gap-2 items-center md:gap-4 md:grid-cols-4">
      <Search className="md:col-span-2" placeholder={searchPlaceholder} />
      <Sort />
    </section>
  );
}

export default RecipeFilterSection;
