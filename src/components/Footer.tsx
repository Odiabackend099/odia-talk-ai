const Footer = () => {
  return (
    <footer className="bg-navy-deep text-text-light py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="border border-text-light p-4 text-center mb-6 w-24">
              <div className="text-lg font-bold">ODIA</div>
              <div className="text-xs">VOICE AI</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>hello@odia.ltd</p>
              <p>+234 810 578 6326</p>
              <p>170 Golden Spring Estate</p>
              <p>Galadimwa, Abuja, Nigeria</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gold hover:text-white transition-colors">WhatsApp</a>
              <a href="#" className="block text-gold hover:text-white transition-colors">TikTok</a>
              <a href="#" className="block text-gold hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gold hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gold hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="block text-gold hover:text-white transition-colors">ADV Form</a>
              <a href="#" className="block text-gold hover:text-white transition-colors">CRS Form</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-400 mb-4">
            © 2024 ODIA AI LLC. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            © 2024 ODIA AI LLC. All Rights Reserved. / The content of this website is for general, informational purposes. Nothing contained on this website should be construed as an offer to sell or the solicitation of any offer to buy any security or other financial instrument or product offered or managed by ODIA or any other issuer or company. The provision of this information does not constitute the rendering of investment, consulting, legal, accounting, tax or other professional advice or services. The information on this website should not be the basis of or be relied upon for making investment, financial or other decisions regarding investments or other matters, nor should it be construed as advice, endorsement or recommendation. Special Notice to Non-U.S. Investors: Each of the investment products and services referred to on this website is intended to be made available to U.S. residents. This website shall not be considered a solicitation or offering for any investment product or service to any person in any jurisdiction where such solicitation or offer would be unlawful.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;