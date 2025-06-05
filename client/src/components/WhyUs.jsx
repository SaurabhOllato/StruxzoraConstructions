import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Use intersection observer for the heading
  const [headingRef, headingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Use intersection observer for the grid items
  const [gridRef, gridInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="bg-[#011627] text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Top Heading Section with animation */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.p variants={itemVariants} className="uppercase text-sm text-yellow-400 mb-2">
            Why Choose Us
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-green-400">Designing</span> future with excellence
          </motion.h2>
          <motion.ul variants={itemVariants} className="space-y-2 mt-4 text-sm md:text-base">
            {/* You can add list items here if needed */}
          </motion.ul>
        </motion.div>

        {/* Grid Boxes with animation */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Box 1 */}
          <motion.div variants={itemVariants} className="border border-gray-600 p-6 rounded-md hover:border-green-400 transition-colors duration-300">
            <div className="text-yellow-400 text-3xl mb-4">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">One-Stop Construction Partner</h3>
            <p className="text-sm text-gray-300">From foundations to finishing, plumbing to PBX — we handle it all under one roof.</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div variants={itemVariants} className="border border-gray-600 p-6 rounded-md hover:border-green-400 transition-colors duration-300">
            <div className="text-yellow-400 text-3xl mb-4">
              <i className="fas fa-cog"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Quality Materials, Guaranteed Strength</h3>
            <p className="text-sm text-gray-300">We use top-grade steel, metals, and construction supplies that ensure long-term durability.</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div variants={itemVariants} className="border border-gray-600 p-6 rounded-md hover:border-green-400 transition-colors duration-300">
            <div className="text-yellow-400 text-3xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Advanced Security Expertise</h3>
            <p className="text-sm text-gray-300">We go beyond bricks and cement — offering CCTV, gate barriers, and PBX networking with expert precision.</p>
          </motion.div>

          {/* Box 4 */}
          <motion.div variants={itemVariants} className="border border-gray-600 p-6 rounded-md hover:border-green-400 transition-colors duration-300">
            <div className="text-yellow-400 text-3xl mb-4">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Transparent Pricing & Timelines</h3>
            <p className="text-sm text-gray-300">No hidden costs, no last-minute surprises. We stay on budget and deliver on time.</p>
          </motion.div>

          {/* Box 5 */}
          <motion.div variants={itemVariants} className="border border-gray-600 p-6 rounded-md hover:border-green-400 transition-colors duration-300">
            <div className="text-yellow-400 text-3xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Client-Centric Approach</h3>
            <p className="text-sm text-gray-300">We listen, adapt, and build around your vision — offering personalized project planning.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;