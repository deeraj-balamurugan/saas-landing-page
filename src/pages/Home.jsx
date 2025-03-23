import Hero from "../sections/Hero";
import LogoTicker from "../sections/LogoTicker";
import Pricing from "../sections/Pricing";
import ProductShowcase from "../sections/ProductShowcase";
import Testimonials from "../sections/Testimonials";
import CallToAction from "../sections/CallToAction";
import Footer from "../sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
