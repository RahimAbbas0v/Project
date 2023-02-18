import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import MenuCatalog from '../../components/MenuCatalog/MenuCatalog';
import MenuHeader from "../../components/MenuHeader/MenuHeader"
import MenuInfo from "../../components/MenuInfo/MenuInfo"
import Products2 from '../../components/Products2/Products';
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import Footer from '../../components/Footer/Footer';
import MoonLoader from "react-spinners/MoonLoader";
import LoadingScreen from 'react-loading-screen';

function Menu() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)},900)},[])
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Menu</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://images.getbento.com/accounts/64b147bfe7cdcd17347051a0bc071733/media/images/61754Main_Logo.png"
        />
      </Helmet>
      <ScrollToTop/>
      {
        loading ?
        <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#36d7b7'
  /> 
      :
  <><MenuHeader/>
      <MenuInfo/>
      <MenuCatalog/>
      <Products2/>
      </>
      }
      
    </>
  )
}

export default Menu
