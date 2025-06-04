const WhyUs = () => {
  return (
    <section id="whyus" className="py-12 px-6 text-center bg-white">
      <h3 className="text-3xl font-semibold mb-8">Why Choose Us?</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 shadow-md rounded border">
          <h4 className="text-xl font-bold mb-2">Quality Materials</h4>
          <p className="text-gray-600">We provide only certified and industry-standard construction metals.</p>
        </div>
        <div className="p-6 shadow-md rounded border">
          <h4 className="text-xl font-bold mb-2">Reliable Delivery</h4>
          <p className="text-gray-600">On-time delivery for your construction deadlines, every time.</p>
        </div>
        <div className="p-6 shadow-md rounded border">
          <h4 className="text-xl font-bold mb-2">Experienced Team</h4>
          <p className="text-gray-600">We’ve been in the construction material business for over 20 years.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
