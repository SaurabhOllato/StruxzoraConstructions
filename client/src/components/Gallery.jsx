const galleryImages = [
  "/sampleImages/gallery1.jpg",
  "/sampleImages/gallery2.jpg",
  "/sampleImages/gallery3.jpg",
  "/sampleImages/gallery4.jpg",
  "/sampleImages/gallery5.jpg",
  "/sampleImages/gallery2.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 px-6 bg-white">
      <h3 className="text-3xl font-semibold text-center mb-8">Project Gallery</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded shadow-md group">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
