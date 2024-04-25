import Hero from "@/components/Hero";
import RecipeCardSection from "@/components/RecipeCardSection";

export default function Home({
  searchParams,
}: {
  searchParams?: { search?: string; sort?: string };
}) {
  const searchTerm = searchParams?.search || "";
  const sorting = searchParams?.sort || "";

  return (
    <main className="w-full max-w-7xl mx-auto px-4 space-y-6">
      <Hero />
      <RecipeCardSection searchTerm={searchTerm} sorting={sorting} />
    </main>
  );
}
