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

const services = [
  {
    icon: <FaHome size={30} />,
    title: "Building Construction",
    desc: "From foundation to finish, we build strong and reliable structures for residential and commercial needs.",
    bgImage: "/StruxzoraConstructions/sampleImages/construction.jpg",
  },
  {
    icon: <FaIndustry size={30} />,
    title: "Metal Works",
    desc: "Fabrication and installation of high-quality steel and metal components tailored to project needs.",
    bgImage: "/StruxzoraConstructions/sampleImages/product4.jpg",
  },
  {
    icon: <FaTools size={30} />,
    title: "Plumbing & Electrical",
    desc: "Complete plumbing and electrical installations done by certified professionals for safety and efficiency.",
    bgImage: "/StruxzoraConstructions/sampleImages/metal.jpg",
  },
  {
    icon: <FaVideo size={30} />,
    title: "CCTV & Security Systems",
    desc: "Surveillance solutions including CCTV setup, monitoring systems, and access control installations.",
    bgImage: "/StruxzoraConstructions/sampleImages/cctv.jpg",
  },
  {
    icon: <FaNetworkWired size={30} />,
    title: "PBX & Networking",
    desc: "Structured cabling, PBX systems, and enterprise-grade networking solutions for smooth communication.",
    bgImage: "/StruxzoraConstructions/sampleImages/pbx.jpg",
  },
  {
    icon: <FaDoorOpen size={30} />,
    title: "Gate Barriers",
    desc: "Automated gate barrier systems designed for secure, seamless access control and vehicle management.",
    bgImage: "/StruxzoraConstructions/sampleImages/gate.jpg",
  },
];

const Products = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-16 px-6 max-w-5xl mx-auto" id="services">
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
            Comprehensive Solutions <br className="hidden md:block" /> Tailored to
            Your Vision
          </h2>
        </motion.div>

        <motion.div variants={headerVariants} className="md:w-2/3">
          <p className="text-gray-700 text-sm leading-relaxed">
            We specialize in comprehensive construction solutions including
            building development, metal works, plumbing, electrical
            installations, and smart security systems. Whether it's CCTV, gate
            barriers, or PBX networking — we integrate innovation and
            craftsmanship to meet your project needs.
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="relative h-full min-h-[300px] rounded-lg overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.bgImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
              <div>
                <motion.div
                  className="text-white mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 mb-4 group-hover:text-white transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
              <motion.button
                className="self-start mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-md hover:bg-white/30 transition-colors border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Products;