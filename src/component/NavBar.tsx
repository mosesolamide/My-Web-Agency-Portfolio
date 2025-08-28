import type { JSX } from 'react'
import { motion } from "motion/react"
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { TiThMenuOutline } from "react-icons/ti"
import { MdOutlineCancel } from "react-icons/md"
import GetStarted from './GetStarted'

export default function NavBar(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const tabletSize: boolean = windowWidth <= 768

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 👇 Your Nav Items Array
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "services" },
    { label: "Project", to: "project" },
    { label: "About Us", to: "about" },
    { label: "Blog", to: "blog" },
    { label: "Contact Us", to: "contact" }
  ]

  return (
    <header className="relative h-24">
      <motion.nav
        initial={{opacity: 0 , y: -100}}
        animate={{opacity: 1 , y: 0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="text-white flex items-center py-8 px-4
          justify-between md:justify-around border-b-1 border-white/30 
          bg-[#020617]/60 backdrop-blur-lg fixed w-full h-24 z-50"
      >
        <div>
          {/* <h1 className="font-bold text-2xl">M.OWebDev</h1> */}
          <img src="./mowebdev_logo.png" alt="Moses website development logo" className='w-50 m-0' />
        </div>

        {/* Menu */}
        <div
          className={`${
            showMenu && tabletSize
              ? "absolute top-0 left-0 w-full flex flex-col"
              : "hidden"
          } md:flex items-center justify-center bg-[#020617] mt-0 h-screen md:h-0`}
        >
          <button
            className="mb-10 cursor-pointer md:hidden"
            onClick={() => setShowMenu(false)}
            aria-label="Close Menu"
            style={{ outlineOffset: "4px" }}
          >
            <MdOutlineCancel size={30} className="text-white" />
          </button>

<ul
  className="flex flex-col md:flex-row gap-4 md:gap-6
    lg:gap-8 text-2xl md:text-sm lg:text-lg font-medium"
>
  {navItems.map((item) => (
    <li key={item.to}>
      <NavLink
        to={item.to}
        onClick={() => tabletSize && setShowMenu(false)}   // 👈 closes menu on mobile
        className={({ isActive }) =>
          isActive
            ? "bg-[#1C1F2F] text-purple-300 px-4 py-2 rounded-full"
            : "hover:text-purple-300 transition-colors"
        }
      >
        {item.label}
      </NavLink>
    </li>
  ))}

  {/* Pricing button always visible */}
  <li className="mt-2 md:mt-0">
    <GetStarted 
      text="Pricing" 
      path="/pricing" 
      // 👇 close menu when clicked on small screen
      onClick={() => tabletSize && setShowMenu(false)}  
    />
  </li>
</ul>


        </div>

        {/* Get Started button */}
        {/* <div className="hidden md:flex">
          <GetStarted text='Pricing' path='/pricing' />
        </div> */}

        {/* Hamburger Menu Button */}
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label={showMenu ? "Close Menu" : "Open Menu"}
          aria-expanded={showMenu}
        >
          <TiThMenuOutline size={30} className="text-current" />
        </button>
      </motion.nav>
    </header>
  )
}
