import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";
import VoiceChat from "@/components/VoiceChat";

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
      <VoiceChat />
    </div>
  );
};

export default Index;
