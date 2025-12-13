import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CyberTipsAccordion from "@/components/CyberTipsAccordion";
import TipsCards from "@/components/TipsCards";
import QuickTips from "@/components/QuickTips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="amenazas">
          <TipsCards />
        </section>
        <section id="consejos">
          <CyberTipsAccordion />
        </section>
        <section id="tips">
          <QuickTips />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
