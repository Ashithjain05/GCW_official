import React from 'react'
import { motion } from 'framer-motion'
import compressorImg from '../assets/compressor.png';

const products = [
  {
    category: "Air Compressors",
    title: "Bosch Industrial X1",
    specs: "Screw Type, 15HP, 12Bar",
    image: compressorImg,
    isFeatured: true
  },
  {
    category: "Hydraulic Systems",
    title: "Industrial Hydraulic Unit",
    specs: "High Pressure, 25HP, Variable Flow",
    image: "https://images.unsplash.com/photo-1542362567-b051c63b9a27?q=80&w=2070&auto=format&fit=crop",
    isFeatured: false
  },
  {
    category: "Air Accessories",
    title: "Air Dryer System",
    specs: "Refrigerated, Low Power",
    image: null, // As requested, blank for accessories
    isFeatured: false
  },
  {
    category: "Industrial Pumps",
    title: "Heavy Duty Compressor Pump",
    specs: "Dual Stage, Oil Lubed",
    image: null, // As requested, blank for accessories
    isFeatured: false
  }
]

const Products = ({ searchQuery = '' }) => {
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.specs.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="products" className="relative z-10 py-24 md:py-40 bg-white flex flex-col">
      <div className="container z-10 relative flex-1">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="badge">Our Catalog</span>
            <h2 className="text-5xl font-extrabold mb-4 uppercase tracking-tighter">EQUIPMENT <br /> <span className="text-accent underline-offset-8 decoration-accent">SHOWCASE</span></h2>
            <p className="text-text-muted text-lg max-w-lg">
              Precision engineered equipment built for extreme durability and heavy-duty industrial environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-grey-100 p-4 md:p-8 border border-grey-200 group hover:bg-white hover:shadow-2xl transition-all duration-500 relative flex flex-col"
              >
                <div className="mb-4 md:mb-8 aspect-square flex items-center justify-center overflow-hidden bg-white/50 border border-grey-100 p-4 md:p-8 grayscale hover:grayscale-0 transition-all duration-500">
                  {product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-grey-200 flex flex-col items-center justify-center text-text-muted opacity-50 relative">
                      <div className="w-8 h-[2px] md:w-16 md:h-1 bg-grey-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                      <div className="w-8 h-[2px] md:w-16 md:h-1 bg-grey-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-4 md:mt-8">No Image</span>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-accent w-1 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-accent uppercase mb-1 md:mb-2 block">{product.category}</span>
                <h3 className="text-sm md:text-lg font-extrabold mb-1 md:mb-2 uppercase tracking-tight line-clamp-1">{product.title}</h3>
                <p className="text-text-muted text-[10px] md:text-xs font-bold font-mono tracking-tighter mb-4 md:mb-8 border-l-2 border-grey-300 pl-3">
                  {product.specs}
                </p>
                
                <a href="#booking" className="mt-auto btn btn-outline w-full py-3 md:py-4 text-[8px] md:text-[10px] tracking-widest font-extrabold group-hover:bg-primary group-hover:text-white transition-all duration-300">DETAILS</a>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-text-muted text-xl font-bold uppercase tracking-widest">No products found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mt-60 p-12 bg-dark text-white flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 -mr-32 -mt-32 rounded-full floating-slow"></div>
          <div>
            <h3 className="text-3xl font-extrabold mb-2 uppercase tracking-tight">Need Custom Machinery Solutions?</h3>
            <p className="text-grey-400 max-w-lg text-sm uppercase tracking-widest font-semibold">Specialized hydraulic systems and engineering works tailored to your plant footprint.</p>
          </div>
          <a href="#contact" className="btn btn-accent px-12 py-5 font-extrabold tracking-widest text-xs relative z-10">Get Expert Quote</a>
        </div>
      </div>
      
      <style jsx>{`
        .bg-dark { background-color: #121212; }
      `}</style>
    </section>
  )
}

export default Products
