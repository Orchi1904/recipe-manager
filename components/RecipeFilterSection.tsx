"use client";

import Search from "./Search";

type Props = {
  searchPlaceholder?: string;
};

function RecipeFilterSection({ searchPlaceholder }: Props) {
  return (
    <section>
      <Search placeholder={searchPlaceholder} />
    </section>
  );
}

export default RecipeFilterSection;
