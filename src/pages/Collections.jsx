import { motion } from "framer-motion";

const collections = [
  {
    title: "Oversized Collection",
    desc: "Premium oversized streetwear for everyday comfort.",
    image: "/collections/oversized.jpg",
  },
  {
    title: "Tie & Dye Collection",
    desc: "Unique handcrafted tie-dye designs.",
    image: "/collections/tiedye.jpg",
  },
  {
    title: "Hoodie Collection",
    desc: "Premium hoodies for all seasons.",
    image: "/collections/hoodie.jpg",
  },
  {
    title: "Corporate Apparel",
    desc: "Professional uniforms and branded clothing.",
    image: "/collections/corporate.jpg",
  },
];

const Collections = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm">
            Collections
          </span>

          <h1 className="mt-4 text-5xl font-display font-bold">
            Explore Our Collections
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {collections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden shadow-lg border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Collections;
