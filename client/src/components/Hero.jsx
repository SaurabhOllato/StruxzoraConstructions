import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroContent = [
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205806/hero4_epkmk8.jpg",
    title: "Premium Steel & Metals",
    subtitle: "Strong Foundations Start Here",
    cta: "Explore Products"
  },
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205806/hero2_rlzsik.jpg",
    title: "Innovative Construction Solutions",
    subtitle: "Building Tomorrow's Landmarks Today",
    cta: "View Projects"
  },
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205805/hero3_tovv7o.jpg",
    title: "Expert Engineering Services",
    subtitle: "Precision in Every Structure",
    cta: "Our Services"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];

  // Animation variants
  const textVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: (dir) => ({
      y: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    })
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background images with transition */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentContent.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center flex-col text-center text-white px-4">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-4xl mx-auto"
          >
            <motion.h2 className="text-4xl md:text-6xl font-bold mb-4">
              {currentContent.title}
            </motion.h2>
            <motion.p className="text-xl md:text-2xl mb-6">
              {currentContent.subtitle}
            </motion.p>
            <motion.a
              href="#products"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-400 text-lg font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentContent.cta}
            </motion.a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-8 flex space-x-2 z-20">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-500" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;