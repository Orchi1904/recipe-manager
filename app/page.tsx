import Hero from "@/components/Hero";
import RecipeSection from "@/components/RecipeSection";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 space-y-6">
      <Hero />
      <RecipeSection />
    </main>
  );
}
