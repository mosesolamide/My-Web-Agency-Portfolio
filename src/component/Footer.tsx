import type { JSX } from 'react'
import { CiTwitter, CiInstagram } from "react-icons/ci"
import { PiTiktokLogoThin } from "react-icons/pi"
// import { VscGithubAlt } from "react-icons/vsc"
import { Link } from 'react-router-dom'

export default function Footer():JSX.Element{
    return(
        <footer 
            className="text-white bg-[#020617] border-t
          border-white/20 w-full max-w-[1200px] mx-auto min-h-[350px]
            rounded-t-3xl px-6 py-12 md:px-8 md:py-16"

         >
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto">
                
                {/* Column 1: Branding */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">MoWebDev</h2>
                    <p className="text-white/60 text-sm">
                        Crafting pixel-perfect digital experiences.
                    </p>
                </div>

                {/* Column 2: Links */}
                <div className="space-y-4">
                    <h3 className="font-medium uppercase text-sm tracking-wider">Explore</h3>
                    <ul className="space-y-2">
                        {['home', 'services', 'projects', 'about'].map((item) => (
                        <li key={item}>
                            <Link 
                                to={`/${item}`} 
                                className="hover:text-purple-300 transition-colors capitalize"
                            >
                            {item}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="space-y-4">
                    <h3 className="font-medium uppercase text-sm tracking-wider">Contact Us</h3>
                    <address className="not-italic space-y-2">
                        <p className="text-white/60">08167893167</p>
                        <p className="text-white/60">olamidemoses132@gmail.com</p>
                    </address>
                </div>

                {/* Column 4: Social */}
                <div className="space-y-4">
                    <h3 className="font-medium text-sm tracking-wider">Follow Us</h3>
                    <ul className='flex gap-2'>
                        <li 
                            className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                            justify-center transition-colors duration-500'
                        >
                            <a href="">
                                <CiTwitter size={25}/>
                            </a>
                        </li>
                        <li
                            className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                            justify-center transition-colors duration-500'
                        >
                            <a href="">
                                <CiInstagram size={25}/>
                            </a>
                        </li>
                        <li 
                            className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                            justify-center transition-colors duration-500'
                        >
                            <a href="">
                                <PiTiktokLogoThin size={25}/>
                            </a>
                        </li>
                        {/* <li
                            className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                            justify-center transition-colors duration-500'
                        >
                            <a href="" >
                                <VscGithubAlt size={25}/>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/40">
                © {new Date().getFullYear()} MoWebDev. All rights reserved.
            </div>
        </footer>
    )
}