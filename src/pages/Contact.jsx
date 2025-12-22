import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      {/* ================== BANNER ================== */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-24 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Let’s <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-blue-100 text-lg">
            Ready to connect with Amrutdhhann? Our team is here to guide you
            through investments, partnerships, and dairy business opportunities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919XXXXXXXXX"
              className="bg-yellow-400 hover:bg-yellow-500 text-black  flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
            >
              <FaPhone size={20}/> Call Now
            </a>
            <a
              href="https://wa.me/919XXXXXXXXX"
              className="bg-green-500 hover:bg-green-600 text-white px-6 flex items-center gap-2 py-3 rounded-xl font-semibold"
            >
              <FaWhatsapp size={25}/> WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================== CONTACT SECTION ================== */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900">
              Contact Information
            </h2>

            <div>
              <h4 className="font-semibold text-blue-900">Corporate Office</h4>
              <p className="text-gray-700">
                Amrutdhhann Dairy Enterprises <br />
                Hyderabad, Telangana, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">Phone</h4>
              <p className="text-gray-700">+91 9XXXXXXXXX</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">Email</h4>
              <p className="text-gray-700">info@anandgroup.org</p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900">Business Hours</h4>
              <p className="text-gray-700">
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
            className="bg-white rounded-3xl shadow-xl p-10"
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
                className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold text-lg shadow-lg"
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
        <FaWhatsapp/>
      </a>
    </>
  );
};

export default Contact;
