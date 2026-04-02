import React from 'react'
import { motion } from 'framer-motion'

const Ticker = () => {
  const items = [
    "Reliability First",
    "24/7 Response",
    "Expert Techs",
    "Genuine Spares",
    "Precision Engineering",
    "Industrial Excellence"
  ]

  return (
    <div className="bg-dark py-4 border-y border-white/5 overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-24 items-center"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className={`text-xs md:text-sm font-extrabold uppercase tracking-[6px] ${i % 2 === 0 ? 'text-white' : 'text-accent'} opacity-90`}>
              {item}
            </span>
            <div className="w-2 h-2 bg-accent rotate-45"></div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Ticker
