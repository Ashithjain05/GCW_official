import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaClock, FaUserCheck, FaToolbox } from 'react-icons/fa'

const Highlights = [
  {
    icon: <FaShieldAlt />,
    title: "Reliability First",
    text: "Engineered for maximum uptime and industrial reliability."
  },
  {
    icon: <FaClock />,
    title: "24/7 Response",
    text: "Emergency support within 24 hours anywhere in Tumkur."
  },
  {
    icon: <FaUserCheck />,
    title: "Expert Techs",
    text: "Factory-trained specialists for Bosch and Hydraulic systems."
  },
  {
    icon: <FaToolbox />,
    title: "Genuine Spares",
    text: "Only certified industrial parts for long-term durability."
  }
]

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 bg-dark py-24 md:py-40 mt-12 md:mt-24 overflow-hidden text-white border-y border-white/5">
      <div className="absolute inset-0 bg-accent/5 -z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {Highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 md:p-8 border border-white/10 hover:border-accent hover:bg-white/5 transition-all duration-500"
            >
              <div className={`text-3xl md:text-4xl ${i % 2 === 0 ? 'text-accent' : 'text-grey-300'} mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {h.icon}
              </div>
              <h3 className="text-sm md:text-xl font-extrabold mb-3 md:mb-4 uppercase tracking-tighter text-accent">
                {h.title}
              </h3>
              <p className="text-grey-200 text-[9px] md:text-xs font-bold font-mono tracking-widest uppercase leading-relaxed md:leading-loose">
                {h.text}
              </p>
              <div className="w-10 md:w-12 h-[2px] md:h-1 bg-accent mt-6 md:mt-8 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .bg-dark { background-color: #0c0e12; }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
