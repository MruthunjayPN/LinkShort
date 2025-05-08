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
import RequrieAuth from './components/require-auth';

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
        element : <RequrieAuth>
                    <Dashboard />
                  </RequrieAuth> 
      },
      {
        path:"/link/:id",
        element : <RequrieAuth> 
                    <Link />
                  </RequrieAuth>
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
