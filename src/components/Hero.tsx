'use client'

import { motion } from 'framer-motion'
import { Heart, Flame, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <>
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-900">$AidIryna</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/AidIryna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline">@AidIryna</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with candlelight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-600/10 to-yellow-400/20" />
      
      {/* Floating candle particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <Flame className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-blue-900 mb-4">
            AidIryna
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-2 font-medium">
            Remember Iryna, Help Her Family
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All proceeds from $AidIryna are donated directly to Iryna&apos;s loved ones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Heart className="w-5 h-5" />
            Donate Now
          </button>
          
          <p className="text-sm text-gray-500">
            💙 Supporting Ukrainian families through blockchain transparency
          </p>
        </motion.div>
      </div>
    </section>
    </>
  )
}
