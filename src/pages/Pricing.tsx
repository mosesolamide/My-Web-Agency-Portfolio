    import type { JSX } from "react"
    import SectionHead from "../component/SectionHead"
    import { FaCheck } from "react-icons/fa"

    export default function Pricing():JSX.Element{
        return(
            <section className="mt-20 flex flex-col items-center">
                <SectionHead text="Our Plans & Pricing" />
                <p className="mt-3 text-center max-w-2xl mx-auto text-white">
                    Wondering how much it costs to build a website with us? Explore our
                    flexible web development pricing packages designed to fit your business needs.
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative bg-[#020617] px-4 py-2 rounded-2xl pt-32 pb-6 w-[330px] sm:w-[420px] md:w-[500px]">
                        <div className="bg-red-500 px-4 py-6 w-full absolute top-0 right-0 rounded-t-2xl text-center">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-light">Cooperate Business Website</h2>
                            <p className="text-4xl font-bold mt-4">&#8358;300,000</p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500" />
                                <span>Domain & Hosting (1year)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500" />
                                <span>Business Emails</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500" />
                                <span>Up to 5 Pages</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500" />
                                <span>Logo Design</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500" />
                                <span>SEO Optimization</span>
                            </li>
                        </ul>
                        <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-2xl">Order Now</button>
                    </div>
                    
                </div>
            </section>
        )
    }