import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaChargingStation, FaTools, FaCheckCircle } from 'react-icons/fa'

const ServiceDetailList = ({ setView }) => {
  const brands = [
    { name: "ELGi", desc: "Known for highly efficient, rust-proof borewell compressor pumps." },
    { name: "Atlas Copco", desc: "Produces XRX 1100 and Xrv 1200 diesel-driven models." },
    { name: "Wren Engineering", desc: "Manufactures VT4 and other high-pressure borewell air compressors." },
    { name: "Suguna Motors", desc: "Offers durable monoblock borewell compressor pumps." },
    { name: "Other Types", desc: "Doosan, Maruti, Crompton (belt-driven), and local reciprocating compressors (1.5hp, 3hp, 5hp, 7.5hp)." }
  ];

  const serviceItems = [
    { title: "Borewell Cleaning", desc: "Compressed air cleaning to remove slush and improve yield." },
    { title: "Borewell Repair & Services", desc: "Fixing compressor pumps and submersible pump repairs." },
    { title: "Inspection Services", desc: "Checking water levels and well integrity." },
    { title: "Drilling Services", desc: "Specialized rigs for agricultural and domestic water wells." },
    { title: "Installation", desc: "Setting up new compressor units." }
  ];

  const providers = [
    "Prasad Borewells (Salem)",
    "Sri Shirdi Borewell",
    "Gmats Machineries India Private Limited",
    "Sgr Borewell Pump Sales and Services"
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-accent font-extrabold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all"
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-8 uppercase tracking-tighter"
          >
            Borewell Machine <br />
            <span className="text-accent underline-offset-8 decoration-accent">Service Directory</span>
          </motion.h1>
          
          <p className="text-text-muted text-lg mb-16 leading-loose max-w-2xl">
            Specialized engineering services for industrial and domestic water harvesting systems. We maintain the highest standards in compressor repair and drilling technology.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="bg-bg-soft p-10 md:p-14 border-l-4 border-accent relative">
                <FaTools className="absolute top-10 right-10 text-accent opacity-10 text-6xl" />
                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-primary mb-12">Our Specialized Services</h2>
                <div className="space-y-10">
                  {serviceItems.map((s, i) => (
                    <div key={i} className="group">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">{s.title}</h4>
                      <p className="text-sm font-bold uppercase tracking-widest text-text-muted opacity-80 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-primary mb-10">Brand Expertise</h2>
                <div className="space-y-6">
                  {brands.map((b, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-1.5 h-6 bg-accent mt-1"></div>
                      <div>
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary mb-1">{b.name}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted opacity-60">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark p-12 text-white">
                <h3 className="text-xl font-extrabold mb-8 uppercase tracking-widest text-accent">Key Partners</h3>
                <div className="space-y-4">
                  {providers.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all cursor-default">
                      <FaCheckCircle className="text-accent" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailList
