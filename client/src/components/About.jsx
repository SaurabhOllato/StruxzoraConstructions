import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";


import Image1 from "/sampleImages/product4.jpg";
import Image2 from "/sampleImages/gallery2.jpg";
import Image3 from "/sampleImages/gallery3.jpg";
import Image4 from "/sampleImages/gallery5.jpg";

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
    { value: "765+", label: "COMPLETED PROJECTS" },
    { value: "999+", label: "HAPPY CLIENTS" },
    { value: "21+", label: "YEARS OF EXPERIENCE" },
    { value: "380+", label: "PROFESSIONAL TEAM" },
  ];

  const images = [Image1, Image2, Image3, Image4]; // Your image imports

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
          <motion.div variants={item} className="mb-6 hidden lg:flex">
            <button className="flex items-center mx-auto lg:mx-0 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              MORE ABOUT US <FaArrowDown className="ml-2" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 hidden lg:flex md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-sm lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h4>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
