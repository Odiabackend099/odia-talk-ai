import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider mb-4 text-navy">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-8">
            YOUR BEST INTEREST IS OUR<br />
            <span className="text-green">BEST INTEREST</span>
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-8">
            Fiduciaries, investors, and advisors. We are not just one, we are all, and we have over 30 years of cycle-tested experience demonstrating it. Additionally, as a predominantly employee-owned and independent firm, we have the flexibility to seek solutions tailored to your needs.
          </p>
          <p className="text-lg italic text-navy mb-12">
            All investment advisers have a fiduciary duty to act in their clients' best interests
          </p>
        </div>

        <div className="relative mb-12">
          <img 
            src={teamPhoto} 
            alt="ODIA Team" 
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-lg"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green text-white hover:bg-green/90 px-8 py-3">
            Meet The Team
          </Button>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3">
            Our Culture
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;