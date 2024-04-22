
// Todo: Sanity anbinden + Fallback + Revalidate wieder zurücksetzen

function RecipeNotFound() {
  return (
    <div className="flex flex-col gap-4 h-screen mt-14 text-center md:mt-20">
      <h3 className="font-bold text-2xl md:text-3xl">Der Teller bleibt heute leer!</h3>
      <p className="md:text-lg">Wir konnten leider keine Rezepte finden...</p>
    </div>
  );
}

export default RecipeNotFound;
