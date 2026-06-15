import { motion } from "framer-motion";
import { FiMessageCircle, FiPhoneCall } from "react-icons/fi";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative py-24 overflow-hidden bg-brand-secondary"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-brand-teal/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 lg:p-16 text-center"
        >

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            Start Your Order
          </span>

          <h2 className="section-title mt-5">
            Design Your
            <span className="text-gradient"> Dream Apparel</span>
          </h2>

          <p className="section-subtitle mt-6 max-w-3xl mx-auto">
            Whether you need a single customized t-shirt,
            college merchandise, corporate uniforms,
            sports jerseys or bulk event apparel,
            our team is ready to bring your ideas to life.
          </p>

          {/* Feature Pills */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <div className="glass px-5 py-3 rounded-full text-white">
              Premium Fabric
            </div>

            <div className="glass px-5 py-3 rounded-full text-white">
              Custom Printing
            </div>

            <div className="glass px-5 py-3 rounded-full text-white">
              Bulk Orders
            </div>

            <div className="glass px-5 py-3 rounded-full text-white">
              Pan India Delivery
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-col md:flex-row justify-center gap-5 mt-12">

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="primary-btn flex items-center justify-center gap-3"
            >
              <FiMessageCircle size={20} />
              WhatsApp Now
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="secondary-btn flex items-center justify-center gap-3"
            >
              <FiPhoneCall size={20} />
              Call Now
            </a>

          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Fast quotations • Premium quality • Competitive pricing
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
