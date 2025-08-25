import type { JSX } from "react"
import { motion } from "motion/react"
import { useLocation } from "react-router"
import SectionHead from "../component/SectionHead"
import Stack from "../component/Stack"
import { FaTrophy, FaUsers, FaClock, FaBullseye, FaEye } from "react-icons/fa"

export default function AboutUs(): JSX.Element {
  const location = useLocation()
  const path = location.pathname
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
    // {
    //   icon: <FaMapMarkerAlt className="text-red-500 text-4xl" />,
    //   title: "Lagos",
    //   desc: "Offices in major cities",
    // },
    {
      icon: <FaClock className="text-red-500 text-4xl" />,
      title: "24/7 Support",
      desc: "Always here to help you",
    },
  ]

  const missionVison = [
    {
        title: "Our Mission",
        description: `Our mission is to empower businesses and individuals by
        creating modern, responsive, and high-performing websites that not only
        showcase their brand but also drive real results. We are committed to 
        delivering solutions that are creative, reliable, and tailored to each client’s unique needs.`,
        icon: <FaBullseye className="text-4xl text-red-500" />
    },
    {
        title:"Our Vision",
        description: `Our vision is to become a leading web agency recognized for transforming ideas into ,
        powerful digital experiences. We aim to build a future where every business, no matter the size, can
        thrive online through innovative technology and creative design.`,
        icon: <FaEye className="text-4xl text-red-500" />
    }
  ]

  return (
    <section className="flex flex-col justify-center items-center mt-20 px-6 lg:px-20">
      {/* Section Heading */}
      <SectionHead text="About Us" />

      {/* Intro Text */}
      <div className="mt-8 max-w-4xl text-center lg:text-left">
        <motion.p 
          className="text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: .5}}
          transition={{duration: .8, ease: "easeInOut"}}

        >
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
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#020617] rounded-2xl p-6 text-center shadow-md border border-white/10 
                       hover:shadow-xl hover:scale-105 transition-transform duration-300"
            aria-label={feature.title}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: .6}}
            transition={{ duration: .5, delay: .2 * idx , ease: "easeInOut" }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* mission and vision */}
      {path === "/about" && (
        <div className="mt-20 flex flex-col items-center justify-center">
            <SectionHead text="Mission & Vision" />
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8">
                {missionVison.map(({icon,title,description},index) => (
                <div
                    key={index}
                    className="bg-[#020617] rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-white/10 
                       hover:shadow-xl"
                    aria-label={title}
                >
                    <div className="mb-4 flex gap-2 items-center justify-center">{icon}  <span className="text-2xl font-medium">{title}</span></div>
                    <p className="leading-8 font-light">{description}</p>
                </div>
                ))}
            </div>
            <Stack />
        </div>
      )}
    </section>
  )
}
