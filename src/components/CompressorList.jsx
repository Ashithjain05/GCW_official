import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'

const CompressorList = ({ setView }) => {
  const machines = [
    "ELGi Borewell Compressor Pumps (ranging from 1HP to 10HP)",
    "Atlas Copco (e.g., XRX 1100, XRV 1200)",
    "BAC (Borewell Air Compressor) Pumps (specializing in depths up to 1500 feet)",
    "Chicago Pneumatic",
    "Ingersoll Rand",
    "Kaeser Air Compressors",
    "Wren Borewell Air Compressor (e.g., VT4)",
    "Universal Borewell Compressor (1 HP - 40 HP)",
    "Suguna Motors & Pumps (1HP to 5HP)",
    "Sree Renuga Air Compressor (RAC RT series)",
    "Texmo Borewell Compressor Pumps",
    "Akassh Industry Mono Compressor",
    "Neelgiris Compressors Company",
    "Mahendra Pumps Private Limited",
    "Aditya Technologies (ACL Belt Borewell Compressor)"
  ];

  const drillingRigs = [
    "Water Well Rotary Head Drilling Rigs",
    "Tractor Mounted Air Compressor (Diesel Driven)",
    "Monoblock Borewell Compressors",
    "Portable Borewell Machine (250 Feet Depth)",
    "Tower Hydraulic Borewell Machine (e.g., Indra26Et)",
    "Mini Boring Machine (with Eicher Engine)",
    "Submersible Borewell Pump"
  ];

  const specs = [
    { label: "Technology", value: "Piston/Reciprocating, Screw Air Compressor, Centrifugal" },
    { label: "Power Source", value: "Electric (Single Phase/Three Phase) or Diesel Engines" },
    { label: "Capacity", value: "1.5 HP to 10 HP (for small/medium); higher for large drilling projects" },
    { label: "Pressure", value: "7 to 40 bar (depending on depth)" }
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
            Air Compressor Machine <br />
            <span className="text-accent underline-offset-8 decoration-accent">Name List</span>
          </motion.h1>
          
          <p className="text-text-muted text-lg mb-12 leading-loose">
            Borewell and Industrial compressors used to lift water from borewells using compressed air. 
            We provide sales, service, and spare parts for all major brands listed below.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-primary">Top Compressor Brands</h2>
              <ul className="space-y-4">
                {machines.map((m, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-text-muted border-l-2 border-accent pl-4 py-1"
                  >
                    {m}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-primary">Drilling & Water Lifting</h2>
                <ul className="space-y-4 mt-8">
                  {drillingRigs.map((r, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-text-muted border-l-2 border-grey-200 pl-4 py-1"
                    >
                      {r}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark p-8 md:p-12 text-white">
                <h3 className="text-xl font-extrabold mb-8 uppercase tracking-widest text-accent">Common Specifications</h3>
                <div className="space-y-6">
                  {specs.map((s, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-grey-400 mb-1">{s.label}</p>
                      <p className="text-sm font-extrabold uppercase tracking-tight">{s.value}</p>
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

export default CompressorList
