import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <WhatWeDoSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
