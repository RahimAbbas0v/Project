import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/HomePage/Header.jsx/Header'
import  Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App