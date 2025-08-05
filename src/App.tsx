import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Layout from "./component/Layout"

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>

      </Route> 
    ))
    return <RouterProvider router={router} />
}
export default App
