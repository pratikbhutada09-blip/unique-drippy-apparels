import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Collections",
      path: "/collections",
    },
    {
      title: "Customize",
      path: "/customize",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-display font-bold tracking-wider"
            >
              <span className="text-black">Uni</span>
              <span className="text-brand-accent">क</span>
              <span className="text-brand-teal">
                {" "}Drippy
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `uppercase tracking-widest text-sm transition duration-300 ${
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "text-gray-800 hover:text-brand-accent"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <Link
              to="/shop"
              className="px-5 py-2 rounded-full bg-brand-accent text-white font-bold hover:bg-brand-teal transition duration-300"
            >
              Shop Now
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
          >
            {mobileOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="flex flex-col py-6">

            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={({ isActive }) =>
                  `py-4 text-center uppercase tracking-widest ${
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "text-gray-800"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <div className="px-6 mt-4">
              <Link
                to="/shop"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="block text-center py-3 rounded-lg bg-brand-accent text-white font-bold"
              >
                Shop Now
              </Link>
            </div>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
