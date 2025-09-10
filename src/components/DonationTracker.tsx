'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DonationTracker() {
  const [totalRaised, setTotalRaised] = useState(0)
  const [donationCount, setDonationCount] = useState(0)

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalRaised(prev => prev + Math.random() * 100)
      setDonationCount(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const recentDonations = [
    { amount: 0.5, address: '7xK2...9mN8', time: '2 min ago' },
    { amount: 1.2, address: '3wE5...rT1y', time: '5 min ago' },
    { amount: 0.8, address: '6iO4...aS2d', time: '8 min ago' },
    { amount: 2.1, address: 'F8gH...7jL0', time: '12 min ago' },
  ]

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
            Live Donation Tracker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time transparency on the blockchain
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg text-center"
          >
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">
              ${totalRaised.toFixed(2)} SOL
            </h3>
            <p className="text-blue-100">Total Raised</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-2xl shadow-lg text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">
              {donationCount}
            </h3>
            <p className="text-yellow-100">Donations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg text-center"
          >
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">
              Live
            </h3>
            <p className="text-green-100">Updates</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wallet Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Donation Wallet
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Solana Address
                </label>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                  <code className="text-sm break-all text-gray-800">
                    AidIryna9K2mN8vQ7xP3wE5rT1yU6iO4aS2dF8gH7jL0mN8vQ7xP3wE5rT1yU6iO4aS2dF8gH7jL0
                  </code>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View on Solscan
              </button>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> All donations are publicly verifiable on the Solana blockchain. 
                  No fees, no middlemen - 100% goes to Iryna&apos;s family.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Recent Donations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Recent Donations
            </h3>
            
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold text-green-600">
                      {donation.amount} SOL
                    </p>
                    <p className="text-sm text-gray-500">
                      {donation.address}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">
                      {donation.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                View All Transactions →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of people around the world who are supporting Iryna&apos;s family 
              through transparent blockchain donations.
            </p>
            <a
              href="https://pump.fun/coin/6XGTr5c8CDQxbbMtufD9gYc4fdDahHqb52MhVypdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Trade on Pump.fun
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
