import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy text-text-light px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold">ODIA</div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#home" className="hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1">
              Home
            </a>
            <a href="#what-we-do" className="hover:text-gold transition-colors">
              What We Do
            </a>
            <a href="#voice-ai" className="hover:text-gold transition-colors">
              Voice AI
            </a>
            <a href="#our-story" className="hover:text-gold transition-colors">
              Our Story
            </a>
            <a href="#team" className="hover:text-gold transition-colors">
              Team
            </a>
            <a href="#press" className="hover:text-gold transition-colors">
              Press
            </a>
            <a href="#resources" className="hover:text-gold transition-colors">
              Resources
            </a>
            <a href="#pricing" className="hover:text-gold transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-text-light hover:text-gold">
            <span className="mr-2">👤</span>
            Client Login
          </Button>
          <div className="border border-text-light p-2 text-xs font-bold">
            ODIA<br />
            <span className="text-xs">VOICE AI</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;