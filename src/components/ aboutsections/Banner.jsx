import React from 'react'
import { motion } from 'framer-motion';
const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 px-6 py-14 text-white overflow-hidden">

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Glass Card */}
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-14 text-center shadow-2xl">
          
          {/* Sanskrit Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            धर्मो रक्षति रक्षितः
          </h1>

          {/* Transliteration */}
          <p className="italic text-lg md:text-xl text-blue-100 mb-4">
            "Dharmo Rakshati Rakshitah"
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>

          {/* Meaning */}
          <p className="text-base md:text-lg text-blue-100 leading-relaxed">
            Where righteousness protects the protector, and ethical practices
            build lasting legacies.
          </p>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl mx-auto text-center mt-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-yellow-400">Story</span>
          </h2>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            "We believe that ethical practices are the foundation of lasting
            progress. When we uphold the right principles, they guide us forward
            and safeguard the people who depend on us."
          </p>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Banner