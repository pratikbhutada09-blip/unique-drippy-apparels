import { motion } from "framer-motion";

const stats = [
  {
    value: "10000+",
    title: "Happy Customers",
  },
  {
    value: "500+",
    title: "Custom Designs",
  },
  {
    value: "50+",
    title: "Corporate Clients",
  },
  {
    value: "25+",
    title: "Cities Served",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-brand-dark">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center"
            >
              <div className="text-5xl font-bold text-brand-accent">
                {item.value}
              </div>

              <div className="mt-4 text-gray-300">
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
