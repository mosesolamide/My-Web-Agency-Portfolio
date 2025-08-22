import type { JSX } from "react"

export default function LookingTo():JSX.Element{
    return(
      <div 
        className="bg-[#020617]/20 border-white border-2 backdrop-blur-lg flex flex-col lg:flex-row
        lg:justify-between items-center mt-30 rounded-2xl px-4 py-10"
      >
        <div>
          <h3 className="text-4xl font-medium">Want to create a Website ?</h3>
          <p className="my-4 font-light sm:text-xl">Contact M.O WebDev - Top Web Design Company in World. We develop the best web application!</p>
        </div>
      </div>
    )
}