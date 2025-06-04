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
  return (
    <section id="gallery" className="py-16 px-6 bg-white max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-10 text-gray-800 border-l-4 border-yellow-500 pl-4">
        Our Featured Project
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded shadow hover:shadow-lg transition duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="text-sm">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
