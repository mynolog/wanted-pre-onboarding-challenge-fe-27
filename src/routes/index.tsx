import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import route from './route.tsx'

const router = createBrowserRouter(route)

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
