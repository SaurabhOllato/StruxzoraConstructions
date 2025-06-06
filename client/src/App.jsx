import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-white">
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Products />
          <WhyUs />
          <Gallery />
          <motion.div
            className="lg:mt-16 w-full rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://res.cloudinary.com/dxscy1ixg/image/upload/v1749207180/gate_pbpczm.jpg"
              alt="Banner"
              className="w-full h-auto"
            />
          </motion.div>
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
