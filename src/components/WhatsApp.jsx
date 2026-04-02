import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsApp = () => {
  const openChat = () => {
    const phoneNumber = "919000000000"; // Placeholder
    const message = encodeURIComponent("Hello, I want to enquire about your engineering services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openChat}
      className="fixed bottom-10 right-10 z-[100] cursor-pointer"
    >
      <div className="relative group">
        <div className="absolute -inset-2 bg-[#25D366] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200 floating-fast"></div>
        <div className="relative bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white/20">
          <FaWhatsapp />
        </div>
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none w-max border-r-4 border-accent">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-text-main">Chat with Specialist</p>
        </div>
      </div>
    </motion.div>
  )
}

export default WhatsApp
