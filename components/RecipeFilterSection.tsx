"use client";

import Search from "./Search";
import Sort from "./Sort";

type Props = {
  searchPlaceholder?: string;
};

function RecipeFilterSection({ searchPlaceholder }: Props) {
  return (
    <section className="flex flex-col gap-2">
      <Search placeholder={searchPlaceholder} />
      <Sort />
    </section>
  );
}

export default RecipeFilterSection;
