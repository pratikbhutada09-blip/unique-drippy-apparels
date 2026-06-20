import { motion } from "framer-motion";
import {
FiPhone,
FiMessageCircle,
FiMail,
FiMapPin,
} from "react-icons/fi";

const Contact = () => {
return ( <section
   id="contact"
   className="py-24 bg-white"
 > <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-5xl font-bold text-black mb-4">
        Get In Touch
      </h2>

      <p className="text-gray-600 text-lg">
        For Custom Printing, Bulk Orders & Premium Streetwear
      </p>
    </motion.div>

    {/* Contact Cards */}

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 text-center">

        <h3 className="text-3xl font-bold text-brand-accent mb-3">
          Sharayu
        </h3>

        <p className="text-gray-600 mb-6">
          Sales & Customer Support
        </p>

        <a
          href="tel:+919422689726"
          className="flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-3 rounded-xl mb-4 hover:bg-brand-teal transition"
        >
          <FiPhone />
          Call Now
        </a>

        <a
          href="https://wa.me/919422689726"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition"
        >
          <FiMessageCircle />
          WhatsApp
        </a>

        <p className="mt-5 text-gray-700">
          +91 94226 89726
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 text-center">

        <h3 className="text-3xl font-bold text-brand-accent mb-3">
          Pratik
        </h3>

        <p className="text-gray-600 mb-6">
          Orders & Corporate Enquiries
        </p>

        <a
          href="tel:+918888058587"
          className="flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-3 rounded-xl mb-4 hover:bg-brand-teal transition"
        >
          <FiPhone />
          Call Now
        </a>

        <a
          href="https://wa.me/918888058587"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition"
        >
          <FiMessageCircle />
          WhatsApp
        </a>

        <p className="mt-5 text-gray-700">
          +91 88880 58587
        </p>

      </div>

    </div>

    {/* Store + Map Section */}

    <div className="mt-16">

      <h3 className="text-3xl font-bold text-center text-black mb-8">
        Visit Our Store
      </h3>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Map */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">

          <iframe
            title="PRINCESS THE LADIES WEAR"
            src="https://maps.google.com/maps?q=18.5090527,73.8324084&z=17&output=embed"
            width="100%"
            height="100%"
            className="min-h-[380px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
          ></iframe>

        </div>

        {/* Store Details */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col justify-center">

          <div className="flex items-center gap-3 mb-6">
            <FiMapPin
              size={28}
              className="text-brand-accent"
            />

            <h4 className="text-2xl font-bold text-black">
              PRINCESS THE LADIES WEAR
            </h4>
          </div>

          <p className="text-gray-600 mb-6">
            Premium Fashion & Apparel Store
          </p>

          <div className="space-y-5">

            <div>
              <p className="font-semibold text-black">
                Location
              </p>

              <p className="text-gray-600">
                Pune, Maharashtra, India
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">
                Email
              </p>

              <a
                href="mailto:pratikbhutada09@gmail.com"
                className="text-brand-accent hover:underline"
              >
                pratikbhutada09@gmail.com
              </a>
            </div>

            <div>
              <p className="font-semibold text-black">
                Phone
              </p>

              <p className="text-gray-600">
                +91 94226 89726
              </p>

              <p className="text-gray-600">
                +91 88880 58587
              </p>
            </div>

          </div>

          <a
            href="https://www.google.com/maps/place/PRINCESS+THE+LADIES+WEAR/@18.5090527,73.8324084,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-center px-6 py-3 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-teal transition"
          >
            Get Directions
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

);
};

export default Contact;
