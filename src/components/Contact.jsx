import { MapPin, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
            Get in <span className="text-brand-accent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to place an order or customize your drip? Hit us up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 flex items-start space-x-6 hover:border-brand-teal/50 transition-colors">
              <div className="bg-brand-teal/20 p-4 rounded-full text-brand-teal">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Direct Contact</h4>
                <p className="text-gray-400 mb-4">Call or WhatsApp us for instant replies.</p>
                <div className="space-y-2">
                  <a href="https://wa.me/919422689726" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-white hover:text-brand-accent transition-colors">
                    <span className="font-semibold">Sharayu:</span>
                    <span>+91 9422689726</span>
                  </a>
                  <a href="https://wa.me/918888058587" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-white hover:text-brand-accent transition-colors">
                    <span className="font-semibold">Pratik:</span>
                    <span>+91 8888058587</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start space-x-6 hover:border-brand-accent/50 transition-colors">
              <div className="bg-brand-accent/20 p-4 rounded-full text-brand-accent">
                <Instagram size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Instagram</h4>
                <p className="text-gray-400 mb-4">DM us for designs and collaborations.</p>
                <a href="https://instagram.com/unique_drippyapparels" target="_blank" rel="noreferrer" className="text-white hover:text-brand-accent transition-colors font-semibold">
                  @unique_drippyapparels
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-2 h-full min-h-[400px] relative overflow-hidden flex flex-col justify-between"
          >
            {/* Google Maps Embed with Dark Theme style filter */}
            <div className="w-full h-[320px] rounded-lg overflow-hidden relative">
              <iframe
                title="Store Location"
                src="https://maps.google.com/maps?q=Shop%20No.%202,%20Millennium%20Apartment,%2011/1%20Karve%20Road,%20Opposite%20R.L.%20Jewellers,%20Nal%20Stop,%20Pune,%20Maharashtra%20411004&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(10%) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-4 flex items-start space-x-3">
              <MapPin size={24} className="text-brand-teal flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Our Store</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Shop No. 2, Millennium Apartment, 11/1 Karve Road, Opposite R.L. Jewellers, Nal Stop, Pune, Maharashtra 411004
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
