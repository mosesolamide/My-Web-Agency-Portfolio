import { useState } from "react"
import { motion } from "motion/react"
import SectionHead from "../component/SectionHead"
import CandleLeaf from "../assets/PROJECT-IMG/candle-leaf.webp"
import Furniture from "../assets/PROJECT-IMG/Furniture.webp"
import Hexashop from "../assets/PROJECT-IMG/Hexashop.webp"

export default function Project() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const project = [
    {
      name: "Candle Leaf",
      url: "https://candle-leaf.pxxl.xyz/",
      image: CandleLeaf
    },
    {
      name: "Hexashop",
      url: "https://shopsphere12.netlify.app/",
      image: Hexashop
    },
    {
      name: "Furnitures",
      url: "https://furniture237.netlify.app/",
      image: Furniture
    }
  ]

  return (
    <section className="py-10 mt-20 flex flex-col items-center">
      <SectionHead text="Project" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {project.map((item, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            {/* Image container with scroll effect */}
            <div className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt={`Product image of ${item.name}`}
                loading="lazy"
                className={`w-full h-auto object-contain transition-transform duration-[7000ms] ease-linear
                ${activeIndex === index ? "-translate-y-[70%]" : "group-hover:-translate-y-[70%]"}`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
            </div>

            {/* Overlay with title + button */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#020617]/90 backdrop-blur-lg text-white p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm"
              >
                View Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
