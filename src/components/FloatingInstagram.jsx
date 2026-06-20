import { FiInstagram } from "react-icons/fi";

const FloatingInstagram = () => {
  return (
    <a
      href="https://instagram.com/unique_drippyapparels"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      aria-label="Instagram"
    >
      <FiInstagram size={28} />
    </a>
  );
};

export default FloatingInstagram;
