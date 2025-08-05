import type { JSX } from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link as GetStarted } from 'react-router-dom'
import { TiThMenuOutline } from "react-icons/ti"
import { MdOutlineCancel } from "react-icons/md"

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
        <header className='relative h-24'>
            <nav 
                className='text-white flex py-8 px-4 md:items-center
                justify-between md:justify-around border-b-1 border-white/30 bg-[#020617]/60 backdrop-blur-lg fixed w-full h-24 z-50'
            >

                <div>
                    <h1 className='font-bold text-2xl'>MoWebDev</h1>
                </div>

                <div 
                    className={`${showMenu && tabletSize? 'absolute top-0 left-0 w-full flex flex-col'
                    : 'hidden'} md:flex items-center justify-center bg-[#020617]/60 backdrop-blur-lg mt-0 h-screen md:h-0`}
                 >
                    <button 
                        className='mb-10 cursor-pointer md:hidden'
                        onClick={() => setShowMenu(false)}
                        aria-label='Close Menu'
                        style={{ outlineOffset: '4px' }}
                    >
                        <MdOutlineCancel 
                            aria-hidden={true} 
                            size={30}
                            className='text-white'
                        />
                    </button>
                    <ul 
                        className='flex flex-col md:flex-row gap-4 md:gap-6
                        lg:gap-8 text-2xl md:text-sm lg:text-lg font-medium'
                    >
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive?
                                 'bg-[#1C1F2F] text-purple-300 px-4 py-2 rounded-full'
                                 :'hover:text-purple-300 transition-colors'}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive?
                                 'bg-[#1C1F2F] px-4 py-2 rounded-full'
                                 :'hover:text-purple-300 transition-colors'}
                                to="about"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive?
                                 'bg-[#1C1F2F] px-4 py-2 rounded-full'
                                 :'hover:text-purple-300 transition-colors'}
                                to="project"
                            >
                                Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive?
                                 'bg-[#1C1F2F] px-4 py-2 rounded-full'
                                 :'hover:text-purple-300 transition-colors'}
                                to="about"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive?
                                 'bg-[#1C1F2F] px-4 py-2 rounded-full'
                                 :'hover:text-purple-300 transition-colors'}
                                to="about"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive?
                                 'bg-[#1C1F2F] px-4 py-2 rounded-full'
                                 :'hover:text-purple-300 transition-colors'}
                                to="contact"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='hidden sm:flex'>
                    <GetStarted
                        to="/get-started"
                        className=' font-medium cursor-pointer
                         px-8 md:px-4 py-2 md:py-2 border-[1px] border-white/20 rounded-full'
                        aria-label='Get started'
                         
                    >
                        Get Started
                    </GetStarted>
                </div>

                <button 
                    className='cursor-pointer md:hidden '
                    onClick={() => setShowMenu( prev => !prev)}
                    aria-label={showMenu ? "Close Menu" : "Open Menu"}
                    aria-expanded={showMenu}
                >
                    <TiThMenuOutline
                         size={30}
                         className='text-current'
                     />
                </button>

            </nav>
        </header>
    )
}
// bg-[#01030B]
