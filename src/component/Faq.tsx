import type { JSX } from "react"
import { useState } from "react"
import SectionHead from "./SectionHead"

export default function Faq(): JSX.Element {
  const [opened, setOpened] = useState<number | null>(null)

  const faq = [
    {
      question: "How long does it take to develop a website?",
      responds:
        "The timeline depends on the size and complexity of the project. A simple website can take 1–2 weeks, while larger custom projects may take 4–8 weeks.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      responds:
        "Yes, we offer ongoing support and maintenance packages to keep your website secure, updated, and running smoothly.",
    },
    {
      question: "Will my website be mobile-friendly?",
      responds:
        "Absolutely! We build all websites to be fully responsive, ensuring they look and perform great on desktops, tablets, and mobile devices.",
    },
    {
      question: "Can you redesign my existing website?",
      responds:
        "Yes, we specialize in website redesigns. We can give your current site a fresh, modern look while improving performance and user experience.",
    },
    {
      question: "Do you help with SEO?",
      responds:
        "Yes, every website we build follows SEO best practices, and we also provide additional SEO services to help you rank higher on Google.",
    },
    {
      question: "What technologies do you use?",
      responds:
        "We use modern technologies such as React, Tailwind CSS, and other tools to deliver fast, secure, and scalable websites.",
    },
    {
      question: "How much does a website cost?",
      responds:
        "The cost varies depending on your project requirements. We’ll provide a clear, customized quote after understanding your needs.",
    },
  ]

  return (
    <section className="mt-20 flex flex-col items-center">
      <SectionHead text="Frequently Asked Questions" />

      <div className="mt-8 flex flex-col gap-4 w-full max-w-[1000px]">
        {faq.map(({ question, responds }, index) => (
          <div
            key={index}
            className="shadow-xl bg-[#020617] border border-white/10 px-6 py-4
              rounded-2xl backdrop-blur-lg transition-transform"
          >
            <div
              className="flex justify-between items-center border-b border-white/20 pb-4 cursor-pointer"
              onClick={() => setOpened(opened === index ? null : index)}
            >
              <span className="font-medium">{question}</span>
              <button
                className="bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-white transition"
                aria-label="Toggle FAQ"
              >
                {opened === index ? "−" : "+"}
              </button>
            </div>

            <p
              className={`mt-4 text-sm leading-relaxed transition-all duration-300 ${
                opened === index ? "block" : "hidden"
              }`}
            >
              {responds}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
