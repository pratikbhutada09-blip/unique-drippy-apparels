import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  return emailjs.send(
    "service_2fo834h",
    "template_lu07swf",
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      product: data.product,
      quantity: data.quantity,
      message: data.message,
    },
    "aR7mu514jlnNrVSda"
  );
};
