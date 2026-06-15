import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-light">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for streetwear background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-brand-light"></div>
        
        {/* Dynamic Glow Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tighter leading-tight">
            DEFY THE <br className="md:hidden" />
            <span className="text-gradient">ORDINARY</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          Premium custom streetwear, tie & dye, and corporate apparel tailored for the modern culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#collections" className="w-full sm:w-auto px-8 py-4 bg-brand-teal text-black rounded-none font-bold tracking-widest uppercase hover:bg-brand-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.5)]">
            Explore Collection
          </a>
          <a href="#customize" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-black/30 text-black rounded-none font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            Customize Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/50"
      >
        <span className="text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
