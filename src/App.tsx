import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { User } from "lucide-react";
import Navigation from "./components/Navigation";
import HomeSection from "./components/HomeSection";
import ResumeSection from "./components/ResumeSection";
import PortfolioSection from "./components/PortfolioSection";
import ProductsSection from "./components/ProductsSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection key="home" />;
      case "resume":
        return <ResumeSection key="resume" />;
      case "portfolio":
        return <PortfolioSection key="portfolio" />;
      case "products":
        return <ProductsSection key="products" />;
      default:
        return <HomeSection key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-dark selection:bg-brand-lime selection:text-brand-olive">
      {/* Top Left Logo/Brand */}
      <div 
        onClick={() => setActiveSection("home")}
        className="fixed top-6 left-6 lg:left-8 z-50 hidden md:flex items-center gap-2.5 bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm px-4 py-2.5 rounded-full cursor-pointer hover:bg-white/90 transition-colors"
      >
        <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center">
          <User className="w-3.5 h-3.5 text-brand-olive" />
        </div>
        <span className="font-bold text-brand-olive text-sm tracking-wide">Elden-王等等的个人主页</span>
      </div>

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </main>
    </div>
  );
}
