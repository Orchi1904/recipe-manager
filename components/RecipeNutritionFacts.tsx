/* Todo: Für größere Bildschirme anpassen (auch bei RecipeIngredients schauen, was da für größere Bildschirme eingestellt wurde )
         + In Komponenten aufteilen oder mapen (vlt sogar eher mapen)
         + Tailwind-Klassen überprüfen
         + - PRO PORTION - als Unterüberschrift für die Recipe Detail Section
         + Sanity anbinden  */

function RecipeNutritionFacts() {
  const calories = 20000;
  const fat = 20;
  const carbs = 50000;
  const protein = 10;

  return (
    <ul className="w-full">
      <li className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg">
        <span className="col-span-6">Kalorien</span>

        <span className="flex justify-end items-center col-span-4">
          {calories.toLocaleString("de-DE")} kcal
        </span>
      </li>

      <li className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg">
        <span className="col-span-6">Fett</span>

        <span className="flex justify-end items-center col-span-4">
          {fat.toLocaleString("de-DE")} g
        </span>
      </li>

      <li className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg">
        <span className="ml-3 col-span-6">davon gesättigt</span>

        <span className="flex justify-end items-center col-span-4">
          {fat.toLocaleString("de-DE")} g
        </span>
      </li>

      <li className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg">
        <span className="col-span-6">Kohlenhydrate</span>

        <span className="flex justify-end items-center col-span-4">
          {carbs.toLocaleString("de-DE")} g
        </span>
      </li>

      <li className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg">
        <span className="ml-3 col-span-6">davon Zucker</span>

        <span className="flex justify-end items-center col-span-4">
          {fat.toLocaleString("de-DE")} g
        </span>
      </li>

      <li className="grid grid-cols-10 gap-2 px-8 py-1 odd:bg-rm_background md:text-lg">
        <span className="col-span-6">Eiweiß</span>

        <span className="col-span-4 text-end">
          {protein.toLocaleString("de-DE")} g
        </span>
      </li>
    </ul>
  );
}

export default RecipeNutritionFacts;
