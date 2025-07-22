import { Button } from "@/components/ui/button";

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider mb-4 text-navy">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-navy mb-8">
              WE ARE YOUR CHIEF<br />
              INVESTMENT<br />
              <span className="text-green">OFFICERS</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Applying our expertise and leveraging our vast network, we strive to develop customized solutions that can utilize both public markets and exclusive private investment opportunities. From sourcing, negotiating, and structuring private investments, to monitoring portfolio performance and managing risk tolerance, we are on a quest to surpass each client's financial objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3">
                The ODIA Difference
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3">
                Tech-Forward Experience
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-navy to-blue-800 p-8 rounded-lg text-white h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-6 border-l-navy border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <p className="text-lg">Voice AI Demo</p>
                <p className="text-sm text-gray-300">Click to experience our technology</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-gold/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;