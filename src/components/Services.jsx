import React from 'react'
import { motion } from 'framer-motion'
import { FaBolt, FaWrench, FaTools, FaCogs } from 'react-icons/fa'

const services = [
  {
    icon: <FaBolt />,
    title: "Air Compressor Sales",
    description: "Wide range of high-efficiency industrial air compressors from leading brands like Bosch and Atlas.",
    link: "#booking"
  },
  {
    icon: <FaWrench />,
    title: "Air Repair & Service",
    description: "Expert repair and scheduled maintenance for all types of screw and piston air compressors.",
    link: "#booking"
  },
  {
    icon: <FaTools />,
    title: "Hydraulic Systems",
    description: "Specialized services and repairs for industrial hydraulic compressors and specialized machinery.",
    link: "#booking"
  },
  {
    icon: <FaCogs />,
    title: "Industrial Machinery",
    description: "Comprehensive maintenance and repair services for heavy-duty industrial machinery.",
    link: "#booking"
  }
]

const Services = ({ searchQuery = '' }) => {
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="services" className="relative z-10 bg-bg-soft py-24 md:py-40 mt-12 md:mt-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="badge">Specialization</span>
            <h2 className="text-5xl font-extrabold mb-4 uppercase tracking-tighter">OUR INDUSTRIAL <br /> <span className="text-accent">SERVICES</span></h2>
            <p className="text-text-muted text-lg max-w-lg">
              Precision engineering and reliable maintenance services that keep your business moving forward.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#booking" className="btn btn-outline px-12 py-5 font-extrabold tracking-widest text-xs">View Full Catalog</a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 md:p-12 shadow-xl border-b-4 border-transparent hover:border-accent transition-all duration-500 group relative overflow-hidden flex flex-col"
                style={{ minHeight: '100%' }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-grey-100 -mr-8 -mt-8 md:-mr-12 md:-mt-12 rounded-full group-hover:bg-accent/10 transition-colors duration-500"></div>
                <div className="text-3xl md:text-4xl text-accent mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-xl font-extrabold mb-3 md:mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="hidden md:block text-text-muted text-sm leading-loose mb-8">
                  {service.description}
                </p>
                <p className="md:hidden text-text-muted text-[10px] leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <a 
                  href={service.link} 
                  className="mt-auto text-[8px] md:text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1 md:gap-2 hover:translate-x-2 transition-transform"
                >
                  ENQUIRE <span className="text-sm md:text-lg">→</span>
                </a>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-text-muted text-xl font-bold uppercase tracking-widest">No services found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        #services { background-color: #f0f2f5; }
      `}</style>
    </section>
  )
}

export default Services
