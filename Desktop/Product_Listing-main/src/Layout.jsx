import React from 'react'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'

export default function 
() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
