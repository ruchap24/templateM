import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import PricingPage from "@/components/custom/PricingPage";
import Footer from "@/components/custom/Footer";
import EmailFeatureSection from "@/components/custom/EmailFeatureSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EmailFeatureSection />
      <PricingPage />
      <Footer />
    </main>
  );
}
