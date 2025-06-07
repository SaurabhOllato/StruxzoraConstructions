import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";


import { useEffect, useState } from "react";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageStack = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const stats = [
    { value: 765, label: "COMPLETED PROJECTS", suffix: "+" },
    { value: 999, label: "HAPPY CLIENTS", suffix: "+" },
    { value: 21, label: "YEARS OF EXPERIENCE", suffix: "+" },
    { value: 380, label: "PROFESSIONAL TEAM", suffix: "+" },
  ];

  const Counter = ({ target, suffix = "", duration = 2 }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    useEffect(() => {
      if (!inView) return;

      let start = 0;
      const end = target;
      const incrementTime = (duration * 1000) / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [inView, target, duration]);
    return (
      <span ref={ref} className="text-blue-600">
        {count}
        {suffix}
      </span>
    );
  };

const images = [
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205811/product4_ahp9ib.jpg",
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205823/metal_xtbwa6.jpg",
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205795/gallery5_neqxe4.jpg",
  "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749205802/gallery3_ma5pfb.jpg",
];

  return (
    <section id="about" className="lg:pb-0 py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row gap-12 justify-center items-center">
        {/* Left Side - Image Stack */}
        <motion.div
          className="w-full lg:w-1/2 relative h-[300px] md:h-[600px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageStack}
        >
          {images.slice(0, 4).map((img, index) => (
            <motion.div
              key={index}
              className={`
        absolute rounded-lg shadow-xl overflow-hidden border-2 border-white
        ${
          index === 0
            ? "w-3/5 left-0 top-0 z-40 md:w-2/5"
            : index === 1
            ? "w-3/5 right-0 top-20 z-30 md:w-2/5"
            : index === 2
            ? "w-3/5 left-0 top-40 z-20 md:w-2/5"
            : "w-3/5 right-0 top-64 z-10 md:w-2/5"
        }
        
        /* Responsive adjustments */
        sm:!w-1/2 
        ${
          index === 0
            ? "sm:left-4 sm:top-4"
            : index === 1
            ? "sm:right-4 sm:top-20"
            : index === 2
            ? "sm:left-4 sm:top-36"
            : "sm:right-4 sm:top-60"
        }
      `}
              variants={imageItem}
              whileHover={{ scale: 1.03, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={img}
                alt={`Our work ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Content (kept exactly as you provided) */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-4">
            <h3 className="text-3xl uppercase tracking-wider font-bold text-gray-800">
              Who We Are
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 mt-4 mb-2" />
            <h6 className="text-sm font-semibold text-gray-600">
              Committed To Superior Quality & Results
            </h6>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={item} className="mb-6">
            <p className="max-w-3xl mx-auto lg:mx-0 text-gray-600 text-justify">
              We specialize in comprehensive construction solutions including
              building construction, metal works, plumbing, electrical
              installations, and advanced security systems. Our expertise covers
              CCTV cameras, gate barriers, PBX networking, and more — providing
              you with reliable and integrated services for your projects.
            </p>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg font-medium text-gray-700 mb-4 text-justify">
              {/* We're problem-solvers with focus. Project managers with purpose. */}
              Team players with one goal in mind: To deliver your project on
              time, on budget, and on vision.
            </p>
          </motion.div>

          {/* CTA */}
          {/* <motion.div variants={item} className="mb-6 hidden lg:flex">
            <button className="flex items-center mx-auto lg:mx-0 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              MORE ABOUT US <FaArrowDown className="ml-2" />
            </button>
          </motion.div> */}

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={1.5 + index * 0.2}
                    />
                  </h4>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
