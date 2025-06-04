import {
  FaHome,
  FaIndustry,
  FaTools,
  FaVideo,
  FaNetworkWired,
  FaDoorOpen,
} from "react-icons/fa";
const services = [
  {
    icon: <FaHome size={30} />,
    title: "Building Construction",
    desc: "From foundation to finish, we build strong and reliable structures for residential and commercial needs.",
  },
  {
    icon: <FaIndustry size={30} />,
    title: "Metal Works",
    desc: "Fabrication and installation of high-quality steel and metal components tailored to project needs.",
  },
  {
    icon: <FaTools size={30} />,
    title: "Plumbing & Electrical",
    desc: "Complete plumbing and electrical installations done by certified professionals for safety and efficiency.",
  },
  {
    icon: <FaVideo size={30} />,
    title: "CCTV & Security Systems",
    desc: "Surveillance solutions including CCTV setup, monitoring systems, and access control installations.",
  },
  {
    icon: <FaNetworkWired size={30} />,
    title: "PBX & Networking",
    desc: "Structured cabling, PBX systems, and enterprise-grade networking solutions for smooth communication.",
  },
  {
    icon: <FaDoorOpen size={30} />,
    title: "Gate Barriers",
    desc: "Automated gate barrier systems designed for secure, seamless access control and vehicle management.",
  },
];


const Products = () => {
  return (
     <section className="py-16 px-6 bg-white max-w-5xl mx-auto" id="services">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
    <div className="md:w-1/2">
      <h4 className="text-sm uppercase tracking-wider text-yellow-600 font-semibold mb-2">
        What We Offer
      </h4>
      <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
        Sure, We Build <br className="hidden md:block" /> Impressive
      </h2>
    </div>
    <div className="md:w-2/3">
      <p className="text-gray-700 text-sm leading-relaxed">
        We specialize in comprehensive construction solutions including building development, metal works, plumbing, electrical installations, and smart security systems. Whether it's CCTV, gate barriers, or PBX networking — we integrate innovation and craftsmanship to meet your project needs.
      </p>
    </div>
  </div>
     
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg border hover:shadow-lg transition duration-300">
            <div className="text-teal-700 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded shadow">
              View Detail →
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
