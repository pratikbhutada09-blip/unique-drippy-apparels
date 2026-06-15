```jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#0B0B0B]" />

        {/* Premium Glow Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-teal-500/20 blur-[140px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* New Drop Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs tracking-[0.3em] uppercase font-semibold backdrop-blur-md">
            New Drop 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight text-white"
        >
          DEFY THE
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-400 bg-clip-text text-transparent">
            ORDINARY
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8"
        >
          Premium oversized streetwear, tie & dye collections,
          customized printing and corporate apparel crafted for
          creators, trendsetters and modern culture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
        >
          <a
            href="#collections"
            className="px-8 py-4 rounded-lg bg-cyan-500 text-black font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
          >
            Explore Collection
          </a>

          <a
            href="#customize"
            className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Customize Now
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-gray-400 text-sm uppercase tracking-widest"
        >
          <span>Premium Quality</span>
          <span>•</span>
          <span>Custom Printing</span>
          <span>•</span>
          <span>Pan India Delivery</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="text-xs uppercase tracking-[0.35em] mb-2 text-center">
          Scroll
        </div>

        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
```
