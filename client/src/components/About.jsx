import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

// Sample images - replace with your actual images
import Image1 from "/sampleImages/gallery1.jpg"; 
import Image2 from "/sampleImages/gallery2.jpg"
import Image3 from "/sampleImages/gallery3.jpg"
import Image4 from "/sampleImages/gallery4.jpg"

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const imageStack = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  const stats = [
    { value: "765+", label: "COMPLETED PROJECTS" },
    { value: "999+", label: "HAPPY CLIENTS" },
    { value: "21+", label: "YEARS OF EXPERIENCE" },
    { value: "380+", label: "PROFESSIONAL TEAM" }
  ];

  const images = [Image1, Image2, Image3]; // Your image imports

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side - Image Stack */}
        <motion.div 
          className="w-full lg:w-1/2 relative h-[500px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageStack}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-lg shadow-xl overflow-hidden ${index === 0 ? 'w-3/5 left-0 top-0 z-30' : index === 1 ? 'w-3/5 right-0 top-1/4 z-20' : 'w-3/5 left-1/4 top-1/2 z-10'}`}
              variants={imageItem}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={img} 
                alt={`Our work ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Content (kept exactly as you provided) */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
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
            <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 mt-4 mb-6" />
            <h4 className="text-xl font-semibold text-gray-600">
              Committed To Superior Quality & Results
            </h4>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={item} className="mb-12">
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg font-medium text-gray-700 mb-6">
              We're problem-solvers with focus. Project managers with purpose.
              Team players with one goal in mind: To deliver your project on time,
              on budget, and on vision.
            </p>
            <p className="max-w-3xl mx-auto lg:mx-0 text-gray-600">
              We specialize in comprehensive construction solutions including
              building construction, metal works, plumbing, electrical
              installations, and advanced security systems. Our expertise covers
              CCTV cameras, gate barriers, PBX networking, and more — providing
              you with reliable and integrated services for your projects.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="mb-16">
            <button className="flex items-center mx-auto lg:mx-0 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              MORE ABOUT US <FaArrowDown className="ml-2" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-4xl font-bold text-blue-600 mb-2">
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