import Hero from "@/components/Hero";

export const revalidate = 5;

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 border">
      <Hero />
    </main>
  );
}
