import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg">
            For Custom Printing, Bulk Orders & Premium Streetwear
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl"
        >

          <div className="grid md:grid-cols-2 gap-8">

            {/* Sharayu */}

            <div className="bg-black/30 rounded-2xl p-6 text-center hover:scale-105 transition">

              <h3 className="text-3xl font-bold text-brand-accent mb-3">
                Sharayu
              </h3>

              <p className="text-gray-300 mb-6">
                Sales & Customer Support
              </p>

              <a
                href="tel:+919422689726"
                className="flex items-center justify-center gap-2 bg-brand-accent text-black font-bold py-3 rounded-xl mb-4 hover:bg-brand-teal transition"
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

              <p className="mt-5 text-white">
                +91 94226 89726
              </p>

            </div>

            {/* Pratik */}

            <div className="bg-black/30 rounded-2xl p-6 text-center hover:scale-105 transition">

              <h3 className="text-3xl font-bold text-brand-accent mb-3">
                Pratik
              </h3>

              <p className="text-gray-300 mb-6">
                Orders & Corporate Enquiries
              </p>

              <a
                href="tel:+918888058587"
                className="flex items-center justify-center gap-2 bg-brand-accent text-black font-bold py-3 rounded-xl mb-4 hover:bg-brand-teal transition"
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

              <p className="mt-5 text-white">
                +91 88880 58587
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
