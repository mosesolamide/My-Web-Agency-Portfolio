import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import { MdOutlineMail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io5"

export default function Home(): JSX.Element {
    const badges = [
        { text: "🚀 Load FAST" },
        { text: "📈 Rank HIGH on Google" },
        { text: "✨ User Friendly" },
        { text: "💵 Convert visitors to clients!" },
    ]

    return (
        <div>
            <section className='max-w-6xl'>
                <h1 
                    className='text-4xl sm:text-5xl md:text-6xl font-semibold text-center md:text-start 
                    md:font-medium leading-16 md:leading-20 md:w-2xl'
                >
                    We build professional websites that:
                </h1>

                <div className='mt-6 flex flex-col lg:flex-row gap-4'>
                    {badges.map((badge, i) => (
                        <div 
                            key={i}
                            className='border border-white/20 rounded-full 
                            text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                            font-medium text-xs sm:text-sm md:text-lg'
                        >
                            {badge.text}
                        </div>
                    ))}
                </div>

                <p className='text-lg md:text-xl mt-4 text-center md:text-start'>
                    We combine beautiful design with smart technology to grow your business.
                </p>

                <div className='flex gap-4 mt-8'>
                    <a 
                        className='flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white 
                        font-bold px-4 md:px-6 py-2 md:py-4 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm md:font-bold'
                        aria-label='Link to Email'
                    >
                        <MdOutlineMail size={20} />
                        Email Us
                    </a>

                    <a 
                        className='flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white 
                        px-2 md:px-4 py-2 md:py-4 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm md:font-bold'
                        aria-label='Link to whatsapp'
                    >
                        <IoLogoWhatsapp size={20} />
                        WhatsApp
                    </a>
                </div>
            </section>
            <div className='flex flex-col justify-center items-center gap-4'>
                <AboutUs />
                <Link
                    to="about"    
                    className="font-medium cursor-pointer
                    px-8 md:px-4 py-2 md:py-2 border-[1px] text-white bg-[#020617] border-white/20 rounded-full"
                    aria-label='View More'
                >
                    View more about us
                </Link>
            </div>
        </div>
    )
}
