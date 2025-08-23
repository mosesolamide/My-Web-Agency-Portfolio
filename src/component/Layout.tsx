import type { JSX } from "react"
import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"
import LookingTo from "./LookingTo"
import Faq from "./Faq"

export default function Layout():JSX.Element{
    return(
        <div className="min-h-screen w-full bg-[#020617] relative">
            {/* Magenta Orb Grid Background */}
            <div
                className="fixed inset-0 z-0"
                style={{
                background: "#020617",
                backgroundImage: `
                    linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                    radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
                `,
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                }}
            />
                {/* Your Content/Components */}
            <div className="relative z-10 min-h-screen">
                <NavBar />
                <main className='my-18 text-white px-4 sm:px-6 md:px-8'>
                    <Outlet />
                    <Faq />
                    <LookingTo />
                </main>
                <Footer />
            </div>
        </div>
    )
}