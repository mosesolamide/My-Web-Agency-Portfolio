import type { JSX } from "react"
import GetStarted from "./GetStarted"

export default function LookingTo(): JSX.Element {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-900/50 via-slate-900/40 to-purple-900/50 
      border border-white/20 backdrop-blur-xl 
      flex flex-col lg:flex-row lg:justify-between lg:items-center
      gap-6 lg:gap-12 mt-20 rounded-2xl px-8 py-12 shadow-2xl"
    >
      <div className="max-w-2xl">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Want to create a Website?
        </h3>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Contact <span className="font-semibold text-blue-400">M.O WebDev</span> – a top web development company.  
          We build fast, modern, and scalable web applications tailored for your success.
        </p>
      </div>

      <div className="flex-shrink-0">
        <GetStarted text="Get Started →" />
      </div>
    </div>
  )
}
