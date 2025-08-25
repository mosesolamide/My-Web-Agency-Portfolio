import type { JSX } from "react"
import { useState } from "react"
import { motion } from "motion/react"
import SectionHead from "../component/SectionHead"
import CandleLeaf from "../assets/PROJECT-IMG/candle-leaf.png"
import Furniture from "../assets/PROJECT-IMG/Furniture.png"
import Hexashop from "../assets/PROJECT-IMG/Hexashop.png"

export default function Project(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const project = [
    {
      name: "Candle Leaf",
      url: "https://candle-leaf.pxxl.live/",
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
    },
    {
      name: "Furnitures",
      url: "https://furniture237.netlify.app/",
      image: Furniture
    }
  ]

//   function to animate on mobile once clicked on
  const handleClick = (index: number) => {
    // If already active → open link
    if (activeIndex === index) {
      window.open(project[index].url, "_blank")
    } else {
      // First tap → animate scroll
      setActiveIndex(index)
    }
  }

  return (
    <section className="py-10 mt-20 flex flex-col items-center">
      <SectionHead text="Project" />

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
      >
        {project.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(index)}
            className="group block relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: .4}}
            transition={{duration: .8, delay: .2 * index}}
          >
            {/* Image container with scroll effect */}
            <div className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className={`w-full h-auto transition-transform duration-[7000ms] ease-linear
                ${activeIndex === index ? "-translate-y-[70%]" : "group-hover:-translate-y-[70%]"}`}
              />
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#020617] backdrop-blur-lg text-white p-3 text-center group-hover:text-red-500 transition">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
