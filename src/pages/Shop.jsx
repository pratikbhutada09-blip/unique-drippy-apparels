import OrderForm from "../components/OrderForm";
import { motion } from "framer-motion";

const products = [
  {
    name: "Oversized T-Shirt",
    price: "₹699",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Tie & Dye T-Shirt",
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
  },
  {
    name: "Premium Hoodie",
    price: "₹1299",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
  {
    name: "Corporate Apparel",
    price: "Custom Quote",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    name: "Sports Jersey",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
  },
  {
    name: "Custom Printing",
    price: "Starting ₹299",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },
];

const Shop = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm">
            Shop Collection
          </span>

          <h1 className="mt-4 text-5xl font-display font-bold text-black">
            Premium Streetwear
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Explore our latest oversized t-shirts,
            hoodies, custom apparel, sports jerseys
            and premium fashion collections.
          </p>

        </div>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-black">
                  {product.name}
                </h3>

                <p className="mt-2 text-brand-accent font-semibold text-lg">
                  {product.price}
                </p>

                <a
                  href={`https://wa.me/919422689726?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-5 text-center bg-brand-accent text-white py-3 rounded-xl font-bold hover:bg-brand-teal transition"
                >
                  Order on WhatsApp
                </a>

              </div>

            </motion.div>
          ))}

        </div>
        
      {/* Order Form */}

        <div className="mt-24">
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default Shop;
