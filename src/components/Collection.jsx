const Collection = () => {
return ( <section
   id="collections"
   className="py-24 bg-white"
 > <div className="container-custom">


    <div className="text-center mb-16">

      <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
        Our Collection
      </span>

      <h2 className="mt-4 text-5xl font-display font-bold text-black">
        Curated <span className="text-brand-accent">Streetwear</span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
        Discover premium oversized fashion, tie & dye,
        hoodies, custom printing and exclusive apparel
        designed for the next generation.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {categories.map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -10,
          }}
          className="group relative rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute top-5 left-5">

            <span className="bg-brand-accent text-white font-bold px-3 py-1 rounded-full text-xs tracking-widest">
              {item.badge}
            </span>

          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <p className="text-brand-accent uppercase tracking-widest text-xs mb-2">
              {item.subtitle}
            </p>

            <h3 className="text-white text-3xl font-display font-bold">
              {item.title}
            </h3>

            <button
              className="mt-5 px-6 py-3 rounded-full bg-white text-black font-semibold transition duration-300 hover:bg-brand-accent hover:text-white"
            >
              Explore →
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

);
};

export default Collection;
