import { FiCheckCircle } from "react-icons/fi";

const Customize = () => {
  const services = [
    "Custom T-Shirts",
    "Corporate Uniforms",
    "College Merchandise",
    "Sports Jerseys",
    "Event Merchandise",
    "Bulk Orders",
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm">
            Customize
          </span>

          <h1 className="mt-4 text-5xl font-display font-bold">
            Design Your Apparel
          </h1>
        </div>

        <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <FiCheckCircle
                  className="text-brand-accent"
                  size={22}
                />

                <span className="text-lg">
                  {service}
                </span>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold"
            >
              Request Custom Quote
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Customize;
