import { useEffect, type ReactNode } from "react"
import { useLocation } from "react-router"

type Props = {
  children: ReactNode
}

export default function ScrollToTop({ children }: Props) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
