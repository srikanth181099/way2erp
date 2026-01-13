import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import PricingCalculator from "@/components/PricingCalculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PricingCalculator />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
