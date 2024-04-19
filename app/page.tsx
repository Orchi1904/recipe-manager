import Hero from "@/components/Hero";
import RecipeCardSection from "@/components/RecipeCardSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 space-y-6">
      <Hero />
      <RecipeCardSection />
    </main>
  );
}
