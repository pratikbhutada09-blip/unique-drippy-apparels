import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "College Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    review:
      "Amazing quality and perfect oversized fit. The fabric feels premium and delivery was quick.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Fashion Creator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    review:
      "The customized printing exceeded my expectations. The colors and finish are excellent.",
  },
  {
    name: "TechNova Solutions",
    role: "Corporate Client",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    review:
      "Ordered corporate t-shirts for our team. Professional service, great quality and timely delivery.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-brand-dark"
    >
      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-brand-accent uppercase tracking-[0.35em] text-sm">
            Customer Reviews
          </span>

          <h2 className="section-title mt-4">
            What Our
            <span className="text-gradient"> Customers Say</span>
          </h2>

          <p className="section-subtitle mt-6">
            Customer satisfaction is our biggest achievement.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="card p-8"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent"
                />

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-brand-gray text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-5 text-yellow-400">

                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />

              </div>

              <p className="text-gray-300 leading-7 mt-5">
                "{item.review}"
              </p>

            </motion.div>

          ))}

        </div>

        {/* Trust Banner */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl glass p-10 text-center"
        >

          <h3 className="text-4xl font-display text-white mb-4">
            Join Thousands of Happy Customers
          </h3>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            From customized apparel and oversized streetwear to
            corporate uniforms and event merchandise, we are
            committed to delivering premium quality with every order.
          </p>

          <a
            href="#contact"
            className="primary-btn inline-block mt-8"
          >
            Order Now
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
