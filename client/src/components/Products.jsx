const products = [
{ name: "TMT Bars", image: "/sampleImages/product1.jpg" },
  { name: "Steel Pipes", image: "/sampleImages/product2.jpg" },
  { name: "Iron Rods", image: "/sampleImages/product3.jpg" },
  { name: "Beams & Channels", image: "/sampleImages/product4.jpg" },
];

const Products = () => {
  return (
    <section id="products" className="py-12 px-6 bg-gray-100">
      <h3 className="text-3xl font-semibold text-center mb-8">Our Products</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((item) => (
          <div key={item.name} className="bg-white rounded shadow p-4 text-center">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover rounded mb-4" />
            <h4 className="text-xl font-bold">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
