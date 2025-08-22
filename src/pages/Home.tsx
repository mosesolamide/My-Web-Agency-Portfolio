import type { JSX } from 'react'
import { MdOutlineMail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io5"

export default function Home(): JSX.Element {
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
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium text-xs sm:text-sm md:text-lg'
                    >
                        🚀 Load FAST
                    </div>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium text-xs sm:text-sm md:text-lg'
                    >
                        📈 Rank HIGH on Google
                    </div>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium text-xs sm:text-sm md:text-lg'
                    >
                        ✨ User Friendly
                    </div>
                    <div 
                        className='border border-white/20 rounded-full 
                        text-center px-4 py-2 bg-[#020617]/20 backdrop-blur-lg 
                        font-medium text-xs sm:text-sm md:text-lg'
                    >
                        💵 Convert visitors to clients!
                    </div>
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

        </div>
    )
}