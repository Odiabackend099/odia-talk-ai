import { Button } from "@/components/ui/button";
import voiceWave from "@/assets/voice-wave.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-navy text-text-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider mb-4 text-gold">
            What is Odia.dev?
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            INTELLECTUAL EXCELLENCE.<br />
            <span className="text-gold">EMOTIONAL CONNECTION.</span>
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-200">
            Odia.dev is Nigeria's first AI infrastructure platform for voice automation. We build intelligent voice agents that speak Nigerian English, Pidgin, Yoruba, Igbo, Hausa, and more. Our mission is simple: let businesses talk to their customers using real voice, on WhatsApp and beyond — with no human needed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={voiceWave} 
              alt="Voice AI Technology" 
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-gold/20 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-navy border-2 border-gold rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-l-gold border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-200">
              Our difference is defined by the alignment of deep internal research with the relationship side of investing. It is our intellect that drives the pursuit of investment excellence – and equally important is our empathy, which guides us in understanding each client's individual circumstances and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
                Our Story
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
                ODIA Voice Office
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;