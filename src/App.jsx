import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingInstagram from "./components/FloatingInstagram";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import Customize from "./pages/Customize";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
      <FloatingInstagram />
    </BrowserRouter>
  );
}

export default App;
