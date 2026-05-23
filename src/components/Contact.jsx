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
            className="glass-card p-2 h-full min-h-[400px] relative overflow-hidden"
          >
            {/* Google Maps Placeholder */}
            <div className="absolute inset-0 bg-brand-dark/50 flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-600 m-2">
              <MapPin size={48} className="text-brand-teal mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Location Map</h4>
              <p className="text-gray-400">Embed your Google Maps iframe here to show your store or workshop location.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
