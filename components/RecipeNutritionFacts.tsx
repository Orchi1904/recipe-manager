import {
  getFormattedNutritionFacts,
  translateNutritionName,
} from "@/helper/nutritionFacts";

type Props = {
  nutritionFacts: NutritionFacts;
};

function RecipeNutritionFacts({ nutritionFacts }: Props) {
  const nutritionFactsFormatted = getFormattedNutritionFacts(nutritionFacts);

  return (
    <ul className="w-full">
      {nutritionFactsFormatted.map((item) => (
        <li
          key={item.name}
          className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg"
        >
          <span
            className={`${
              item.name === "saturated_fat" || item.name === "sugar"
                ? "ml-3"
                : ""
            } col-span-6 md:col-span-5 md:pl-44 xl:pl-52`}
          >
            {translateNutritionName[item.name as keyof NutritionFacts]}
          </span>

          <span className="flex justify-end items-center col-span-4 md:col-span-5 md:pr-44 xl:pr-52">
            {item.value.toLocaleString("de-DE")} {item.unit}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default RecipeNutritionFacts;
