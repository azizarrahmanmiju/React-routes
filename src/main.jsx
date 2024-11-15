import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './Component/Services.jsx';
import About from './Component/About.jsx';
import ContactUs from './Component/ContactUs.jsx';
import Users from './Component/Users/Users.jsx';
import UserMoredetails from './Component/UserMoreDetails.jsx/UserMoredetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/Contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: "/user/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserMoredetails></UserMoredetails>
      },


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
