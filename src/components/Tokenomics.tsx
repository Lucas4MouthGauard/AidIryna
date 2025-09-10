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
            $RYNA Tokenomics
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

        {/* Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            How It Works
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Token Sale</h4>
              <p className="text-sm text-gray-600">Buy $RYNA tokens</p>
            </div>

            <ArrowRight className="w-8 h-8 text-blue-600 hidden md:block" />

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Transparent Wallet</h4>
              <p className="text-sm text-gray-600">Funds held in public wallet</p>
            </div>

            <ArrowRight className="w-8 h-8 text-blue-600 hidden md:block" />

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Family Support</h4>
              <p className="text-sm text-gray-600">100% goes to Iryna&apos;s family</p>
            </div>
          </div>
        </motion.div>

        {/* Token Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">
              Token Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">$RYNA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Blockchain:</span>
                <span className="font-medium">Solana</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Supply:</span>
                <span className="font-medium">1,000,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Charity Allocation:</span>
                <span className="font-medium text-green-600">100%</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">
              Wallet Address
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <code className="text-sm break-all">
                RYNA...9K2mN8vQ7xP3wE5rT1yU6iO4aS2dF8gH7jL0
              </code>
            </div>
            <p className="text-sm text-gray-600">
              All donations are publicly verifiable on Solana blockchain
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
