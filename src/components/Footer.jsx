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
return ( <footer className="relative bg-white border-t border-gray-200">

```
  {/* Top Section */}

  <div className="container-custom py-20">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

      {/* Brand */}

      <div>

        <h2 className="text-3xl font-display font-bold text-black">
          Uni<span className="text-brand-accent">क</span>{" "}
          <span className="text-brand-teal">
            Drippy
          </span>
        </h2>

        <p className="text-gray-600 mt-5 leading-7">
          Premium streetwear, oversized fashion,
          customized printing, corporate apparel
          and bulk merchandise solutions.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="https://instagram.com/unique_drippyapparels"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-accent hover:text-white transition"
          >
            <FiInstagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-accent hover:text-white transition"
          >
            <FiFacebook />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand-accent hover:text-white transition"
          >
            <FiLinkedin />
          </a>

        </div>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-xl font-semibold text-black mb-5">
          Quick Links
        </h3>

        <div className="space-y-3">

          <a href="#home" className="block text-gray-600 hover:text-brand-accent">
            Home
          </a>

          <a href="#collections" className="block text-gray-600 hover:text-brand-accent">
            Collections
          </a>

          <a href="#customize" className="block text-gray-600 hover:text-brand-accent">
            Customize
          </a>

          <a href="#about" className="block text-gray-600 hover:text-brand-accent">
            About
          </a>

          <a href="#contact" className="block text-gray-600 hover:text-brand-accent">
            Contact
          </a>

        </div>

      </div>

      {/* Contact */}

      <div>

        <h3 className="text-xl font-semibold text-black mb-5">
          Contact
        </h3>

        <div className="space-y-5">

          <div className="flex gap-3">

            <FiPhone className="mt-1 text-brand-accent" />

            <div>

              <p className="text-gray-700">
                +91 94226 89726 (Sharayu)
              </p>

              <p className="text-gray-700">
                +91 88880 58587 (Pratik)
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <FiMail className="mt-1 text-brand-accent" />

            <div>

              <a
                href="mailto:pratikbhutada09@gmail.com"
                className="text-gray-700 hover:text-brand-accent transition"
              >
                pratikbhutada09@gmail.com
              </a>

            </div>

          </div>

          <div className="flex gap-3">

            <FiMapPin className="mt-1 text-brand-accent" />

            <div>

              <p className="text-gray-700">
                Pune, Maharashtra, India
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Newsletter */}

      <div>

        <h3 className="text-xl font-semibold text-black mb-5">
          Stay Updated
        </h3>

        <p className="text-gray-600 mb-5">
          Get updates on new collections,
          offers and exclusive drops.
        </p>

        <div className="flex">

          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 p-3 rounded-l-xl bg-gray-100 border border-gray-300 text-black focus:outline-none"
          />

          <button
            className="bg-brand-accent px-5 rounded-r-xl text-white hover:bg-brand-teal transition"
          >
            <FiArrowRight />
          </button>

        </div>

      </div>

    </div>

  </div>

  {/* Bottom */}

  <div className="border-t border-gray-200">

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
```

);
};

export default Footer;
