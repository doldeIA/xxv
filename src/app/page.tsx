import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 neon-glow my-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text">
            Welcome to Amarasté
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A modern web experience with glassmorphism and neon aesthetics
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-medium text-white"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}