import { motion } from "framer-motion";
import {
  FiUpload,
  FiEdit3,
  FiTruck,
  FiMessageCircle,
} from "react-icons/fi";

const steps = [
  {
    icon: FiUpload,
    title: "Upload Your Design",
    desc: "Share your logo, artwork or idea with us.",
  },
  {
    icon: FiEdit3,
    title: "We Create Mockup",
    desc: "Our designers prepare a premium preview for approval.",
  },
  {
    icon: FiTruck,
    title: "Production & Delivery",
    desc: "High-quality printing with Pan India delivery.",
  },
];

const Customize = () => {
  return (
    <section
      id="customize"
      className="py-24 bg-brand-dark"
    >
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            Custom Orders
          </span>

          <h2 className="section-title mt-4">
            Design Your
            <span className="text-gradient"> Own Apparel</span>
          </h2>

          <p className="section-subtitle mt-6">
            From single customized t-shirts to bulk corporate
            uniforms and event merchandise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="card p-8 text-center hover-lift"
              >
                <div className="flex justify-center mb-6 text-brand-accent">
                  <Icon size={36} />
                </div>

                <h3 className="text-2xl font-display text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-brand-gray">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl overflow-hidden glass p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h3 className="text-4xl font-display text-white mb-5">
                Need Bulk or
                <span className="text-gradient">
                  {" "}Corporate Orders?
                </span>
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Corporate Uniforms</li>
                <li>✔ Event T-Shirts</li>
                <li>✔ College Merchandise</li>
                <li>✔ Startup Branding</li>
                <li>✔ Sports Jerseys</li>
                <li>✔ Promotional Apparel</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/919422689726"
                target="_blank"
                rel="noreferrer"
                className="primary-btn flex items-center justify-center gap-3"
              >
                <FiMessageCircle />
                WhatsApp Now
              </a>

              <a
                href="#contact"
                className="secondary-btn text-center"
              >
                Get Free Quote
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Customize;
