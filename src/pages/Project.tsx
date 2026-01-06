import { useState } from "react"
import { motion } from "motion/react"
import { Helmet } from "react-helmet-async"
import SectionHead from "../component/SectionHead"

// 🖼️ Images
import CandleLeaf from "../assets/PROJECT-IMG/candle-leaf.webp"
import Furniture from "../assets/PROJECT-IMG/Furniture.webp"
import Hexashop from "../assets/PROJECT-IMG/Hexashop.webp"
import Glamz from "../assets/PROJECT-IMG/Glamz.webp"
import CampusEats from "../assets/PROJECT-IMG/campus-eats.png"
import Mosesignature from "../assets/PROJECT-IMG/mosesignature-store.png"


export default function Project() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const projects = [
    {
      name: "Glamz Online Store",
      url: "https://shop.mowebdev.com.ng/",
      image: Glamz,
      description: "A modern fashion eCommerce website built Wordpress."
    },
    {
      name: "Candle Leaf",
      url: "https://candle-leaf.pxxl.xyz/",
      image: CandleLeaf,
      description: "An elegant candle store website a responsive design."
    },
    {
      name: "Hexashop",
      url: "https://shopsphere12.netlify.app/",
      image: Hexashop,
      description: "A clean, stylish multi-product shop UI designed for an online marketplace."
    },
    {
      name: "Furniture Store",
      url: "https://furniture237.netlify.app/",
      image: Furniture,
      description: "A furniture eCommerce landing page with beautiful layout and product showcase."
    },
    {
      name: "CampusEats",
      url: "https://campuseats1.netlify.app/",
      image: CampusEats,
      description: "A food delivery website for university student"
    },
    {
      name: "Mose' Signature Store",
      url: "https://mosesignature.store/",
      image: Mosesignature,
      description: "A fashion store that sells wristwatches, cloth, Perfumes, Men Glass"
    }
  ]

  return (
    <section className="py-10 mt-20 flex flex-col items-center px-4">
      {/* 🧠 SEO */}
      <Helmet>
        <title>Recent Projects | M.O WebDev - Best Web Developer in Nigeria</title>
        <meta
          name="description"
          content="Explore professional web development projects by M.O WebDev, including eCommerce stores, business websites, and modern UI designs built with React and TailwindCSS."
        />
        <meta
          name="keywords"
          content="web developer in Nigeria, website portfolio, React projects, eCommerce website Nigeria, M.O WebDev"
        />
        <link rel="canonical" href="https://mowebdev.com.ng/projects" />
      </Helmet>

      <SectionHead text="Our Recent Projects" />

      <motion.p
        className="mt-6 text-center max-w-2xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Take a look at some of the <strong>modern websites</strong> and <strong>UI designs</strong> we’ve built
        for businesses in Nigeria and beyond — blending creativity with functionality.
      </motion.p>

      {/* 💼 Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full max-w-6xl">
        {projects.map((item, index) => (
          <motion.article
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-[#020617]/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            {/* Image container with scroll effect */}
          <div className="h-80 overflow-hidden">
            <img
              src={item.image}
              alt={`Product image of ${item.name}`}
              loading="lazy"
              className={`w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-linear
              ${activeIndex === index ? "-translate-y-[70%]" : "group-hover:-translate-y-[40%]"}`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          </div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#020617]/90 backdrop-blur-lg text-white p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-300 mt-1 text-center">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 transition text-sm font-medium"
              >
                View Website
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
