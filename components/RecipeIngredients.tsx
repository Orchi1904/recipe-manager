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
              className="grid grid-cols-3 gap-4 py-1 odd:bg-rm_background md:gap-8 group"
              key={item._key}
            >
              <span className="col-span-1 text-end flex justify-end items-center">
                <span className="text-start flex items-center flex-1 ml-2 xsm:ml-4 sm:ml-6 md:ml-8 lg:ml-10">
                  <input
                    type="checkbox"
                    className="accent-rm_footer hover:cursor-pointer"
                    id={`${item.ingredient_name}`}
                    name={`${item.ingredient_name}`}
                  />
                  <label
                    htmlFor={`${item.ingredient_name}`}
                    className="sr-only"
                  >
                    Cross out {item.ingredient_name}
                  </label>
                </span>
                <span className="relative flex items-center group-has-[:checked]:text-gray-600 group-has-[:checked]:italic">
                  {ingredientAmount?.toLocaleString("de-DE")} {item.unit}
                  <span className="hidden group-has-[:checked]:block absolute border border-b-0 border-black left-0 right-0"></span>
                </span>
              </span>
              <span className="col-span-2 flex items-center w-fit relative group-has-[:checked]:text-gray-600 group-has-[:checked]:italic">
                {item.ingredient_name}
                <span className="hidden group-has-[:checked]:block absolute border border-b-0 border-black -left-4 md:-left-8 right-0"></span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeIngredients;
