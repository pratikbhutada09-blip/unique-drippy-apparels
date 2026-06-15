import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-brand-dark"></div>

        {/* Glow Effects */}
        <div className="absolute -top-20 left-10 w-96 h-96 rounded-full bg-brand-accent/20 blur-[140px] animate-pulse"></div>

        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-brand-teal/20 blur-[140px] animate-pulse"></div>
      </div>

      {/* Hero Content */}

      <div className="relative z-10 container-custom text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="glass px-5 py-2 rounded-full text-brand-accent uppercase tracking-[0.3em] text-xs font-semibold">
            New Drop 2026
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight"
        >
          WE DON'T
          <br />

          <span className="text-gradient">
            FOLLOW TRENDS
          </span>

          <br />

          WE CREATE THEM
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-brand-gray"
        >
          Premium oversized streetwear, tie & dye,
          customized printing and corporate apparel
          crafted for creators, trendsetters and
          modern culture.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#collections"
            className="primary-btn glow-blue"
          >
            Explore Collection
          </a>

          <a
            href="#customize"
            className="secondary-btn"
          >
            Customize Your Design
          </a>
        </motion.div>

        {/* Trust Indicators */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.25em] text-gray-400"
        >
          <span>Premium Fabric</span>

          <span>•</span>

          <span>Custom Printing</span>

          <span>•</span>

          <span>Bulk Orders</span>

          <span>•</span>

          <span>Pan India Delivery</span>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="text-xs uppercase tracking-[0.35em] text-center mb-2">
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
