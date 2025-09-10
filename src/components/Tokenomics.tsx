'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Heart } from 'lucide-react'

export default function Tokenomics() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            $AidIryna Tokenomics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, charitable, and built on the Solana blockchain
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              100% Transparent
            </h3>
            <p className="text-gray-600">
              All transactions are publicly verifiable on the Solana blockchain
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              100% Charitable
            </h3>
            <p className="text-gray-600">
              Every dollar raised goes directly to Iryna&apos;s family
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Community Driven
            </h3>
            <p className="text-gray-600">
              Built by the community, for the community
            </p>
          </motion.div>
        </div>

        {/* Pump.fun Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Trade $AidIryna on Pump.fun
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            80% of all $AidIryna proceeds go directly to Iryna&apos;s family
          </p>
          <a
            href="https://pump.fun/coin/6XGTr5c8CDQxbbMtufD9gYc4fdDahHqb52MhVypdpump"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
            Trade on Pump.fun
          </a>
        </motion.div>

      </div>
    </section>
  )
}
