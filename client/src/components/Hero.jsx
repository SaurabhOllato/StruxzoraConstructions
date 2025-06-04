import { useEffect, useState } from "react";

const backgroundImages = [
  "/sampleImages/hero.jpg",
  "/sampleImages/hero2.jpg",
  "/sampleImages/hero3.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const bgImage = backgroundImages[currentImageIndex];

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center flex-col text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Premium Steel & Metals
        </h2>
        <p className="text-xl md:text-2xl mb-6">Strong Foundations Start Here</p>
        <a
          href="#products"
          className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
