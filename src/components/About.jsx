import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative z-20 bg-white py-32 md:py-52 scroll-mt-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image relative"
          >
            {/* Minimalist Industrial Aesthetic Image Placeholder with accents */}
            <div className="w-full max-w-[500px] aspect-[4/5] bg-grey-100 border-2 border-grey-200 relative mx-auto">
              <div className="absolute top-10 right-10 w-full h-full border-4 border-accent -z-10"></div>
              <div className="w-full h-full flex items-center justify-center bg-grey-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                  alt="Industrial Engineering"
                  className="w-full h-full object-cover object-top -translate-y-6 grayscale brightness-90 hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </div>
              <div className="absolute bottom-[-40px] -left-10 flex items-center gap-8 overflow-visible z-20 w-[600px]">
                <div className="bg-accent text-white p-10 floating-delayed w-64 shadow-2xl shrink-0">
                  <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mb-2">Heritage</h3>
                  <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">About 45+ <br />Years</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-80 leading-relaxed border-t border-white/20 pt-3 mt-2">Local Expertise in Tumkur</p>
                </div>

                <div className="flex flex-col mb-[-10px] whitespace-nowrap bg-white/10 backdrop-blur-sm p-4 border-l-2 border-accent">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-accent mb-1">Directorship</span>
                  <p className="text-lg font-black uppercase tracking-tighter text-primary">S Sreenivasan</p>
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-text-muted mt-1 opacity-70">Proprietor</p>
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-text-muted mt-1 opacity-70">General Engineering Works</p>

                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Established Expertise</span>
            <h2 className="text-5xl font-extrabold mb-8 uppercase tracking-tighter">
              Pioneering <span className="text-accent">Industrial Excellence</span> In Tumkur
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-loose">
              <p>
                General Engineering Works (GEW), located in the heart of Tumkur, Karnataka, has been a
                trusted partner for industrial services since 1971. We specialize in providing comprehensive
                engineering solutions tailored to the needs of modern industrial facilities.
              </p>
              <p>
                Our core expertise lies in high-performance Air Compressors and Hydraulic systems.
                Whether it's sales of new industrial units or precision repair and maintenance,
                our fleet of expert technicians ensures that your operations run smoothly without downtime.
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-4">
                <li className="flex items-center gap-3 font-bold text-sm text-text-main">
                  <div className="w-4 h-4 bg-accent"></div> 24/7 INDUSTRIAL SUPPORT
                </li>
                <li className="flex items-center gap-3 font-bold text-sm text-text-main">
                  <div className="w-4 h-4 bg-accent"></div> EXPERT TECHNICIANS
                </li>
                <li className="flex items-center gap-3 font-bold text-sm text-text-main">
                  <div className="w-4 h-4 bg-accent"></div> GENUINE SPARE PARTS
                </li>
                <li className="flex items-center gap-3 font-bold text-sm text-text-main">
                  <div className="w-4 h-4 bg-accent"></div> PREVENTIVE CARE
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
