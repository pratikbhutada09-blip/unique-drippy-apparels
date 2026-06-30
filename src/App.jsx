import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingInstagram from "./components/FloatingInstagram";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import CustomizePage from "./pages/Customize";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Order from "./pages/Order";

function App() {
return ( <Router> <div className="bg-white text-black min-h-screen overflow-x-hidden">


    <Navbar />

    <main>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route
          path="/customize"
          element={<CustomizePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/order"
          element={<Order />}
        />
          
        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>
    </main>

    <Footer />

    <FloatingWhatsApp />

    <FloatingInstagram />

  </div>
</Router>


);
}

export default App;
