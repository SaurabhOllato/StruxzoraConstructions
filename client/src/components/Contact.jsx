const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Your Name" className="border p-3 rounded" />
        <input type="email" placeholder="Email Address" className="border p-3 rounded" />
        <textarea placeholder="Your Message" rows="4" className="border p-3 rounded"></textarea>
        <button type="submit" className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

