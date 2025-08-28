import type { JSX } from "react"
import { motion } from "motion/react"
import SectionHead from "../component/SectionHead"
import { FaCheck } from "react-icons/fa"

export default function Pricing(): JSX.Element {
  const plans = [
    {
      title: "Corporate Business Website",
      price: "₦300,000",
      features: [
        "Domain & Hosting (1year)",
        "Business Emails",
        "Up to 5 Pages",
        "Logo Design",
        "SEO Optimization"
      ]
    },
    {
      title: "Advanced Plan",
      price: "₦450,000",
      features: [
        "Domain & Hosting (1 Year)",
        "Business Emails",
        "Logo Design",
        "SEO Optimization",
        "On Page SEO",
        "Unlimited Pages",
        "Payment Gateway",
        "1 Month Support",
        "Analytics Integration"
      ]
    },
    {
      title: "Premium Plan",
      price: "₦XXX,XXX",
      features: [
        "Domain & Hosting (1 Year)",
        "User Account & Admin Dashboard",
        "Logo Design",
        "SEO Optimization",
        "Payment Gateway",
        "Continuous Support",
        "Analytics Integration",
        "Social Media Integration",
        "SEO Optimization",
      ]
    }
  ]

  return (
    <section className="mt-20 flex flex-col items-center px-4">
      <SectionHead text="Our Plans & Pricing" />
      <motion.p 
        className="mt-8 text-center max-w-2xl mx-auto text-white"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: .8, delay: .5 }}
      >
        Wondering how much it costs to build a website with us? Explore our
        flexible web development pricing packages designed to fit your business needs.
      </motion.p>

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative bg-[#020617] hover:bg-[#020617]/20 
            hover:backdrop-blur-lg hover:scale-105 transition-transform duration-300
             px-4 py-2 rounded-2xl pt-32 pb-6 w-full border border-white/10"
             initial={{opacity: 0, y: 50}}
             whileInView={{opacity: 1, y: 0}}
             transition={{duration: .8, delay: .2 * index, ease: "easeOut"}}
             viewport={{ once: true}}
          >
            <div
              className="bg-red-500 px-4 py-6 w-full absolute top-0 right-0 rounded-t-2xl text-center"
            >
              <h2 className="text-lg md:text-xl lg:text-2xl font-light text-white">
                {plan.title}
              </h2>
              <p className="text-3xl md:text-4xl font-bold mt-4 text-white">
                {plan.price}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-sm md:text-base text-white">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-red-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
                className="w-full mt-6 bg-red-500 hover:bg-red-600 py-2 
                rounded-2xl transition-colors cursor-pointer text-white font-medium inline-block text-center"
                aria-label="Link to whatsapp"
                href="https://wa.me/2348167893167?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
            >
              Order Now
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
