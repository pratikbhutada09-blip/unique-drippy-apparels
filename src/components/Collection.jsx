import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Tie & Dye',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2'
  },
  {
    title: 'Oversized T-Shirts',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2015&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    title: 'Customized Printing',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    title: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    title: 'Couple Wear',
    image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2046&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  }
];

const Collection = () => {
  return (
    <section id="collections" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-4">
            Curated <span className="text-brand-accent">Drops</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore our premium categories designed to elevate your street style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group cursor-pointer ${cat.colSpan} ${cat.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-display font-bold text-white tracking-wider group-hover:text-brand-accent transition-colors">
                  {cat.title}
                </h3>
                <span className="text-sm uppercase tracking-widest text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 block mt-2">
                  Shop Now &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collection;
