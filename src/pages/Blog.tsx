import { motion } from "motion/react"
import { Helmet } from "react-helmet-async"
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
      "React can be tricky when you're starting out. Here are 5 simple tips to make your learning smoother and more enjoyable.",
    category: "Tips",
    date: "Aug 25, 2025",
  },
  {
    id: 2,
    title: "How I Built My First Portfolio Website",
    description:
      "A step-by-step breakdown of how I created my first portfolio using React and TailwindCSS — plus lessons I learned along the way.",
    category: "Journey",
    date: "Aug 20, 2025",
  },
  {
    id: 3,
    title: "JavaScript Snippets You Should Know",
    description:
      "Useful one-liners and functions every web developer should know to speed up development.",
    category: "Resources",
    date: "Aug 15, 2025",
  },
  {
    id: 4,
    title: "Deploying a React App on Netlify",
    description:
      "A complete step-by-step guide on how to host your React app for free using Netlify in minutes.",
    category: "Tutorial",
    date: "Aug 10, 2025",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Blog | M.O WebDev - Web Developer in Nigeria</title>
        <meta
          name="description"
          content="Read helpful articles from M.O WebDev on React, JavaScript, and web development tips. Learn how to build fast, modern websites in Nigeria."
        />
        <meta
          name="keywords"
          content="M.O WebDev Blog, Web Developer in Nigeria, React tutorials, JavaScript tips, portfolio development, Netlify deployment"
        />
        <meta property="og:title" content="Blog | M.O WebDev - Web Developer in Nigeria" />
        <meta
          property="og:description"
          content="Get insights, tutorials, and coding tips from M.O WebDev to become a better web developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mowebdev.com.ng/blog" />
      </Helmet>

      {/* ✅ Page Content */}
      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col items-center">
        <SectionHead text="My Blog" />
        <p className="text-gray-400 text-center mt-4 max-w-2xl leading-relaxed">
          Explore articles and tutorials from{" "}
          <span className="text-[#2563EB] font-medium">M.O WebDev</span> —
          covering React, JavaScript, SEO, and professional website development
          tips to help you grow as a <strong>web developer in Nigeria</strong>.
        </p>

        {/* Blog List */}
        <div className="grid gap-8 sm:grid-cols-2 mt-10 w-full">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl shadow-lg bg-[#020617] border border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <header className="mb-4">
                <span className="text-sm text-gray-400">{post.date}</span>
                <h2 className="text-2xl font-semibold mt-2 text-white">
                  {post.title}
                </h2>
              </header>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.description}
              </p>
              <footer className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                  {post.category}
                </span>
                <button
                  className="text-sm text-blue-400 hover:text-blue-300 underline"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More →
                </button>
              </footer>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
