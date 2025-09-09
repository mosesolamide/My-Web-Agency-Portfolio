
import { motion } from "motion/react"
import type { Variants } from "motion/react"
import SectionHead from "./SectionHead"
import Javascript from "../assets/stack-img/javascript.svg"
import Tailwind from "../assets/stack-img/tailwind css.svg"
import CSS3 from "../assets/stack-img/css3.svg"
import HTML from "../assets/stack-img/html-5.svg"
import Wordpress from "../assets/stack-img/wordpress.svg"
import ReactLogo from "../assets/stack-img/react js.svg"

export default function Stack() {
  const stackArr = [
    { name: "JavaScript", img: Javascript },
    { name: "Tailwind", img: Tailwind },
    { name: "CSS 3", img: CSS3 },
    { name: "HTML 5", img: HTML },
    { name: "WordPress", img: Wordpress },
    { name: "React", img: ReactLogo },
  ]

  // 👇 parent container animation
  const containerVariants:Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // 👈 stagger child animations
      },
    },
  }

  // 👇 each item animation
  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="mt-20 flex flex-col justify-center items-center">
      <SectionHead text="Our Stack" />

      <motion.p
        className="mt-8 text-lg text-center font-light pb-1 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Tools and Technologies That Help Us Create Fast, Secure, and User-Friendly Websites
      </motion.p>

      {/* Parent container with variants */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stackArr.map(({ name, img }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center hover:scale-110 transition-transform duration-300"
          >
            <img src={img} alt={name} className="w-20 h-20 mx-auto" />
            <h2 className="mt-2 text-sm font-medium">{name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
