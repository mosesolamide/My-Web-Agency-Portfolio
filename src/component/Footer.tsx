import type { JSX } from 'react'

export default function Footer():JSX.Element{
    return(
        <footer className="text-white bg-[#020617] border-t border-white/20 w-full max-w-[1200px] mx-auto min-h-[350px] rounded-t-3xl px-6 py-12 md:px-8 md:py-16">
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
                        {['Home', 'Services', 'Projects', 'About'].map((item) => (
                        <li key={item}>
                            <a href="#" className="hover:text-purple-300 transition-colors">
                            {item}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="space-y-4">
                    <h3 className="font-medium uppercase text-sm tracking-wider">Contact</h3>
                    <address className="not-italic space-y-2">
                        <p className="text-white/60">olamidemoses132@gmail.com</p>
                        <p className="text-white/60">08167893167</p>
                    </address>
                </div>

                {/* Column 4: Social */}
                <div className="space-y-4">
                    <h3 className="font-medium text-sm tracking-wider">Follow</h3>
                    <div className="flex space-x-4">
                        
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/40">
                © {new Date().getFullYear()} MoWebDev. All rights reserved.
            </div>
        </footer>
    )
}