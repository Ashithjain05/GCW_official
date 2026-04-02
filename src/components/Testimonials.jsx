import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sunil Kumar",
    company: "Tumkur Industrial Hub",
    quote: "GEW has been our go-to for air compressor maintenance for over 5 years. Their 24/7 support is truly life-saving for our production line.",
    rating: 5
  },
  {
    name: "Ramesh Hegde",
    company: "Karnataka Steels",
    quote: "Expert technicians and genuine spare parts. Best hydraulic service provider in the region. Highly recommended for industrial needs.",
    rating: 5
  },
  {
    name: "Anil Murthy",
    company: "Manufacturing Solutions",
    quote: "Professional, reliable, and extremely knowledgeable about Bosch equipment. Their preventive maintenance saved us thousands in repairs.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-bg-soft py-32 overflow-hidden">
      <div className="container">
        <div className="text-center mb-24">
          <span className="badge">Client Reviews</span>
          <h2 className="text-5xl font-extrabold mb-4 uppercase tracking-tighter">WHAT OUR <span className="text-accent underline-offset-8 decoration-accent">PARTNERS</span> SAY</h2>
          <p className="text-text-muted text-sm uppercase tracking-widest font-bold max-w-xl mx-auto">
            Trusted by industrial giants across Karnataka for our commitment to precision and speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-12 shadow-xl border border-grey-200 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-grey-100 -mr-12 -mt-12 rounded-full group-hover:bg-accent/10 transition-colors duration-500"></div>
              <div className="text-accent text-5xl mb-8 font-serif opacity-20">"</div>
              <p className="text-text-muted text-lg leading-loose italic mb-10 relative z-10 font-medium">
                {t.quote}
              </p>
              <div className="border-t border-grey-100 pt-8 mt-auto">
                <h4 className="text-sm font-extrabold tracking-widest uppercase mb-1">{t.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{t.company}</p>
              </div>
              <div className="flex gap-1 mt-6 text-accent">
                {[...Array(t.rating)].map((_, i) => <span key={i} className="text-xs">★</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
