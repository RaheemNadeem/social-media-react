import React from 'react'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path:"/Register",
    element:<Register/>
  }
]);


export default function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
