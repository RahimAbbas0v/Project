import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import  Navbar from "./components/Navbar/Navbar"
import ScrollToTopOnMount from './components/ScrollTop/ScrollTop'
import ScrollToTop from './components/ScrollTop/ScrollTop'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import OrderId from "./context/index";
function App() {
  
  return (
    <>
    <ToastContainer/>
    <ScrollToTopOnMount/>
    <OrderId>
    <Navbar/>
    <Outlet/>
    <Footer/></OrderId>
    </>
  )
}

export default App