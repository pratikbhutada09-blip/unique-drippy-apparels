import { motion } from 'framer-motion';
import { PenTool, Box, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <PenTool size={32} />,
    title: 'Custom Printing',
    desc: 'Bring your own designs to life with our premium printing technology.'
  },
  {
    icon: <Box size={32} />,
    title: 'Bulk & Corporate',
    desc: 'Specialized in large-scale corporate clothing and bulk orders for events.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Premium Quality',
    desc: 'We use high-grade fabrics ensuring durability and maximum comfort.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Fast Turnaround',
    desc: 'Quick production and delivery times across India.'
  }
];

const Customize = () => {
  return (
    <section id="customize" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
                Your Vision, <br />
                <span className="text-brand-teal">Our Canvas</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Whether you need a single custom-printed t-shirt to express your vibe, or uniform corporate clothing for your entire company, we've got you covered. We specialize in bringing unique ideas to life.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="text-brand-accent mt-1 bg-brand-accent/10 p-3 rounded-lg">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feat.title}</h4>
                      <p className="text-sm text-gray-500">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/919422689726?text=Hi! I want to inquire about customized/corporate orders." 
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all duration-300"
              >
                Inquire on WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 border-2 border-brand-teal/30 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1588629088688-66236b2809f4?q=80&w=1964&auto=format&fit=crop" 
              alt="Custom Printing" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
      <div id="corporate"></div>
    </section>
  );
};

export default Customize;
