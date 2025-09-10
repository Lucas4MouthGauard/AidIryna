'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-yellow-400" />
              $AidIryna
            </h3>
            <p className="text-blue-100 mb-4">
              A memorial memecoin project dedicated to supporting Iryna&apos;s family 
              through transparent blockchain donations.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-sm">💬</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-sm">📱</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Donation Wallet</h4>
            <div className="bg-blue-800 p-4 rounded-lg mb-4">
              <code className="text-sm break-all text-blue-100">
                RYNA9K2mN8vQ7xP3wE5rT1yU6iO4aS2dF8gH7jL0mN8vQ7xP3wE5rT1yU6iO4aS2dF8gH7jL0
              </code>
            </div>
            <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              View on Solscan
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">
                  About Iryna
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-yellow-400 transition-colors duration-200">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#tracker" className="hover:text-yellow-400 transition-colors duration-200">
                  Donation Tracker
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-yellow-400 transition-colors duration-200">
                  Community
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-blue-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-blue-100">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">
                AidIryna is a non-profit memorial project. 100% of proceeds go directly to Iryna&apos;s family.
              </span>
            </div>
            <div className="text-sm text-blue-200">
              © 2024 $AidIryna Memorial Project. Built with ❤️ for Iryna.
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-blue-800 rounded-lg"
        >
            <p className="text-xs text-blue-200 text-center">
              <strong>Disclaimer:</strong> $AidIryna is a charitable memorial token. This is not financial advice. 
              All donations are voluntary and go directly to Iryna&apos;s family. Cryptocurrency investments 
              carry risk. Please donate responsibly.
            </p>
        </motion.div>
      </div>
    </footer>
  )
}
