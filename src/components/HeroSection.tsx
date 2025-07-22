import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="min-h-screen relative bg-navy text-text-light flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 37, 86, 0.8), rgba(33, 37, 86, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <p className="text-sm uppercase tracking-wider mb-4 text-gold">
          Nigeria's First Voice AI Lead Engine
        </p>
        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
          YOUR CUSTOMERS ARE TALKING.<br />
          <span className="text-gold">NOW YOUR BUSINESS CAN LISTEN.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          Deploy a voice-first AI agent in 24 hours. Built for Nigeria. Available on WhatsApp, Web, and Phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green text-white hover:bg-green/90 px-8 py-3 text-lg">
            Try Voice Agent Now
          </Button>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3 text-lg">
            WhatsApp Our AI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;