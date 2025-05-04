import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';
import Applayout from './layouts/app_layout';
import Landing from './pages/landing';
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import Link from './pages/link'
import Redirect from './pages/redirect'

const router = createBrowserRouter([
  {
    element : <Applayout />,
    children : [
      {
        path:"/",
        element : <Landing />
      },
      {
        path:"/auth",
        element : <Auth />
      },
      {
        path:"/dashboard",
        element : <Dashboard />
      },
      {
        path:"/link/:id",
        element : <Link />
      },
      {
        path:"/:id",
        element : <Redirect />
      }
    ]
  }
])

function App() {
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App
