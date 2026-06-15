import { motion } from "framer-motion";
import {
  FiAward,
  FiStar,
  FiUsers,
  FiShield,
} from "react-icons/fi";

const stats = [
  {
    number: "10K+",
    title: "Happy Customers",
  },
  {
    number: "500+",
    title: "Custom Designs",
  },
  {
    number: "50+",
    title: "Corporate Clients",
  },
  {
    number: "25+",
    title: "Cities Served",
  },
];

const features = [
  {
    icon: <FiAward size={34} />,
    title: "Premium Quality",
    desc: "Carefully selected fabrics with superior comfort and durability.",
  },
  {
    icon: <FiStar size={34} />,
    title: "Unique Designs",
    desc: "Fashion-forward collections created for modern youth culture.",
  },
  {
    icon: <FiUsers size={34} />,
    title: "Bulk Orders",
    desc: "Corporate, college, event and startup merchandise solutions.",
  },
  {
    icon: <FiShield size={34} />,
    title: "Trusted Service",
    desc: "Reliable production, customization and Pan India delivery.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-brand-secondary"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            About Us
          </span>

          <h2 className="section-title mt-4">
            More Than
            <span className="text-gradient"> Apparel</span>
          </h2>

          <p className="section-subtitle mt-6">
            Unik Drippy Apparels is built for people who express
            themselves through fashion. We combine creativity,
            premium fabrics and customization to create clothing
            that stands out.
          </p>

        </div>

        {/* Story */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-card"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-4xl font-display text-white mb-6">
              Fashion with Identity
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              We believe every individual and every organization
              deserves apparel that reflects its identity. From
              oversized streetwear and tie & dye collections to
              customized corporate uniforms and event merchandise,
              our focus is on quality, creativity and customer
              satisfaction.
            </p>

            <p className="text-gray-300 leading-8">
              Whether you need one personalized t-shirt or a bulk
              corporate order, our team delivers premium products
              with attention to detail and on-time execution.
            </p>

          </motion.div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="card p-8 text-center"
            >

              <h3 className="text-4xl font-display text-brand-accent mb-3">
                {item.number}
              </h3>

              <p className="text-gray-300 uppercase tracking-wider">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Why Choose Us */}

        <div className="mt-20">

          <h3 className="text-center text-4xl font-display text-white mb-12">
            Why Choose Us
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="card p-8 text-center hover-lift"
              >

                <div className="flex justify-center text-brand-accent mb-5">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-display text-white mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-300">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
