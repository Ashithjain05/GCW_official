import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Get In Touch</span>
            <h2 className="text-5xl font-extrabold mb-12 uppercase tracking-tighter">OUR <br /><span className="text-accent underline-offset-8 decoration-accent">LOCATION</span></h2>

            <div className="space-y-12 mb-16">
              {[
                { icon: <FaPhoneAlt />, label: "Phone", value: "+91 98765 43210", sub: "Available 24/7 for Emergencies", link: "tel:+919876543210" },
                { icon: <FaEnvelope />, label: "Email", value: "info@generalengineeringworks.com", sub: "General & Service Inquiries", link: "mailto:info@generalengineeringworks.com" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Near KSRTC Bus Stand,GMS Complex, Tumkur", sub: "Click to get directions", link: "https://share.google/Da2TooNi94DdgSb3q" }
              ].map((item, i) => (
                <a key={i} href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex gap-8 group cursor-pointer block">
                  <div className="w-16 h-16 bg-grey-100 flex items-center justify-center text-2xl text-accent border border-grey-200 group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2">{item.label}</h4>
                    <p className="text-xl font-extrabold tracking-tight uppercase group-hover:text-accent transition-colors mb-1">{item.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent opacity-60">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-dark p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 -mr-12 -mt-12 rounded-full"></div>
              <h3 className="text-2xl font-extrabold mb-2 uppercase tracking-tight text">VISIT US TODAY</h3>
              <p className="text-grey-400 text-xs font-bold uppercase tracking-widest leading-loose">
                Step into our world-class service facility at Tumkur. We're open Monday to Saturday, 9:00 AM – 7:00 PM.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[600px] bg-grey-100 border-[16px] border-white shadow-2xl relative"
          >
            {/* Google Maps Embed Placeholder - Using a real embed focused on Tumkur Industrial area */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15525.044390558455!2d77.08630325!3d13.3340566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c3b632d23b1%3A0xe2128c57635552c6!2sTumakuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711894000000!5m2!1sen!2sin"
              width="60%"
              height="90%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GEW Tumkur Location"
            ></iframe>

            <a
              href="https://share.google/Da2TooNi94DdgSb3q"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-[680px] md:right-auto bg-white p-6 md:p-10 shadow-2xl border-l-[8px] md:border-l-[12px] border-accent floating shadow-black/20 transition-transform hover:scale-105 active:scale-95 block z-20 min-w-[200px] md:min-w-[280px]"
            >
              <p className="text-[9px] md:text-[11px] font-extrabold uppercase tracking-widest text-accent mb-2">OFFICIAL LOCATION</p>
              <h4 className="text-md md:text-xl font-extrabold tracking-tight uppercase mb-4 md:mb-6 leading-tight">Near  KSRTC Bus Stand<br /> Tumkur</h4>
              <span className="btn btn-accent py-3 px-6 md:py-4 md:px-8 text-[9px] md:text-[11px] font-extrabold block text-center shadow-xl">GET DIRECTIONS</span>
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-dark { background-color: #121212; }
      `}</style>
    </section>
  )
}

export default Contact
