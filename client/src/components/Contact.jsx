const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div>
          <p className="text-sm uppercase tracking-widest text-yellow-500 mb-2">Contact Us</p>
          <h3 className="text-3xl font-bold mb-6">
            Do You Have any <span className="text-green-500">Questions?</span>
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-3 w-full outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-3 w-full outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 w-full outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="border border-gray-300 p-3 w-full outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 w-full font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className="space-y-6 mt-10">
          <h4 className="text-xl font-bold">Are You Going to Implement Project?</h4>
          <div>
            <p className="font-bold uppercase text-sm mb-1">Address</p>
            <p>2047 Cyrus Viaduct East<br />Jadynchester</p>
          </div>
          <div>
            <p className="font-bold uppercase text-sm mb-1">Email</p>
            <p>info@construct.com<br />support@construct.com</p>
          </div>
          <div>
            <p className="font-bold uppercase text-sm mb-1">Phone</p>
            <p>1 - 313 - 645 - 3395<br />1 - 469 - 970 - 2609</p>
          </div>
          <div className="flex space-x-4 pt-2">
            <a href="#"><i className="fab fa-facebook-f text-xl text-gray-800 hover:text-blue-600"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl text-gray-800 hover:text-pink-600"></i></a>
            <a href="#"><i className="fab fa-x text-xl text-gray-800 hover:text-black"></i></a>
            <a href="#"><i className="fab fa-whatsapp text-xl text-gray-800 hover:text-green-500"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
