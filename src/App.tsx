import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./component/Layout"
import Home from "./pages/Home"
import ScrollToTop from "./component/ScrollTop"

function App() {
  const routes = [
    {
      path: "/",
      element: (
        <ScrollToTop>
          <Layout />
        </ScrollToTop>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "services",
          lazy: async () => {
            const mod = await import("./pages/Services")
            return { Component: mod.default }
          }
        },
        {
          path: "about",
          lazy: async () => {
            const mod = await import("./pages/AboutUs")
            return { Component: mod.default }
          }
        },
        {
          path: "project",
          lazy: async () => {
            const mod = await import("./pages/Project")
            return { Component: mod.default }
          }
        },
        {
          path: "contact",
          lazy: async () => {
            const mod = await import("./pages/ContactUs")
            return { Component: mod.default }
          }
        },
        {
          path: "pricing",
          lazy: async () => {
            const mod = await import("./pages/Pricing")
            return { Component: mod.default }
          },
        },
        {
          path: "blog",
          lazy: async () => {
            const mod = await import("./pages/Blog")
            return { Component: mod.default }
          },
        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default App
