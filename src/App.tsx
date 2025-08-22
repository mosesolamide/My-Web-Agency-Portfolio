import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./component/Layout"
import Home from "./pages/Home"

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "services",
          lazy: async () => {
            const mod = await import("./pages/Services")
            return{ Component: mod.default }
          }
        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default App
