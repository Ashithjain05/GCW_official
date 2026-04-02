import React from 'react';
import { motion } from 'framer-motion';
import shopimage from '../assets/shopimage.png';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark text-white p-0">
      {/* Background Image Layer - Centered for a more 'zoomed out' backwards feel */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ 
          backgroundImage: `url(${shopimage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center 30%', 
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      <div className="relative flex w-full h-full z-10">
        {/* Left Side: Narrower Content Area with 1.5 inches (~150px) of space from the edge */}
        <div 
          className="flex items-center justify-start pl-12 md:pl-24 lg:pl-40 p-12 z-10 border-r border-white/5 w-full md:w-[35%] bg-dark/75 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(12, 14, 18, 0.7)' }}
        >
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-accent"></div>
                <span className="text-[11px] font-bold uppercase tracking-[4px] text-accent">Established 1971</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tighter text-white">
                RELIABLE <br />
                <span className="text-accent underline-offset-8 decoration-accent">ENGINEERING</span> <br />
                SOLUTIONS.
              </h1>
              
              <p className="max-w-xs text-grey-200 mb-10 text-lg leading-relaxed font-medium opacity-90">
                Empowering industrial excellence with top-tier air & hydraulic compressor services in Tumkur and beyond.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="btn btn-accent px-10 py-5 text-[11px] tracking-widest font-extrabold shadow-2xl">Book Service</a>
                <a href="#services" className="btn btn-outline text-white border-white/20 hover:border-accent hover:text-accent px-10 py-5 text-[11px] tracking-widest font-extrabold">Our Services</a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Completely transparent to show the full shop depth */}
        <div className="hidden md:block flex-1"></div>
      </div>

      <div className="absolute bottom-10 left-[17.5%] -translate-x-1/2 hidden md:block">
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent"></div>
      </div>

      <style jsx>{`
        section { height: 100vh; }
        .text-white { color: #ffffff !important; }
        .text-grey-200 { color: #e9ecef !important; }
      `}</style>
    </section>
  );
};

export default Hero;
