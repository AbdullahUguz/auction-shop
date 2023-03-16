import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function MainLayout({children}) {
  return (
    <>
      <Navbar/>
      <Outlet>{children}</Outlet>
    </>
  )
}

export default MainLayout;
