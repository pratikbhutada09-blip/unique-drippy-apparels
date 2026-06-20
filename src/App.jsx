import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingInstagram from "./components/FloatingInstagram";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="bg-white text-black min-h-screen overflow-x-hidden">

        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </main>

        <Footer />

        {/* Floating Instagram Button */}
        <FloatingInstagram />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

      </div>
    </Router>
  );
}

export default App;
