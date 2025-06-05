import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div>
          <p className="text-sm uppercase tracking-widest text-yellow-500 mb-2">Contact Us</p>
          <h3 className="text-3xl font-bold mb-6">
            Get in touch with<span className="text-green-500"> us!</span>
          </h3>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'} p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 w-full font-semibold transition-colors duration-300 disabled:bg-yellow-300 flex justify-center items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SENDING...
                </>
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className="space-y-6 mt-10">
          <h4 className="text-xl font-bold">Are You Going to Implement Project?</h4>
          
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3" />
            <div>
              <p className="font-bold uppercase text-sm mb-1">Address</p>
              <p>2047 Cyrus Viaduct East<br />Jadynchester</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FaEnvelope className="text-yellow-500 mt-1 mr-3" />
            <div>
              <p className="font-bold uppercase text-sm mb-1">Email</p>
              <p>info@construct.com<br />support@construct.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FaPhone className="text-yellow-500 mt-1 mr-3" />
            <div>
              <p className="font-bold uppercase text-sm mb-1">Phone</p>
              <p>1 - 313 - 645 - 3395<br />1 - 469 - 970 - 2609</p>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-800 hover:text-pink-600 transition-colors duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-800 hover:text-black transition-colors duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-800 hover:text-green-500 transition-colors duration-300">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
          
          {/* Optional: Map Embed */}
          {/* <div className="pt-4">
            <div className=" aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256089749!2d-73.9878446845938!3d40.74844047932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1623861234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;