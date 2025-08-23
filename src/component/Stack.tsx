import type { JSX } from "react"
import SectionHead from "./SectionHead"
import Javascript from "../assets/stack-img/javascript.svg"
import Tailwind from "../assets/stack-img/tailwind css.svg"
import CSS3 from "../assets/stack-img/css3.svg"
import HTML from "../assets/stack-img/html-5.svg"
import Wordpress from "../assets/stack-img/wordpress.svg"
import React from "../assets/stack-img/react js.svg"

export default function Stack():JSX.Element{
    const stackArr = [
        {
            name: "JavaScript",
            img: Javascript
        },
        {
            name: "Tailwind",
            img: Tailwind
        },
        {
            name: "CSS 3",
            img: CSS3
        },
        {
            name: "HTML 5",
            img: HTML
        },
        {
            name: "WordPress",
            img: Wordpress
        },
        {
            name: "React",
            img: React
        },
    ]
    return(
      <section className="mt-20 flex flex-col justify-center items-center">
        <SectionHead text="Our Stack" />
        <p className="mt-6 text-lg text-center font-light pb-1">
            Tools and Technologies That Help Us Create Fast, Secure, and User-Friendly Websites
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6">
            {stackArr.map(({name,img},index) => (
                <div key={index} className="text-center">
                    <img src={img} alt={name} className="w-20 h-20" />
                    <h2>{name}</h2>
                </div>
            ))}
        </div>
      </section>
    )
}