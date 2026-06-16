import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 10000,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    value: 500,
    suffix: "+",
    title: "Custom Designs",
  },
  {
    value: 50,
    suffix: "+",
    title: "Corporate Clients",
  },
  {
    value: 25,
    suffix: "+",
    title: "Cities Served",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-24 bg-brand-dark"
    >
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            Our Achievements
          </span>

          <h2 className="section-title mt-4">
            Numbers That
            <span className="text-gradient"> Speak</span>
          </h2>

          <p className="section-subtitle mt-6">
            We believe in quality, creativity and customer
            satisfaction. Every order strengthens our commitment
            to premium apparel.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

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
              whileHover={{
                scale: 1.04,
              }}
              className="glass rounded-3xl p-10 text-center border border-white/10"
            >

             <div className="text-5xl font-display font-bold text-brand-accent">
  {item.value}
  {item.suffix}
</div>

              <div className="mt-4 text-gray-300 uppercase tracking-wider text-sm">
                {item.title}
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;
