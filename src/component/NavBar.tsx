import { motion } from "motion/react"
import { useState } from 'react'
import { NavLink } from 'react-router'
import { TiThMenuOutline } from "react-icons/ti"
import { MdOutlineCancel } from "react-icons/md"
import GetStarted from './GetStarted'

export default function NavBar(){
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "about" },
    { label: "Services", to: "services" },
    { label: "Project", to: "project" },
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
          <img src="./mowebdev_logo.webp" alt="M.0 WebDev logo the best web developer in nigeria" className='w-50 m-0' />
        </div>

        {/* Menu */}
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } md:flex absolute md:relative top-0 left-0 w-full md:w-auto 
            flex-col md:flex-row items-center justify-center 
            bg-[#020617] md:bg-transparent h-screen md:h-auto`}
        >
          <button
            className="mb-10 cursor-pointer md:hidden"
            onClick={() => setShowMenu(false)}
            aria-label="Close Menu"
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
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }:{isActive: boolean}) =>
                    isActive
                      ? "bg-[#1C1F2F] text-purple-300 px-4 py-2 rounded-full"
                      : "hover:text-purple-300 transition-colors"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="mt-2 md:mt-0">
              <GetStarted 
                text="Pricing" 
                path="/pricing" 
                onClick={() => setShowMenu(false)}
              />
            </li>
          </ul>
        </div>

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