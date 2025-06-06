import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200400/WhatsApp_Image_2025-06-06_at_12.28.21_PM_kze1lv.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200399/WhatsApp_Image_2025-06-06_at_12.28.21_PM_2_mcsegj.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200399/WhatsApp_Image_2025-06-06_at_12.28.34_PM_xzudyt.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200395/WhatsApp_Image_2025-06-06_at_12.28.35_PM_au0xan.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200393/WhatsApp_Image_2025-06-06_at_12.28.37_PM_xtw6sh.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200393/WhatsApp_Image_2025-06-06_at_12.28.28_PM_qyhg7i.jpg",
  },
  // Add more projects here for demonstration
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200392/WhatsApp_Image_2025-06-06_at_12.28.38_PM_1_gzcty4.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200392/WhatsApp_Image_2025-06-06_at_12.28.38_PM_yfroqw.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200393/WhatsApp_Image_2025-06-06_at_12.28.27_PM_wdbouc.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200398/WhatsApp_Image_2025-06-06_at_12.28.23_PM_2_wztv8n.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200397/WhatsApp_Image_2025-06-06_at_12.28.26_PM_t6t9sk.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dxscy1ixg/image/upload/v1749200391/WhatsApp_Image_2025-06-06_at_12.28.31_PM_1_gijgjk.jpg",
  },
];

const Gallery = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [displayCount, setDisplayCount] = useState(6); // Initial number of projects to display
  const galleryRef = useRef(null);
  const projectRefs = useRef([]);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            setVisibleProjects((prev) => [...prev, index]);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [displayCount]); // Add displayCount as dependency to re-observe when projects change

  // Get the projects to display based on the current count
  const displayedProjects = allProjects.slice(0, displayCount);
  const hasMoreProjects = displayCount < allProjects.length;

  const loadMore = () => {
    // Increase the display count by a certain amount (e.g., 3 more projects)
    setDisplayCount((prev) => prev + 3);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
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
    <section
      id="projects"
      className="py-16 px-6 bg-white max-w-5xl mx-auto"
      ref={galleryRef}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10"
      >
        <motion.div variants={headerVariants} className="md:w-1/2">
          <h3 className="text-3xl font-semibold  text-gray-800 border-l-4 border-yellow-500 pl-4">
            Project Highlights
          </h3>
          {/* <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            Comprehensive Solutions <br className="hidden md:block" /> Tailored
            to Your Vision
          </h2> */}
        </motion.div>

        <motion.div variants={headerVariants} className="md:w-2/3">
          <p className="text-gray-700 text-sm leading-relaxed">
            Our expertise spans across a wide range of metal structures
            including amusement parks, iron-framed buildings, glass bridges, and
            custom steelworks. We are continuously expanding our capabilities to
            include cutting-edge architectural designs, large-scale industrial
            frameworks, and bespoke steel fabrication.
          </p>
        </motion.div>
      </motion.div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`relative group overflow-hidden rounded shadow hover:shadow-lg transition duration-300 transform ${
              visibleProjects.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-500 ease-out`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="text-sm">{project.type}</p>
            </div>
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-medium transition-colors duration-300">
                View Project
              </button>
            </div> */}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        {hasMoreProjects ? (
          <button
            onClick={loadMore}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded font-medium transition-colors duration-300"
          >
            Load More Projects
          </button>
        ) : (
          <p className="text-gray-500">All projects are displayed</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;
