import { motion } from "framer-motion";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2015&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2046&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-brand-secondary"
    >
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            Follow Our Style
          </span>

          <h2 className="section-title mt-4">
            Instagram
            <span className="text-gradient"> Gallery</span>
          </h2>

          <p className="section-subtitle mt-6">
            Discover the latest drops, customer looks and
            premium custom apparel from Unik Drippy.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition duration-500 flex items-center justify-center">

                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold tracking-wider transition duration-500">
                  View Collection
                </span>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="text-center mt-14">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Follow on Instagram
          </a>

        </div>

      </div>
    </section>
  );
};

export default Gallery;
