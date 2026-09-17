import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ShopBestsellers from "@/components/ShopBestsellers";
import AtelierOffer from "@/components/AtelierOffer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-full flex-1 overflow-x-hidden bg-[#FAF7F2] text-[#121212]">
      <div className="swastik-grain" aria-hidden="true" />
      <Navigation />
      <Hero />
      <ShopBestsellers />
      <AtelierOffer />
      <Footer />
    </main>
  );
}
