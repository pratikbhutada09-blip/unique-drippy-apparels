import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10">

      {/* Top Section */}

      <div className="container-custom py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-display font-bold text-white">
              Uni<span className="text-brand-accent">क</span>{" "}
              <span className="text-brand-teal">
                Drippy
              </span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Premium streetwear, oversized fashion,
              customized printing, corporate apparel
              and bulk merchandise solutions.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-accent hover:text-black transition"
              >
                <FiInstagram />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-accent hover:text-black transition"
              >
                <FiFacebook />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-accent hover:text-black transition"
              >
                <FiLinkedin />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#home" className="block text-gray-400 hover:text-brand-accent">
                Home
              </a>

              <a href="#collections" className="block text-gray-400 hover:text-brand-accent">
                Collections
              </a>

              <a href="#customize" className="block text-gray-400 hover:text-brand-accent">
                Customize
              </a>

              <a href="#about" className="block text-gray-400 hover:text-brand-accent">
                About
              </a>

              <a href="#contact" className="block text-gray-400 hover:text-brand-accent">
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FiPhone className="mt-1 text-brand-accent" />

                <div>

                  <p className="text-gray-300">
                    +91 9422689726
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <FiMail className="mt-1 text-brand-accent" />

                <div>

                  <p className="text-gray-300">
                    info@unikdrippy.com
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <FiMapPin className="mt-1 text-brand-accent" />

                <div>

                  <p className="text-gray-300">
                    Pune, Maharashtra, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-5">
              Get updates on new collections,
              offers and exclusive drops.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-3 rounded-l-xl bg-brand-secondary border border-white/10 text-white focus:outline-none"
              />

              <button
                className="bg-brand-accent px-5 rounded-r-xl text-black hover:bg-brand-teal hover:text-white transition"
              >
                <FiArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Unik Drippy Apparels.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a href="#" className="text-gray-500 hover:text-brand-accent">
              Privacy Policy
            </a>

            <a href="#" className="text-gray-500 hover:text-brand-accent">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
