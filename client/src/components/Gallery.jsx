import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    image: "/StruxzoraConstructions/sampleImages/gallery1.jpg",
    title: "Theater of Indonesia",
    type: "Public Building",
  },
  {
    image: "/StruxzoraConstructions/sampleImages/gallery2.jpg",
    title: "Balaraja Apartment",
    type: "Apartment",
  },
  {
    image: "/StruxzoraConstructions/sampleImages/gallery3.jpg",
    title: "The Puri Mall",
    type: "Commercial Building",
  },
  {
    image: "/StruxzoraConstructions/sampleImages/gallery4.jpg",
    title: "Cisoka Motel",
    type: "Public Building",
  },
  {
    image: "/StruxzoraConstructions/sampleImages/gallery5.jpg",
    title: "Gatotkaca Office",
    type: "Office Tower",
  },
  {
    image: "/StruxzoraConstructions/sampleImages/gallery2.jpg",
    title: "Depok Arts Building",
    type: "Public Building",
  },
];

const Gallery = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const galleryRef = useRef(null);
  const projectRefs = useRef([]);

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
        rootMargin: '0px',
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
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-white max-w-5xl mx-auto" ref={galleryRef}>
      <h3 className="text-3xl font-semibold mb-10 text-gray-800 border-l-4 border-yellow-500 pl-4">
        Our Featured Project
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`relative group overflow-hidden rounded shadow hover:shadow-lg transition duration-300 transform ${
              visibleProjects.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
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
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-medium transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded font-medium transition-colors duration-300">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Gallery;