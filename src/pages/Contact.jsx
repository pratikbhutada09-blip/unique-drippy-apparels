import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm">
            Contact
          </span>

          <h1 className="mt-4 text-5xl font-display font-bold">
            Get In Touch
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="bg-white border rounded-3xl p-8 shadow-xl">

            <div className="space-y-8">

              <div className="flex gap-4">
                <FiPhone size={24} />
                <div>
                  <h3 className="font-bold">
                    Call Us
                  </h3>
                  <p>+91 94226 89726</p>
                  <p>+91 88880 58587</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiMail size={24} />
                <div>
                  <h3 className="font-bold">
                    Email
                  </h3>
                  <p>
                    pratikbhutada09@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiMapPin size={24} />
                <div>
                  <h3 className="font-bold">
                    Location
                  </h3>
                  <p>
                    PRINCESS THE LADIES WEAR
                  </p>
                  <p>
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Map */}

          <div className="rounded-3xl overflow-hidden shadow-xl border">

            <iframe
              title="Store Location"
              src="https://maps.google.com/maps?q=18.5090527,73.8324084&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
