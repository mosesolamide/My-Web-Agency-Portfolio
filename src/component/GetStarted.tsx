import type { JSX } from "react"
import { Link } from "react-router"

type GetStartedProps = {
  text: string
  path: string
  onClick?: () => void | false
}

export default function GetStarted({ text, path, onClick }: GetStartedProps): JSX.Element {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="font-medium cursor-pointer
      px-8 md:px-4 py-2 md:py-2 border-[1px] text-white bg-[#020617] border-white/20 rounded-full"
      aria-label="Get started"
    >
      {text}
    </Link>
  )
}
