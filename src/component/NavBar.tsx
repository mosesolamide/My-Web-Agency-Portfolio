import type { JSX } from 'react'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from "react-scroll"
import { TiThMenuOutline } from "react-icons/ti"
import { MdOutlineCancel } from "react-icons/md"
// import { CiTwitter, CiInstagram } from "react-icons/ci"
// import { PiTiktokLogoThin } from "react-icons/pi"
// import { VscGithubAlt } from "react-icons/vsc"

export default function NavBar():JSX.Element{
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const tabletSize:boolean = windowWidth <= 768
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

            window.addEventListener('resize', handleResize)

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])


    
    return(
        <header className='relative'>
            <nav className='text-white flex py-8 px-4 md:items-center justify-between md:justify-around'>

                <div>
                    <h1 className='font-bold text-2xl'>MoWebDev</h1>
                </div>

                <div 
                    className={`${showMenu && tabletSize? 'absolute top-0 left-0 w-full flex flex-col': 'hidden'} md:flex items-center justify-center
                     bg-[#020617] md:bg-transparent py-5 mt-0 h-screen md:h-0`}
                 >
                    <div 
                        className='mb-10 cursor-pointer md:hidden'
                        onClick={() => setShowMenu(false)}
                    >
                        <MdOutlineCancel size={30}/>
                    </div>
                    <ul className='flex flex-col md:flex-row gap-4 text-2xl md:text-sm lg:text-lg font-medium'>
                        <li>
                            <ScrollLink
                                className=''
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                className=''
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                className=''
                                to="project"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Project
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                className=''
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                About Us
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                className=''
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Blog
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                className=''
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact Us
                            </ScrollLink>
                        </li>
                    </ul>
                </div>

                <div className='hidden sm:flex'>
                    <button
                        className='bg-[#01040E] font-medium cursor-pointer
                         px-8 md:px-4 py-2 md:py-2 border-[1px] border-white rounded-full'
                    >
                        Get Started
                    </button>
                </div>

                <div 
                    className='cursor-pointer md:hidden'
                    onClick={() => setShowMenu( prev => !prev)}
                >
                    <TiThMenuOutline size={30} />
                </div>

            </nav>
        </header>
    )
}
// bg-[#01030B]
                    // <ul className='flex gap-2'>
                    //     <li 
                    //         className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                    //         justify-center transition-colors duration-500'
                    //     >
                    //         <a href="">
                    //             <CiTwitter size={25}/>
                    //         </a>
                    //     </li>
                    //     <li
                    //         className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                    //         justify-center transition-colors duration-500'
                    //     >
                    //         <a href="">
                    //             <CiInstagram size={25}/>
                    //         </a>
                    //     </li>
                    //     <li 
                    //         className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                    //         justify-center transition-colors duration-500'
                    //     >
                    //         <a href="">
                    //             <PiTiktokLogoThin size={25}/>
                    //         </a>
                    //     </li>
                    //     <li
                    //         className='hover:bg-[#1C1F2F] w-10 h-10 rounded-full flex items-center
                    //         justify-center transition-colors duration-500'
                    //     >
                    //         <a href="" >
                    //             <VscGithubAlt size={25}/>
                    //         </a>
                    //     </li>
                    // </ul>