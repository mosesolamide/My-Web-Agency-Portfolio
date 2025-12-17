import { motion } from "motion/react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router" // ✅ use react-router-dom
import AboutUs from './AboutUs'
import Stack from '../component/Stack'
import Project from './Project'
import { MdOutlineMail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io5"

export default function Home() {
  const badges = [
    { text: "🚀 Load FAST" },
    { text: "📈 Rank HIGH on Google" },
    { text: "✨ User Friendly" },
    { text: "🌍 Reach Clients Globally" },
  ]

  return (
    <div>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Best Web Developer in Nigeria | M.O WebDev</title>
        <meta 
          name="description" 
          content="Looking for the best web developer in Nigeria? M.O WebDev builds fast, SEO-optimized, and responsive websites that rank high on Google and convert visitors into customers." 
        />
        <meta 
          name="keywords" 
          content="web developer in Nigeria, best web developer in Nigeria, website design in Nigeria, hire web developer in Nigeria, affordable website developer, SEO web developer, professional website developer"
        />
        <link rel="canonical" href="https://mowebdev.com.ng/" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Best Web Developer in Nigeria | M.O WebDev" />
        <meta 
          property="og:description" 
          content="Hire M.O WebDev — Nigeria’s top web developer specializing in responsive design, SEO optimization, and modern web solutions." 
        />
        <meta property="og:url" content="https://mowebdev.com.ng/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mowebdev.com.ng/og-image.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M.O WebDev — Best Web Developer in Nigeria" />
        <meta 
          name="twitter:description" 
          content="Fast, SEO-friendly websites for businesses in Nigeria. Hire M.O WebDev today!" 
        />
        <meta name="twitter:image" content="https://mowebdev.com.ng/og-image.webp" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto text-center flex flex-col items-center h-1/2 px-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
      >
        {/* Primary SEO Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight md:w-3/4 ">
          Best Web Developer in Nigeria | <span className="text-[#2563EB]">M.O WebDev</span>
        </h1>

        <p className="text-lg my-4 md:w-2/3">
          Looking for a reliable website developer in Nigeria? <strong>M.O WebDev</strong> provides professional, fast, and modern web solutions tailored for businesses and individuals — built to rank higher and convert visitors into customers.
        </p>

        {/* SEO Secondary Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Professional Website Developer in Nigeria You Can Trust
        </h2>

        {/* Badges */}
        <div className="my-6 flex flex-col md:flex-row justify-center gap-4 w-full">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="border border-white/20 rounded-full 
              text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
              font-medium text-xs sm:text-sm md:text-lg"
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 mt-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white 
            font-bold px-4 md:px-6 py-2 md:py-4 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm md:font-bold"
            aria-label="Send us an email"
            href="mailto:contact@mowebdev.com.ng"
          >
            <MdOutlineMail size={20} />
            Email Us
          </a>

          <a
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white 
            px-2 md:px-4 py-2 md:py-4 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm md:font-bold"
            aria-label="Chat with us on WhatsApp"
            href="https://wa.me/2348167893167?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp size={20} />
            WhatsApp
          </a>
        </motion.div>
      </motion.section>

      {/* About Us Section */}
      <div className='flex flex-col justify-center items-center gap-4 mt-12'>
        <AboutUs />
        <motion.div
          className='mt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8, delay: .9 }}
          viewport={{ once: true, amount: 1 }}
        >
          <Link
            to="about"
            className="font-medium cursor-pointer
            px-8 md:px-4 py-2 md:py-2 border-[1px] text-white bg-[#020617] border-white/20 rounded-full"
            aria-label='View more about us'
          >
            View more about us →
          </Link>
        </motion.div>
      </div>

      {/* Why Choose Us - Extra Content for SEO */}
      <section className="max-w-5xl mx-auto text-center my-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose M.O WebDev?</h2>
        <p className="text-base md:text-lg leading-relaxed">
          At <strong>M.O WebDev</strong>, we specialize in building websites that are <em>fast, mobile-friendly, and SEO-optimized</em>. 
          Whether you are a startup, business, or entrepreneur in Nigeria, we help you create a strong online presence that drives traffic and generates sales. 
          Our expertise includes <strong>React development, responsive design, SEO optimization, and digital strategy</strong> — ensuring your business grows globally.
        </p>
      </section>

      {/* Tech Stack Section */}
      <Stack />

      {/* Projects Section */}
      <Project />
    </div>
  )
}
