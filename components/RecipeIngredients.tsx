function RecipeIngredients({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ul>
      {ingredients.map((item) => (
        <li
          className="grid grid-cols-3 gap-4 py-1 odd:bg-rm_background md:gap-8 md:text-lg"
          key={item._key}
        >
          <span className="col-span-1 text-end flex justify-end items-center">
            {item.amount?.toLocaleString("de-DE")} {item.unit}
          </span>
          <span className="col-span-2 flex items-center">
            {item.ingredient_name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default RecipeIngredients;
