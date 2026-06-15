import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "Collections",
      link: "#collections",
    },
    {
      title: "Customize",
      link: "#customize",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a href="#home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-display font-bold tracking-wider"
            >
              <span className="text-white">Uni</span>

              <span className="text-brand-accent">क</span>

              <span className="text-brand-teal"> Drippy</span>
            </motion.div>
          </a>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-8">

            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-white hover:text-brand-accent transition duration-300 uppercase tracking-widest text-sm"
              >
                {item.title}
              </a>
            ))}

            <a
              href="#collections"
              className="px-5 py-2 rounded-full bg-brand-accent text-black font-bold hover:bg-brand-teal hover:text-white transition duration-300"
            >
              Shop Now
            </a>

          </div>

          {/* Mobile Icon */}

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-black/95 backdrop-blur-xl"
        >
          <div className="flex flex-col py-6">

            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-center text-white hover:text-brand-accent uppercase tracking-widest"
              >
                {item.title}
              </a>
            ))}

            <div className="px-6 mt-4">

              <a
                href="#collections"
                className="block text-center py-3 rounded-lg bg-brand-accent text-black font-bold"
              >
                Shop Now
              </a>

            </div>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
