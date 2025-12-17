import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import PricingPage from "@/components/custom/PricingPage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PricingPage />
    </main>
  );
}
