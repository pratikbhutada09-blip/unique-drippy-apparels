import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Customize from "../components/Customize";
import About from "../components/About";
import CTA from "../components/CTA";
import OrderForm from "../components/OrderForm";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />

      <Collection />

      <Customize />

      <About />

      <CTA />

      {/* Order Form */}
      <OrderForm />

      <Contact />
    </>
  );
};

export default Home;
