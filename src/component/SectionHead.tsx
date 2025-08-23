import type { JSX } from "react";

export default function SectionHead({text}:{text:string}):JSX.Element{
    return(
      <h1 
        className="text-2xl sm:text-3xl md:text-4xl font-medium 
        rounded-tr-3xl rounded-bl-3xl bg-[#020617]/40 
        py-2 px-6 backdrop-blur-lg 
        shadow-[0_0_15px_rgba(99,102,241,0.6)] 
      text-white"
      >
        {text}
      </h1>
    )
}