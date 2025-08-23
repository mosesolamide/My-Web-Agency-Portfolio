import type { JSX } from "react"
import SectionHead from "../component/SectionHead"
import { FaTrophy, FaUsers, FaMapMarkerAlt, FaClock } from "react-icons/fa"

export default function AboutUs(): JSX.Element {
  const features = [
    {
      icon: <FaTrophy className="text-red-500 text-4xl" />,
      title: "Award Winning",
      desc: "Best Web Developer in Nigeria",
    },
    {
      icon: <FaUsers className="text-red-500 text-4xl" />,
      title: "200+ Clients",
      desc: "Satisfied customers nationwide",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-4xl" />,
      title: "Lagos",
      desc: "Offices in major cities",
    },
    {
      icon: <FaClock className="text-red-500 text-4xl" />,
      title: "24/7 Support",
      desc: "Always here to help you",
    },
  ]

  return (
    <section className="flex flex-col justify-center items-center mt-20 px-6 lg:px-20">
      {/* Section Heading */}
      <SectionHead text="About Us" />

      {/* Intro Text */}
      <div className="mt-6 max-w-4xl text-center lg:text-left">
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          At <span className="text-white font-semibold">M.O WebDev</span>, we help
          businesses and individuals bring their ideas to life with modern,
          user-friendly, and responsive websites.  
          <br /><br />
          Our focus is on building digital experiences that don’t just look good
          but also perform seamlessly across all devices. We believe every brand
          deserves a strong online presence. That’s why we combine creativity,
          strategy, and the latest technologies to deliver websites that reflect
          your unique vision and connect with your audience.  
          <br /><br />
          Whether it’s a personal portfolio, an e-commerce store, or a full-scale
          business website, we’re here to turn your ideas into reality—clean,
          fast, and effective.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#020617] rounded-2xl p-6 text-center shadow-md border border-white/10 
                       hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
