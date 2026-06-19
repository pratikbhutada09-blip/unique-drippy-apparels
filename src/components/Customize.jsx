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
return ( <section
   id="customize"
   className="py-24 bg-white"
 > <div className="container-custom">

```
    <div className="text-center mb-16">
      <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
        Custom Orders
      </span>

      <h2 className="mt-4 text-5xl font-display font-bold text-black">
        Design Your
        <span className="text-brand-accent"> Own Apparel</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
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
            className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all"
          >
            <div className="flex justify-center mb-6 text-brand-accent">
              <Icon size={36} />
            </div>

            <h3 className="text-2xl font-display text-black mb-4">
              {step.title}
            </h3>

            <p className="text-gray-600">
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
      className="mt-20 rounded-3xl bg-gray-50 border border-gray-200 p-10 shadow-lg"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h3 className="text-4xl font-display text-black mb-5">
            Need Bulk or
            <span className="text-brand-accent">
              {" "}Corporate Orders?
            </span>
          </h3>

          <ul className="mt-6 space-y-3 text-gray-700">
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
            className="bg-brand-accent text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-teal transition"
          >
            <FiMessageCircle />
            WhatsApp Now
          </a>

          <a
            href="#contact"
            className="text-center py-4 px-6 rounded-xl border border-gray-300 text-black hover:bg-gray-100 transition"
          >
            Get Free Quote
          </a>
        </div>

      </div>
    </motion.div>

  </div>
</section>
```

);
};

export default Customize;
