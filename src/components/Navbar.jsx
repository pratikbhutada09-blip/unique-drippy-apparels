import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '#collections' },
    { name: 'Customize', path: '#customize' },
    { name: 'Corporate Orders', path: '#corporate' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start z-50">
          <div className="flex items-end">
            <span className="font-logo text-3xl tracking-wide text-white">uni</span>
            <span className="font-logo text-4xl text-brand-teal ml-1">क</span>
          </div>
          <span className="font-sans text-xs tracking-widest text-brand-accent uppercase mt-[-4px]">Drippy Apparels</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.path} className="text-sm font-medium text-gray-300 hover:text-white hover:text-brand-accent transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://instagram.com/unique_drippyapparels" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-brand-accent transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/919422689726" target="_blank" rel="noreferrer" className="bg-brand-teal hover:bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2">
            <Phone size={16} />
            <span>Order Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-dark flex flex-col justify-center items-center space-y-8 z-40"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold text-white hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 mt-8">
              <a href="https://instagram.com/unique_drippyapparels" className="text-white hover:text-brand-accent">
                <Instagram size={32} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
