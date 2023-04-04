import React from 'react'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';

const currentUser = false;

const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to="/Login"/>
  } else return children
}

const router = createBrowserRouter([
  {path:"/",
  element: currentUser ? <Home/> : <Login/>
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
    path:"/Home",
    element: <ProtectedRoute><Home/></ProtectedRoute>
  }
]);




export default function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
