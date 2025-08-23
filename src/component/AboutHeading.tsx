import type { JSX } from "react"

export default function AboutHeading():JSX.Element{
    return(
        <section>
            <h1 
            className="text-2xl sm:text-3xl md:text-4xl font-medium rounded-tr-3xl
            rounded-bl-3xl bg-[#020617]/20 border-t-2 py-2 px-4 backdrop-blur-lg"
            >
                About Us
            </h1>
        </section>
    )
}