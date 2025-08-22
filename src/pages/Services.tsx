import type { JSX } from "react"
import Seo from "../assets/seo.svg"
import Web from "../assets/web.svg"
import AppDevelopment from "../assets/app development.svg"
import LogoDesign from "../assets/logo design.svg"

export default function Services():JSX.Element{
    type WhatWeOffer ={
      service: string
      description: string
      img: string
      available: boolean
      id:number
    }

    const whatWeOffer:WhatWeOffer[] = [
      {
        service: "Website Development",
        description: `We build modern, responsive, and user-friendly websites that
        bring your ideas to life. Whether you need a simple landing page, a business
        website, or a full web application, we create solutions that are fast, secure,
        and tailored to your goals. Our focus is on design, performance, 
        and functionality—so your website not only looks great but also delivers real results.`,
        img: Web,
        available: true,
        id:1
      },
      {
        service:'SEO (Search Engine Optimization)',
        description: `We optimize your website to rank higher on search engines and attract the
        right audience. From keyword research and on-page optimization to technical SEO and content
        strategies, we build a strong foundation that improves visibility, drives traffic, and helps
        your business grow online.`,
        img: Seo,
        available: true,
        id:2
      },
      {
        service:'Logo & Branding',
        description: `We craft unique logos and brand identities that capture your vision and make your
        business stand out. From color palettes to typography and brand guidelines, we build designs that
        connect with your audience and leave a lasting impression.`,
        img: LogoDesign,
        available: true,
        id:3
      },
      {
        service:'App Development',
        description: `We build powerful, user-friendly mobile and web applications tailored to your needs.
        From idea to launch, we focus on seamless design, smooth performance, and scalable solutions that 
        give your users the best experience across all devices.`,
        img: AppDevelopment,
        available: false,
        id:4
      }
    ]
    return(
      <section className="mt-20 flex flex-col justify-center items-center">
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl font-medium rounded-tr-3xl
           rounded-bl-3xl bg-[#020617]/20 border-t-2 py-2 px-4 backdrop-blur-lg"
        >
            Our Services
        </h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeOffer.map( ({id,description,service,available,img}) => (
            <div 
                className="px-8 py-6 rounded-4xl bg-[#020617]/20 backdrop-blur-lg lg:backdrop-blur-none lg:bg-[#020617] border-2 cursor-pointer 
                lg:hover:backdrop-blur-lg lg:hover:bg-[#020617]/20 transition-all duration-500"
                key={id}
            >
                <img src={img} alt={img} className=" w-20 h-20 mb-2" />
                <div>
                    <h2 className="text-xl md:text-2xl font-medium">{service}</h2>
                    <p className="mt-4">{description}</p>
                    <span
                        className={`px-4 py-2 rounded-lg block w-fit text-sm font-medium mt-2
                        ${available ? "bg-green-500 text-white" : "bg-gray-500 text-white"}`}
                    >
                        {available ? "Available" : "⏳ Coming Soon"}
                    </span>
                </div>
            </div>
          ))}
        </div>
      </section>
    )
}