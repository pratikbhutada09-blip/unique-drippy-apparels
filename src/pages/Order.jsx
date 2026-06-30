import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiCheckCircle,
  FiMessageCircle,
  FiPhoneCall,
} from "react-icons/fi";

import OrderForm from "../components/OrderForm";

const steps = [
  {
    title: "Submit Your Requirement",
    desc: "Tell us what apparel you need.",
  },
  {
    title: "Receive Quotation",
    desc: "We'll provide pricing and timelines.",
  },
  {
    title: "Approve Design",
    desc: "Review and approve the artwork before production.",
  },
  {
    title: "Production & Delivery",
    desc: "We manufacture and deliver across India.",
  },
];

const Order = () => {
  return (
    <div className="pt-28 bg-white min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-sky-50 to-cyan-50 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="uppercase tracking-[0.3em] text-brand-accent text-sm font-semibold">
              Order Now
            </span>

            <h1 className="mt-5 text-5xl md:text-6xl font-display font-bold text-black">
              Design Your
              <span className="text-brand-accent">
                {" "}Dream Apparel
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Custom T-Shirts, Hoodies, Corporate Uniforms,
              College Merchandise, Sports Jerseys and Bulk Orders.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Benefits */}

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Premium Fabric",
              "Custom Printing",
              "Bulk Orders",
              "Pan India Delivery",
            ].map((item) => (

              <div
                key={item}
                className="bg-white shadow-lg rounded-2xl p-6 text-center border"
              >
                <FiCheckCircle
                  className="mx-auto text-brand-accent mb-4"
                  size={36}
                />

                <h3 className="font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {steps.map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >

                <div className="w-14 h-14 rounded-full bg-brand-accent text-white flex items-center justify-center mx-auto text-xl font-bold mb-5">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Order Form */}

      <OrderForm />

      {/* Help Section */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gradient-to-r from-brand-accent to-brand-teal rounded-3xl p-10 text-white">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h2 className="text-4xl font-bold">
                  Need Help?
                </h2>

                <p className="mt-4 text-lg">
                  Our team is ready to help you choose
                  the perfect apparel for your brand,
                  business or event.
                </p>

              </div>

              <div className="flex flex-col gap-4">

                <a
                  href="https://wa.me/919422689726"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-brand-accent rounded-xl py-4 text-center font-bold flex justify-center items-center gap-3"
                >
                  <FiMessageCircle />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+919422689726"
                  className="bg-black text-white rounded-xl py-4 text-center font-bold flex justify-center items-center gap-3"
                >
                  <FiPhoneCall />
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Order;
