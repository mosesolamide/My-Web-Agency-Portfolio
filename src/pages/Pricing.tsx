import { Helmet } from "react-helmet-async"
import { motion } from "motion/react"
import SectionHead from "../component/SectionHead"
import { FaCheck } from "react-icons/fa"

export default function Pricing() {
  const plans = [
    {
      title: "Corporate Business Website",
      price: "₦300,000",
      features: [
        "Free Domain & Hosting (1 Year)",
        "Business Emails Setup",
        "Up to 5 Web Pages",
        "Custom Logo Design",
        "Basic SEO Optimization",
        "Mobile Responsive Design",
      ],
      cta: "Order Corporate Plan"
    },
    {
      title: "Advanced Plan",
      price: "₦450,000",
      features: [
        "Free Domain & Hosting (1 Year)",
        "Business Emails Setup",
        "Custom Logo Design",
        "Advanced SEO Optimization",
        "On-Page SEO",
        "Unlimited Pages",
        "Payment Gateway Integration",
        "1 Month Support",
        "Analytics Integration",
      ],
      cta: "Order Advanced Plan"
    },
    {
      title: "Premium Plan",
      price: "₦600,000+",
      features: [
        "Free Domain & Hosting (1 Year)",
        "User Accounts & Admin Dashboard",
        "Custom Logo Design",
        "Advanced SEO Optimization",
        "Payment Gateway Integration",
        "Continuous Support & Maintenance",
        "Analytics Integration",
        "Social Media Integration",
        "Custom Features",
      ],
      cta: "Order Premium Plan"
    }
  ]

  return (
    <section className="mt-20 flex flex-col items-center px-4">
      {/* 🧠 SEO for Pricing Page */}
      <Helmet>
        <title>Website Pricing in Nigeria | M.O WebDev</title>
        <meta
          name="description"
          content="Explore affordable web development pricing in Nigeria. Get business websites, eCommerce stores, and custom web apps built by M.O WebDev — trusted website developer in Nigeria."
        />
        <meta
          name="keywords"
          content="website pricing in Nigeria, web development cost, web developer Nigeria, business website price, M.O WebDev"
        />
        <link rel="canonical" href="https://mowebdev.com.ng/pricing" />
      </Helmet>

      {/* ✅ Page Title */}
      <SectionHead text="Our Web Development Plans & Pricing in Nigeria" />

      {/* Intro Paragraph */}
      <motion.p 
        className="mt-8 text-center max-w-2xl mx-auto text-gray-300 leading-relaxed"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: .8, delay: .5 }}
      >
        Explore <strong>affordable website development pricing</strong> packages in Nigeria. 
        Whether you need a <strong>business website</strong>, <strong>eCommerce store</strong>, 
        or a <strong>custom web application</strong>, 
        <span className="text-red-500 font-semibold"> M.O WebDev</span> has the perfect plan for your goals and budget.
      </motion.p>

      {/* 💰 Pricing Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.article
            key={index}
            className="relative bg-[#020617] hover:bg-[#020617]/30 
            hover:backdrop-blur-lg hover:scale-105 transition-transform duration-300
            px-4 py-2 rounded-2xl pt-32 pb-6 w-full border border-white/10 shadow-lg"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .8, delay: .2 * index, ease: "easeOut"}}
            viewport={{ once: true }}
          >
            {/* Header */}
            <header className="bg-red-500 px-4 py-6 w-full absolute top-0 right-0 rounded-t-2xl text-center shadow-md">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                {plan.title}
              </h2>
              <p className="text-3xl md:text-4xl font-bold mt-4 text-white">
                {plan.price}
              </p>
            </header>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-sm md:text-base text-white">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-red-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a 
              className="w-full mt-6 bg-red-500 hover:bg-red-600 py-2 
              rounded-2xl transition-colors cursor-pointer text-white font-medium inline-block text-center shadow-md"
              aria-label={`Order ${plan.title} via WhatsApp`}
              href={`https://wa.me/2348167893167?text=Hello%20M.O%20WebDev!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.title)}%20package.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
