const About = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm">
            About Us
          </span>

          <h1 className="mt-4 text-5xl font-display font-bold">
            The Story of Unik Drippy
          </h1>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-10 border">

          <p className="text-lg text-gray-700 leading-8">
            Unik Drippy Apparels is a Pune-based fashion
            and custom apparel brand focused on premium
            streetwear, oversized t-shirts, tie-dye
            collections, hoodies, corporate apparel,
            sports jerseys and custom printing.
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-6">
            Our mission is to deliver premium quality
            apparel with innovative designs, custom
            branding and exceptional customer service.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="text-center">
              <h3 className="text-4xl font-bold text-brand-accent">
                100+
              </h3>
              <p>Happy Customers</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-brand-accent">
                500+
              </h3>
              <p>Orders Delivered</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-brand-accent">
                24x7
              </h3>
              <p>Customer Support</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
