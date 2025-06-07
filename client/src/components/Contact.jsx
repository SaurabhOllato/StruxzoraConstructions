import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Intersection Observer hooks for scroll animations
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-yellow-500 mb-2"
          >
           Ready to build something amazing?
          </motion.p>
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            Contact<span className="text-green-500"> us!</span>
          </motion.h3>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 text-green-700 rounded"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } p-3 w-full outline-none focus:ring-2 focus:ring-yellow-400`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 w-full font-semibold transition-colors duration-300 disabled:bg-yellow-300 flex justify-center items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    SENDING...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          ref={infoRef}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col justify-center"
        >
          <motion.h6
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 mb-8"
          >
           Contact us today for a quote.  
          </motion.h6>

          <motion.div
            variants={itemVariants}
            className="grid gap-8 grid-cols-1 sm:grid-cols-2"
          >
            {/* Address */}
            {/* <motion.div
              className="flex items-start p-5"
              whileHover={{ y: -5 }}
            >
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-yellow-600 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">Our Location</p>
                <p className="text-gray-600">
                  2047 Cyrus Viaduct East
                  <br />
                  Jadynchester, 90210
                </p>
              </div>
            </motion.div> */}

            {/* Email */}
            <motion.div
              className="flex items-start p-5"
              whileHover={{ y: -5 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">Email Us</p>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@construct.com"
                    className="hover:text-green-600 hover:underline transition-colors"
                  >
                    info@construct.com
                  </a>
                  <br />
                  <a
                    href="mailto:support@construct.com"
                    className="hover:text-green-600 hover:underline transition-colors"
                  >
                    support@construct.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-start p-5"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">Call Us</p>
                <p className="text-gray-600">
                  <a
                    href="tel:13136453395"
                    className="hover:text-blue-600 hover:underline transition-colors"
                  >
                    (313) 645-3395
                  </a>
                  <br />
                  <a
                    href="tel:14699702609"
                    className="hover:text-blue-600 hover:underline transition-colors"
                  >
                    (469) 970-2609
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4">
            <h5 className="text-lg font-semibold text-center text-gray-700 mb-4">
              Connect With Us
            </h5>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#"
                className="text-white bg-blue-600 rounded-full p-3  flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaFacebookF className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                className="text-white bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-3 shadow-lg flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                className="text-white bg-gray-800 rounded-full p-3 shadow-lg flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              {/* <motion.a
                href="#"
                className="text-white bg-green-500 rounded-full p-3 shadow-lg flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaWhatsapp className="text-xl" />
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
