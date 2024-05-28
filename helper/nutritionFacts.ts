const desiredNutritionFactsOrder = [
  "calories",
  "fat",
  "saturated_fat",
  "carbohydrates",
  "sugar",
  "protein",
];

export const getFormattedNutritionFacts = (nutritionFacts: NutritionFacts) => {
  const formattedNutritionFacts = Object.keys(nutritionFacts).map((key) => {
    return {
      name: key,
      value: nutritionFacts[key as keyof NutritionFacts],
      unit: key === "calories" ? "kcal" : "g",
    };
  });

  // Sorts nutrition facts as desired
  return formattedNutritionFacts.sort(
    (a, b) =>
      desiredNutritionFactsOrder.indexOf(a.name) -
      desiredNutritionFactsOrder.indexOf(b.name)
  );
};

export const translateNutritionName = {
  calories: "Kalorien",
  fat: "Fett",
  saturated_fat: "davon gesättigt",
  carbohydrates: "Kohlenhydrate",
  sugar: "davon Zucker",
  protein: "Eiweiß",
};
