import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import  Navbar from "./components/Navbar/Navbar"
import ScrollToTopOnMount from './components/ScrollTop/ScrollTop'
import ScrollToTop from './components/ScrollTop/ScrollTop'
function App() {
  
  return (
    <>

    <ScrollToTopOnMount/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App