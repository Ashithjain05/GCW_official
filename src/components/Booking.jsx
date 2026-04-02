import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

const Booking = () => {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data) => {
    alert("Service Request Submitted! We will contact you shortly.");
    reset();
  };

  return (
    <section id="booking" className="bg-bg-soft py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-16 bg-white shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm font-extrabold uppercase tracking-[6px] text-accent">Service Inquiry</span>
              <div className="w-12 h-[1px] bg-grey-300"></div>
            </div>
            
            <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-tighter">BOOK AN <br /> <span className="text-accent underline-offset-8 decoration-accent">EXPERT CALL</span></h2>
            <p className="text-text-muted text-sm uppercase tracking-widest font-bold mb-12 border-l-4 border-grey-100 pl-6">
              Our factory-trained technicians provide comprehensive onsite diagnostics and repair within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="form-group">
                  <label>Your Name</label>
                  <input {...register("name", { required: true })} className="form-control" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input {...register("phone", { required: true })} className="form-control" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="form-group">
                <label>Service Type</label>
                <select {...register("service")} className="form-control">
                  <option value="air-sales">Air Compressor Sales</option>
                  <option value="air-service">Air Compressor Repair</option>
                  <option value="hydraulic">Hydraulic Maintenance</option>
                  <option value="other">Custom Engineering Works</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea {...register("message")} className="form-control h-32" placeholder="Tell us about the issue..."></textarea>
              </div>

              <button type="submit" className="btn btn-accent w-full py-5 text-sm tracking-[4px] font-extrabold group">
                SUBMIT REQUEST <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </form>
          </motion.div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-full h-full border-4 border-grey-200 -z-10 translate-x-12 -translate-y-12"></div>
            <div className="space-y-12 relative z-10">
              <div className="floating-slow">
                <span className="badge">Direct Response</span>
                <h3 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">WHY BOOK WITH GEW?</h3>
                <ul className="space-y-6 mt-8">
                  {[
                    { title: "24/7 Support", text: "Emergency industrial assistance anywhere in Tumkur." },
                    { title: "Expert Technicians", text: "Certified specialists in Bosch and Hydraulic systems." },
                    { title: "Fast Lead Times", text: "On-site within 24 hours for all critical breakdowns." },
                    { title: "Genuine Spares", text: "Only certified industrial parts for maximum longevity." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 bg-white flex items-center justify-center text-accent font-extrabold text-xl shadow-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">0{i+1}</div>
                      <div>
                        <h4 className="text-lg font-extrabold tracking-tight uppercase group-hover:text-accent transition-colors">{item.title}</h4>
                        <p className="text-text-muted text-sm font-semibold uppercase opacity-60">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
