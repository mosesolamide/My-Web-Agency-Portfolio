import { motion } from "motion/react"
import { useLocation } from "react-router"
import { Helmet } from "react-helmet-async"
import SectionHead from "../component/SectionHead"
import Stack from "../component/Stack"
import { FaTrophy, FaUsers, FaClock, FaBullseye, FaEye } from "react-icons/fa"

export default function AboutUs() {
  const location = useLocation()
  const path = location.pathname
  
  const features = [
    { icon: <FaTrophy className="text-red-500 text-4xl" />, title: "Award Winning", desc: "Best Web Developer in Nigeria" },
    { icon: <FaUsers className="text-red-500 text-4xl" />, title: "200+ Clients", desc: "Satisfied customers nationwide" },
    { icon: <FaClock className="text-red-500 text-4xl" />, title: "24/7 Support", desc: "Always here to help you" }
  ]

  const missionVison = [
    {
      title: "Our Mission",
      description: `Our mission is to empower businesses and individuals by creating modern, responsive, and high-performing websites that drive real results.`,
      icon: <FaBullseye className="text-4xl text-red-500" />
    },
    {
      title: "Our Vision",
      description: `Our vision is to become a leading web agency recognized for transforming ideas into powerful digital experiences.`,
      icon: <FaEye className="text-4xl text-red-500" />
    }
  ]

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>About M.O WebDev | Best Web Developer in Nigeria</title>
        <meta
          name="description"
          content="Learn more about M.O WebDev — the best web developer in Nigeria offering responsive, SEO-friendly websites that grow your business."
        />
        <meta
          name="keywords"
          content="About M.O WebDev, Web Developer in Nigeria, SEO-friendly websites, responsive websites, web design agency Nigeria, best web developer"
        />
        <meta property="og:title" content="About M.O WebDev | Best Web Developer in Nigeria" />
        <meta
          property="og:description"
          content="M.O WebDev helps businesses build modern, fast, and SEO-optimized websites in Nigeria."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mowebdev.com.ng/about" />
      </Helmet>

      {/* ✅ Page Content */}
      <motion.section 
        className="flex flex-col justify-center items-center mt-20 px-6 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHead text="About M.O WebDev" />

        {/* Intro */}
        <div className="mt-8 max-w-4xl text-center lg:text-left">
          <motion.p 
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: .5, ease: "easeOut" }}
          >
            At <span className="text-[#2563EB] font-semibold">M.O WebDev</span>, we help
            businesses and individuals bring their ideas to life with modern,
            user-friendly, and responsive websites.  
            <br /><br />
            Our focus is on building digital experiences that perform seamlessly across all devices. 
            We combine creativity, strategy, and technology to deliver websites that reflect your vision.
            <br /><br />
            Whether it's a personal portfolio, an e-commerce store, or a business website, 
            we're here to turn your ideas into reality — clean, fast, and effective.
          </motion.p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-[#020617] rounded-2xl p-6 text-center shadow-md border border-white/10 
                        hover:shadow-xl hover:scale-105 transition-all duration-300"
              aria-label={feature.desc}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.2 * idx, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
              <p className="text-sm text-gray-400 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        {path === "/about" && (
          <motion.div 
            className="mt-20 flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHead text="Mission & Vision" />
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8 w-full max-w-6xl">
              {missionVison.map(({ icon, title, description }, index) => (
                <motion.div
                  key={index}
                  className="bg-[#020617] rounded-2xl p-6 text-center border border-white/10 
                            hover:shadow-xl transition-all duration-300 flex-1"
                  aria-label={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 flex flex-col items-center justify-center">
                    {icon}
                    <span className="text-2xl font-medium mt-2">{title}</span>
                  </div>
                  <p className="leading-8 font-light text-gray-300">{description}</p>
                </motion.div>
              ))}
            </div>
            <Stack />
          </motion.div>
        )}
      </motion.section>
    </>
  )
}
