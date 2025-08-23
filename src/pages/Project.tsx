import type { JSX } from "react"
import SectionHead from "../component/SectionHead"
import CandleLeaf from "../assets/PROJECT-IMG/candle-leaf.png"
import Furniture from "../assets/PROJECT-IMG/Furniture.png"
import Hexashop from "../assets/PROJECT-IMG/Hexashop.png"

export default function Project(): JSX.Element {
  const project = [
    {
      name: "Candle Leaf",
      url: "https://candle-leaf.pxxl.live/",
      image: CandleLeaf
    },
    {
      name: "Hexashop",
      url: 'https://shopsphere12.netlify.app/',
      image: Hexashop
    },
    {
      name: "Furnitures",
      url: "https://furniture237.netlify.app/",
      image: Furniture
    }
  ]

  return (
    <section className="py-10 flex flex-col items-center">
      <SectionHead text="Project" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {project.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image container with scroll effect */}
            <div className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[70%]"
              />
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#020617] text-white p-3 text-center group-hover:text-red-500 transition">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
