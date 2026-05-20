import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-end">
                <span className="font-display font-bold text-3xl tracking-wide text-white">uni</span>
                <span className="font-display font-bold text-4xl text-brand-teal ml-1">क</span>
              </div>
              <span className="font-sans text-xs tracking-widest text-brand-accent uppercase mt-[-4px]">Drippy Apparels</span>
            </div>
            <p className="text-sm text-gray-400">
              Youth-focused custom streetwear and apparel brand specializing in tie & dye, oversized fashion, and customized printing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg font-display tracking-wide">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#collections" className="hover:text-brand-accent transition-colors">Collections</a></li>
              <li><a href="#customize" className="hover:text-brand-accent transition-colors">Customize</a></li>
              <li><a href="#corporate" className="hover:text-brand-accent transition-colors">Corporate Orders</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg font-display tracking-wide">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-teal" />
                <span>Sharayu: <a href="tel:9422689726" className="hover:text-white">+91 9422689726</a></span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-teal" />
                <span>Pratik: <a href="tel:8888058587" className="hover:text-white">+91 8888058587</a></span>
              </li>
              <li className="flex items-start space-x-3 mt-2">
                <MapPin size={16} className="text-brand-teal flex-shrink-0 mt-1" />
                <span>Available for online orders and bulk corporate deliveries.</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg font-display tracking-wide">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/unique.drippyapparels" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-brand-accent hover:text-black transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Uniक Drippy Apparels. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Culture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
