import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiPhoneCall,
} from "react-icons/fi";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-24 bg-white"
    >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-gray-200 rounded-3xl p-10 lg:p-16 text-center shadow-xl"
        >

          {/* Heading */}

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm font-semibold">
            Start Your Order
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold text-black">
            Design Your
            <span className="text-gradient"> Dream Apparel</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
            Whether you need a single customized t-shirt,
            college merchandise, corporate uniforms,
            sports jerseys or bulk event apparel,
            our team is ready to bring your ideas to life.
          </p>

          {/* Feature Pills */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <div className="px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-medium shadow-sm">
              Premium Fabric
            </div>

            <div className="px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-medium shadow-sm">
              Custom Printing
            </div>

            <div className="px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-medium shadow-sm">
              Bulk Orders
            </div>

            <div className="px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-medium shadow-sm">
              Pan India Delivery
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-col md:flex-row justify-center gap-5 mt-12">

            <a
              href="https://wa.me/919422689726"
              target="_blank"
              rel="noreferrer"
              className="primary-btn flex items-center justify-center gap-3"
            >
              <FiMessageCircle size={20} />
              WhatsApp Now
            </a>

            <a
              href="tel:+919422689726"
              className="secondary-btn flex items-center justify-center gap-3"
            >
              <FiPhoneCall size={20} />
              Call Now
            </a>

          </div>

          {/* Footer Text */}

          <p className="mt-8 text-gray-600 text-sm">
            Fast quotations • Premium quality • Competitive pricing
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
