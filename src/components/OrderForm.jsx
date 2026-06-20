import { useState } from "react";
import { sendEmail } from "../services/emailService";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyRS0mceEYlZe8EFG8jKa6GUJDU09zfihMw_dIr5BA7O-NgghurIpJO_a8PCCz1601vRw/exec";

const OrderForm = () => {
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
name: "",
phone: "",
email: "",
product: "",
quantity: "",
message: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


try {
  setLoading(true);

  // Send Email
  await sendEmail(formData);

  // Save to Google Sheet
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(formData),
  });

  // WhatsApp Message
 const whatsappMessage = `
*New Order Received*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Product: ${formData.product}
Quantity: ${formData.quantity}

Message:
${formData.message}
`;

window.open(
`https://wa.me/919422689726?text=${encodeURIComponent(
    whatsappMessage
  )}`,
"_blank"
);

  toast.success("Order Submitted Successfully!");

  setFormData({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

} catch (error) {

  console.error("EMAILJS ERROR:", error);

  alert(
    error?.text ||
    error?.message ||
    JSON.stringify(error, null, 2)
  );

  toast.error("Failed to submit order");

} finally {

  setLoading(false);

}


};

return ( <section
   id="order"
   className="py-24 bg-gradient-to-b from-white to-gray-50"
 > <div className="max-w-4xl mx-auto px-6">


    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-black mb-4">
        Start Your Order
      </h2>

      <p className="text-gray-600 text-lg">
        Tell us what you need and we'll contact you shortly.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200"
    >
      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-4 border rounded-xl focus:outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="p-4 border rounded-xl focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-4 border rounded-xl focus:outline-none"
        />

        <select
          name="product"
          required
          value={formData.product}
          onChange={handleChange}
          className="p-4 border rounded-xl focus:outline-none"
        >
          <option value="">
            Select Product
          </option>

          <option value="Oversized T-Shirt">
            Oversized T-Shirt
          </option>

          <option value="Tie & Dye">
            Tie & Dye
          </option>

          <option value="Hoodie">
            Hoodie
          </option>

          <option value="Corporate Apparel">
            Corporate Apparel
          </option>

          <option value="Custom Printing">
            Custom Printing
          </option>

          <option value="Sports Jersey">
            Sports Jersey
          </option>
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
          value={formData.quantity}
          onChange={handleChange}
          className="p-4 border rounded-xl focus:outline-none"
        />

      </div>

      <textarea
        rows="5"
        name="message"
        placeholder="Design Details / Notes"
        value={formData.message}
        onChange={handleChange}
        className="w-full mt-5 p-4 border rounded-xl focus:outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-brand-accent text-white py-4 rounded-xl font-bold hover:bg-brand-teal transition flex items-center justify-center gap-2"
      >
        <FiSend />

        {loading
          ? "Submitting..."
          : "Submit Order"}
      </button>

    </form>

  </div>
</section>

);
};

export default OrderForm;
