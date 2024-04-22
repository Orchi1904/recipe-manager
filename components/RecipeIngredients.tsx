"use client";

import { useState } from "react";
import RecipePortionSelector from "./RecipePortionSelector";

function RecipeIngredients({ ingredients }: { ingredients: Ingredient[] }) {
  const [portionCount, setPortionCount] = useState(1);

  return (
    <div>
      <RecipePortionSelector
        portionCount={portionCount}
        setPortionCount={setPortionCount}
      />
      <ul>
        {ingredients.map((item) => {
          const ingredientAmount = item.amount && item.amount * portionCount;

          return (
            <li
              className="grid grid-cols-3 gap-4 py-1 odd:bg-rm_background md:gap-8 md:text-lg"
              key={item._key}
            >
              <span className="col-span-1 text-end flex justify-end items-center">
                {ingredientAmount?.toLocaleString("de-DE")} {item.unit}
              </span>
              <span className="col-span-2 flex items-center">
                {item.ingredient_name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeIngredients;
