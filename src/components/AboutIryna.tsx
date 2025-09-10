'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Quote } from 'lucide-react'

export default function AboutIryna() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Iryna
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🇺🇦</span>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Iryna Zarutska
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Iryna was a brave Ukrainian refugee who escaped the horrors of war in her homeland, 
                seeking safety and a new beginning in the United States. Tragically, her journey 
                ended too soon when she lost her life in a stabbing incident on a train in Charlotte, USA.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                She survived the war, but not the world. Her story represents the struggles faced 
                by countless refugees seeking safety and hope in foreign lands.
              </p>

              <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 italic font-medium">
                    &ldquo;She survived the war, but not the world.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                Her Journey
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Escaped the war in Ukraine seeking safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Traveled to the United States for refuge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tragically lost her life in Charlotte, USA</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                News Sources
              </h4>
              <p className="text-gray-700 mb-4">
                Verified news coverage of the incident:
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Read verified news coverage
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">
                Our Mission
              </h4>
              <p className="text-blue-100">
                Through $RYNA, we honor Iryna&apos;s memory and support her family 
                with 100% transparent donations on the blockchain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
