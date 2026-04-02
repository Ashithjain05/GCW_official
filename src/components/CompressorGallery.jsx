import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa'

const compressors = [
  {
    name: "ELGi Borewell Series",
    power: "1HP - 10HP",
    type: "Borewell Pump",
    image: "https://images.unsplash.com/photo-1542362567-b051c63b9a27?q=80&w=2070&auto=format&fit=crop",
    desc: "Optimized for residential and small-scale borewell operations.",
    features: ["Quiet Operation", "High Efficiency", "Long Life"]
  },
  {
    name: "Atlas Copco XRX",
    power: "15HP - 40HP",
    type: "Industrial Screw",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    desc: "Heavy-duty screw compressor for continuous industrial use.",
    features: ["Precision Control", "Energy Saving", "Robust Build"]
  },
  {
    name: "Chicago Pneumatic CP1",
    power: "5HP - 20HP",
    type: "Reciprocating",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    desc: "Standard industrial compressor for versatile workshop applications.",
    features: ["Low Maintenance", "Durable Valves", "Safety First"]
  },
  {
    name: "Universal Borewell Unit",
    power: "1 HP - 40 HP",
    type: "Multi-Phase",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
    desc: "Wide range of power ratings for deep borewell applications up to 1500ft.",
    features: ["Dual Phase", "Corrosion Resistant", "High Pressure"]
  },
  {
    name: "Suguna Monoblock",
    power: "1HP - 5HP",
    type: "Portable",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb3b?q=80&w=2070&auto=format&fit=crop",
    desc: "Compact and easy-to-move monoblock compressors for light work.",
    features: ["Fast Cooling", "Portable Design", "Ease of Use"]
  },
  {
    name: "Texmo Borewell RAC",
    power: "5HP - 15HP",
    type: "Reciprocating",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    desc: "Trusted series for high-depth water lifting in agriculture.",
    features: ["Agri-Grade", "Reliable Tech", "Heavy Duty"]
  }
];

const CompressorGallery = ({ setView }) => {
  return (
    <div className="bg-bg-soft min-h-screen pt-40 pb-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <motion.button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-accent font-extrabold uppercase tracking-widest text-[10px] mb-8 hover:text-primary transition-colors"
            >
              <FaArrowLeft /> Back to Home
            </motion.button>
            <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter">
              AIR COMPRESSOR <br />
              <span className="text-accent underline-offset-8 decoration-accent">COLLECTION</span>
            </h1>
          </div>
          <p className="text-text-muted text-sm font-bold uppercase tracking-widest max-w-xs border-l-4 border-accent pl-6">
            Showing all high-performance air compressors available for sale and service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compressors.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 shadow-xl relative group overflow-hidden border border-grey-100 flex flex-col hover:shadow-2xl transition-all"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 -mr-8 -mt-8 rounded-full group-hover:bg-accent/15 transition-all duration-500"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[8px] font-extrabold text-accent bg-accent/5 px-2 py-1 rounded-sm uppercase tracking-widest whitespace-nowrap">
                  {c.type}
                </span>
                <span className="text-[8px] font-extrabold text-grey-400 uppercase tracking-widest">{c.power}</span>
              </div>

              <div className="w-full aspect-video bg-grey-50 mb-6 overflow-hidden border border-grey-50 group-hover:border-accent transition-colors">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>

              <h2 className="text-sm font-extrabold mb-3 uppercase tracking-tight group-hover:text-accent transition-colors line-clamp-2 min-h-[40px]">
                {c.name}
              </h2>
              
              <p className="text-text-muted text-[10px] leading-relaxed mb-6 h-12 overflow-hidden opacity-80">
                {c.desc}
              </p>

              <div className="space-y-2 mb-8 flex-1">
                {c.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest text-text-main opacity-70">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex gap-2 border-t border-grey-50 pt-6 mt-auto">
                <a href="#booking" className="btn btn-accent w-full py-3 text-[8px] font-extrabold tracking-widest rounded-none">Enquire</a>
                <button className="p-3 border border-grey-100 text-text-muted hover:text-accent transition-colors text-xs">
                  <FaInfoCircle />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompressorGallery
