import { motion } from "motion/react"
import SectionHead from "../component/SectionHead"

type BlogPost = {
  id: number
  title: string
  description: string
  category: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 React Tips for Beginners",
    description:
      "React can be tricky when you're starting out. Here are 5 simple tips to make your learning smoother.",
    category: "Tips",
    date: "Aug 25, 2025",
  },
  {
    id: 2,
    title: "How I Built My First Portfolio Website",
    description:
      "A breakdown of how I created my portfolio using React and TailwindCSS. Plus, lessons I learned along the way.",
    category: "Journey",
    date: "Aug 20, 2025",
  },
  {
    id: 3,
    title: "JavaScript Snippets You Should Know",
    description:
      "Useful one-liners and functions that can save you time in your projects.",
    category: "Resources",
    date: "Aug 15, 2025",
  },
  {
    id: 4,
    title: "Deploying a React App on Netlify",
    description:
      "Step-by-step guide on how to host your React app for free using Netlify.",
    category: "Tutorial",
    date: "Aug 10, 2025",
  },
]

export default function BlogPage() {
  return (
    <section className="px-6 py-6 max-w-5xl mx-auto flex flex-col items-center">
      <SectionHead text="My Blog" />

      <div className="grid gap-8 sm:grid-cols-2 mt-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300"
          >
            <span className="text-sm text-gray-400">{post.date}</span>
            <h2 className="text-2xl font-semibold mt-2 mb-3">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <span className="inline-block px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
              {post.category}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
