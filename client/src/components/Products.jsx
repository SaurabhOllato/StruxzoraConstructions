import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHome,
  FaIndustry,
  FaTools,
  FaVideo,
  FaNetworkWired,
  FaDoorOpen,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const services = [
  {
    icon: <FaHome size={30} />,
    title: "Building Construction",
    desc: "From foundation to finish, we build strong and reliable structures for residential and commercial needs.",
    bgImage: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205790/construction_ag4erh.jpg",
  },
  {
    icon: <FaIndustry size={30} />,
    title: "Metal Works",
    desc: "Fabrication and installation of high-quality steel and metal components tailored to project needs.",
    bgImage: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205811/product4_ahp9ib.jpg",
  },
  {
    icon: <FaTools size={30} />,
    title: "Plumbing & Electrical",
    desc: "Complete plumbing and electrical installations done by certified professionals for safety and efficiency.",
    bgImage: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205823/metal_xtbwa6.jpg",
  },
  {
    icon: <FaVideo size={30} />,
    title: "Smart Security Systems",
    desc: "Surveillance solutions including CCTV setup, gate barriers, PBX networking, and more.",
    bgImage: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205790/cctv_arisbl.jpg",
  },
];

const Products = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // For mobile, we'll animate all cards at once to prevent performance issues
  const mobileItemVariants = isMobile ? {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } : itemVariants;

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto" id="services">
      {/* Section Header */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10"
      >
        <motion.div variants={headerVariants} className="md:w-1/2">
          <h4 className="text-sm uppercase tracking-wider text-yellow-600 font-semibold mb-2">
            What We Offer
          </h4>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            Comprehensive Solutions <br className="hidden md:block" /> Tailored
            to Your Vision
          </h2>
        </motion.div>

        <motion.div variants={headerVariants} className="md:w-2/3">
          <p className="text-gray-700 text-sm leading-relaxed">
            We specialize in comprehensive construction solutions — from
            residential and commercial building development to advanced metal
            fabrication. With a commitment to innovation and craftsmanship, we
            deliver tailored solutions that meet the highest industry standards.
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={isMobile ? mobileItemVariants : itemVariants}
            custom={index}
            className="relative h-[300px] rounded-xl overflow-hidden group shadow-lg hover:shadow-xl bg-black transition-shadow duration-300"
            whileHover={!isMobile ? { 
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            } : {}}
          >
            {/* Background Image with optimized loading */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.bgImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
              <motion.div
                className="text-white mb-4"
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ 
                  delay: isMobile ? 0 : 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 500
                }}
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: isMobile ? 0 : 0.4 + index * 0.1,
                  duration: 0.6
                }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-white/90 text-sm group-hover:text-white transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: isMobile ? 0 : 0.5 + index * 0.1,
                  duration: 0.6
                }}
              >
                {service.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Products;