import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { useForm, ValidationError } from '@formspree/react'
import { useLocation } from "react-router-dom"
import SectionHead from "../component/SectionHead"
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaEnvelopeOpen } from "react-icons/fa"

export default function ContactUs(){
  const [state, handleSubmit] = useForm("mgvlpaqp")
  const [showMessage, setShowMessage] = useState(false)
  const location = useLocation()

  // controlled inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  useEffect(() => {
    if (state.succeeded) {
      setShowMessage(true)
      setFormData({ name: "", email: "", message: "" }) // clear inputs
    }
  }, [state.succeeded])

  useEffect(() => {
    if (showMessage) {
      const timerId = setTimeout(() => setShowMessage(false), 3000)
      return () => clearTimeout(timerId)
    }
  }, [showMessage])

  const contactInfo = [
    {
      icons: <FaWhatsapp size={30} className="text-red-500" />,
      text: "Whatsapp",
      p: "Quick Response via whatsapp",
      to: "https://wa.me/2348167893167?text=Hello%20I%20am%20interested%20in%20your%20services",
      aText: "CHAT NOW"
    },
    {
      icons: <FaEnvelopeOpen size={30} className="text-red-500" />,
      text: "Email Support",
      p: "Get detailed responses via email",
      to: "mailto:contact@mowebdev.com.ng",
      aText: "SEND MAIL"
    }
  ]

  return (
    <section className="flex flex-col items-center" key={location.pathname}>
      <SectionHead text="Get in Touch" />
      <motion.p 
        className="my-6 text-center max-w-xl leading-relaxed text-gray-300"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .8, delay: .5}}
      >
        Contact <span className="font-semibold text-red-500">M.O WebDev</span> - best Web Developer in Nigeria via email, call or book a consultation. We typically reply within 24hrs.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 mt-4 w-full max-w-6xl">
        
        {/* FORM */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="rounded-2xl bg-white shadow-lg text-blue-950 py-8 px-6 space-y-6 md:row-span-2"
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: 0.5}}
          transition={{type:"tween",duration: 0.8, ease: "easeOut"}}
        >
          {/* Success Message */}
          {showMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 w-fit p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg shadow-lg z-50"
            >
              ✅ Thank you! Your message has been sent successfully we will get back to you soon.
            </motion.div>
          )}

          {/* Name */}
          <div>
            <label className="block font-semibold text-lg mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              placeholder="Enter your full name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-lg mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              placeholder="example@email.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold text-lg mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              placeholder="Write your message..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-200"
          >
            Send Message
          </button>
        </motion.form>
        
        {/* CONTACT INFO */}
        <motion.div 
          className="bg-[#020617] flex flex-col items-center justify-center rounded-2xl
          border border-white/10 p-6"
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-gray-300">
              <FaEnvelope className="text-red-500" /> contact@mowebdev.com.ng
            </li>
            <li className="flex items-center gap-4 text-gray-300">
              <FaPhoneAlt className="text-red-500" /> 08167893167
            </li>
          </ul>
        </motion.div>

        {/* QUICK CONTACT CARDS */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:col-span-1"
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.8, ease: "easeOut", delay: 0.4}}
        >
          {contactInfo.map(({ icons, text, p, to, aText }, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col gap-2 items-center justify-center bg-[#020617] rounded-2xl border-white/10 border p-6 flex-1"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {icons}
              <h3 className="text-lg font-medium text-white">{text}</h3>
              <span className="text-sm text-gray-300 text-center">{p}</span>
              <a 
                href={to} 
                aria-label={`Link to ${text}`} 
                className="bg-red-500 hover:bg-red-600 transition-all py-2 px-4 rounded-sm mt-2 text-white text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {aText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}