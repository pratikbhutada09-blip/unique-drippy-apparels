import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-brand-dark"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            Contact Us
          </span>

          <h2 className="section-title mt-4">
            Let's Create Something
            <span className="text-gradient"> Amazing</span>
          </h2>

          <p className="section-subtitle mt-6">
            Have an idea? Need customized apparel or a bulk order?
            Get in touch and we'll respond as soon as possible.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10"
          >

            <h3 className="text-3xl font-display text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">

                <FiMapPin
                  className="text-brand-accent mt-1"
                  size={24}
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-300">
                    Pune, Maharashtra, India
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FiPhone
                  className="text-brand-accent mt-1"
                  size={24}
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <a
                    href="tel:+919422689726"
                    className="text-gray-300 hover:text-brand-accent"
                  >
                    +91 9422689726
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FiMail
                  className="text-brand-accent mt-1"
                  size={24}
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <a
                    href="mailto:info@unikdrippy.com"
                    className="text-gray-300 hover:text-brand-accent"
                  >
                    info@unikdrippy.com
                  </a>

                </div>

              </div>

            </div>

            <div className="mt-10">

              <a
                href="https://wa.me/919422689726"
                target="_blank"
                rel="noreferrer"
                className="primary-btn inline-flex items-center gap-3"
              >
                <FiMessageCircle />
                Chat on WhatsApp
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-brand-accent"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-brand-accent"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-brand-accent"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:outline-none focus:border-brand-accent"
              ></textarea>

              <button
                type="submit"
                className="primary-btn flex items-center justify-center gap-3 w-full"
              >
                <FiSend />
                Send Enquiry
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
