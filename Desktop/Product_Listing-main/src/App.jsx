import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import List from './List'
import Details from './Details'
import About from './Componenet/About'
import Cart from './Componenet/Cart'
import Login from './Componenet/Login'
import Register from './Componenet/Register'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2mY2Gym_YYwmrjp8551CR_x6FTNnxDT4",
  authDomain: "wsjp1-5264a.firebaseapp.com",
  projectId: "wsjp1-5264a",
  storageBucket: "wsjp1-5264a.firebasestorage.app",
  messagingSenderId: "179481975496",
  appId: "1:179481975496:web:50ffbc0826b2229ce323fd",
  measurementId: "G-6R6SY6ZFSB"
};


const app = initializeApp(firebaseConfig);









export default function App() {
  const routers = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "/:category_slug?",
            element: <List />,

          }, {
            path: "/details/:product_id",
            element: <Details />
          },{
            path:"/about",
            element:<About/>
          },{
            path:"/cart",
            element:<Cart/>
          },{
            path:"/login",
            element:<Login/>
          }
        ]
      },{
          path:"register",
          element:<Register/>
        }
    ]
  )
  return (
    <RouterProvider router={routers} />
  )
}
