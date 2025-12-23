import { motion } from "framer-motion";
import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";


const Contact = () => {

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1
      }
    }
  };
  return (
    <div className="relative overflow-x-hidden">
      {/* ================== BANNER ================== */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-20 overflow-hidden">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-30 blur-lg"
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-12 h-12 bg-cyan-300 rounded-full opacity-25 blur-lg"
            animate={{ x: [0, 60, 0], y: [0, 80, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-flex items-center justify-center mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
              <div className="relative bg-gradient-to-br from-white to-blue-100 p-6 lg:p-8 rounded-2xl shadow-2xl">
                <FaCalendarAlt className="w-10 h-10 lg:w-12 lg:h-12 text-blue-900" />
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 p-2 rounded-full shadow-lg"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaPhone className="w-4 h-4" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 bg-green-400 text-blue-900 p-2 rounded-full shadow-lg"
              animate={{ scale: [1, 1.1, 1], rotate: [0, -15, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FaEnvelope className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Let’s <span className="text-yellow-400">Connect</span>
            </h1>

            <p className="text-blue-100 md:text-lg text-sm mb-8">
              Ready to connect with Amrutdhhann? Our team is here to guide you through
              investments, partnerships, and dairy business opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919XXXXXXXXX"
                className="bg-yellow-400 hover:bg-yellow-500 text-black flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
              >
                <FaPhone size={20} /> Call Now
              </a>

              <a
                href="https://wa.me/919XXXXXXXXX"
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
              >
                <FaWhatsapp size={22} /> WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ================== CONTACT SECTION ================== */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 md:py-20  py-14 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl md:p-10 p-5 md:space-y-6 space-y-3"
          >
            <h2 className="md:text-3xl text-xl  font-bold text-blue-900">
              Contact Information
            </h2>

            <div>
              <h4 className="font-semibold text-blue-900">Corporate Office</h4>
              <p className="text-gray-700 text-sm md:text-md">
                Amrutdhhann Dairy Enterprises <br />
                Hyderabad, Telangana, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">Phone</h4>
              <p className="text-gray-700 text-sm md:text-md">+91 9XXXXXXXXX</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">Email</h4>
              <p className="text-gray-700 text-sm md:text-md">info@anandgroup.org</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">Business Hours</h4>
              <p className="text-gray-700 text-sm md:text-md">
                Monday – Saturday <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl text-blue-900 font-semibold text-center">
              Pure Milk • Ethical Farming • Sustainable Growth
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl md:p-10 p-5"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full md:py-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold md:text-lg  text-md shadow-lg"
              >
                Submit Enquiry →
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================== MAP ================== */}
      <section className="border-t mb-3">
        <iframe
          title="Amrutdhhann Location"
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          className="w-full h-[380px] border-0"
          loading="lazy"
        ></iframe>
      </section>

      {/* ================== FLOATING WHATSAPP ================== */}
      <a
        href="https://wa.me/919XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-3xl z-50"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Contact;
