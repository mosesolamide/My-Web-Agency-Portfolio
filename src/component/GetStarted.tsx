import type { JSX } from "react"
import { Link } from "react-router"

export default function GetStarted({text}:{text:string}):JSX.Element{
    return(
        <Link
          to="/get-started"
          className="font-medium cursor-pointer
          px-8 md:px-4 py-2 md:py-2 border-[1px] text-white bg-[#020617] border-white/20 rounded-full"
          aria-label="Get started"
        >
            {text}
        </Link>
    )
}