import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-teal/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-widest text-white mb-8">
              The <span className="text-brand-accent">Story</span>
            </h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-8"></div>
            
            <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
              "Uniक Drippy Apparels is a youth-focused custom streetwear and apparel brand specializing in tie & dye, oversized fashion, customized printing, and corporate clothing."
            </p>
            
            <p className="text-base text-gray-500 mb-0 max-w-2xl mx-auto">
              We believe clothing is more than just fabric—it's a statement. Born from the desire to break the mold, we blend premium quality with undeniable drip. Stand out, stay unique.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
