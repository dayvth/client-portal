import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Servicos } from "@/components/Servicos";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PortfolioGrid />
        <Servicos />
      </main>
      <Footer />
    </>
  );
}
