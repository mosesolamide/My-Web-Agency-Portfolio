import type { JSX } from "react"
import { motion } from "motion/react"

export default function SectionHead({text}:{text:string}):JSX.Element{
    return(
      <motion.h1 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium 
        rounded-tr-3xl rounded-bl-3xl bg-[#020617]/40 
        py-2 px-6 backdrop-blur-lg 
        shadow-[0_0_15px_rgba(99,102,241,0.6)] 
      text-white"
        initial={{opacity:0 , y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8 , ease: "easeOut"}}
        viewport={{once: true, amount: 0.4}}
      >
        {text}
      </motion.h1>
    )
}