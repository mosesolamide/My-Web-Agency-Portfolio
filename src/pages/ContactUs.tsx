import { useEffect, useState, type JSX } from "react"
import { useForm, ValidationError } from '@formspree/react'
import SectionHead from "../component/SectionHead"
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaEnvelopeOpen } from "react-icons/fa"

export default function ContactUs(): JSX.Element {
  const [state, handleSubmit] = useForm("xrbazdkj")
  const [showMessage, setShowMessage] = useState(false)

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
      to: "mailto:olamidemoses132@gmail.com",
      aText: "SEND MAIL"
    }
  ]

  return (
    <section className="flex flex-col items-center">
      <SectionHead text="Get in Touch" />
      <p className="my-6 text-center max-w-xl leading-relaxed">
        Contact <span className="font-semibold text-red-500">M.O WebDev</span> - best Web Developer in Nigeria via email, call or book a consultation. We typically reply within 24hrs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 mt-4">
        
        {/* FORM */}
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white shadow-lg text-blue-950 py-8 px-6 space-y-6 md:row-span-2">
          {/* Success Message */}
          {showMessage && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 w-fit p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg shadow-lg z-50">
              ✅ Thank you! Your message has been sent successfully we will get back to you soon.
            </div>
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
        </form>
        
        {/* CONTACT INFO */}
        <div className="bg-[#020617] flex flex-col items-center justify-center rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300 py-4">
          <h2 className="text-3xl mb-4">Contact Information</h2>
          <ul>
            <li className="flex items-center gap-4 mb-2">
              <FaEnvelope className="text-red-500" /> olamidemoses132@gmail.com
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-red-500" /> 08167893167
            </li>
          </ul>
        </div>

        {/* QUICK CONTACT CARDS */}
        <div className="flex gap-4">
          {contactInfo.map(({ icons, text, p, to, aText }, index) => (
            <div key={index} className="flex flex-col gap-2 items-center justify-center hover:scale-105 transition-transform duration-300 bg-[#020617] rounded-2xl border-white/10 border px-4 md:px-6 py-4 md:py-0">
              {icons}
              <h3 className="text-lg">{text}</h3>
              <span className="text-xs lg:text-sm">{p}</span>
              <a 
                href={to} 
                aria-label={`Link to ${text}`} 
                className="bg-red-500 hover:bg-red-600 transition-all py-2 px-2 lg:px-4 rounded-sm mt-2"
                target="_blank"
              >
                {aText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
