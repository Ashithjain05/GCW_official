import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
             <div className="logo flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent flex items-center justify-center text-white font-bold text-lg">G</div>
              <div>
                <h2 className="text-sm font-extrabold tracking-tighter leading-none">GENERAL ENGINEERING WORKS</h2>
                <p className="text-[8px] font-bold tracking-[2px] text-accent mt-1 uppercase">Since 1971</p>
              </div>
            </div>
            <p className="text-grey-400 text-xs font-bold uppercase tracking-widest leading-loose mb-8">
              The premier industrial service provider in Tumkur, specializing in air and hydraulic systems for over 50 years.
            </p>
             <div className="flex gap-4">
              {['FB', 'TW', 'LI', 'IG'].map((item, i) => (
                <div key={i} className="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] font-extrabold hover:bg-accent hover:border-accent transition-all duration-300 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[4px] mb-8 border-l-4 border-accent pl-4">Services</h4>
            <ul className="space-y-4 text-grey-400 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#services" className="hover:text-accent transition-colors">Air Compressor Sales</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Air Repair & Maintenance</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Hydraulic Systems</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Industrial Machinery Repair</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[4px] mb-8 border-l-4 border-accent pl-4">Company</h4>
            <ul className="space-y-4 text-grey-400 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[4px] mb-8 border-l-4 border-accent pl-4">Contact Info</h4>
            <ul className="space-y-6 text-grey-400 text-[10px] font-bold uppercase tracking-widest">
              <li className="flex flex-col gap-1">
                <span className="text-accent text-[8px]">Location:</span>
                <a href="https://share.google/Da2TooNi94DdgSb3q" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Amanikere Industrial Hub, Tumkur</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-accent text-[8px]">Enquiry:</span>
                <a href="mailto:info@generalengineeringworks.com" className="hover:text-accent transition-colors">info@generalengineeringworks.com</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-accent text-[8px]">Emergency:</span>
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] font-extrabold uppercase tracking-[4px] text-grey-500">
          <p>© 2024 GENERAL ENGINEERING WORKS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent transition-colors underline-offset-8">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors underline-offset-8">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-dark { background-color: #0c0e12; }
      `}</style>
    </footer>
  )
}

export default Footer
