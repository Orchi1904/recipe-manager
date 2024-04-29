import Hero from "@/components/Hero";
import RecipeCardSection from "@/components/RecipeCardSection";

export default function Home({
  searchParams,
}: {
  searchParams?: { search?: string; sort?: string; filter?: string };
}) {
  const searchTerm = searchParams?.search || "";
  const sorting = searchParams?.sort || "";
  const filter = searchParams?.filter?.split(",") || [];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 space-y-6">
      <Hero />
      <RecipeCardSection
        searchTerm={searchTerm}
        sorting={sorting}
        filters={filter}
      />
    </main>
  );
}
