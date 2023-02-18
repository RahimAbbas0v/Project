import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Info from "../../components/info/Info";
import { Helmet } from "react-helmet";
import Story from "../../components/OurStory/Story";
import Advantages from "../../components/Advantages/Advantages";
import Discover from "../../components/discovermenu/Discover";
import Number from "../../components/Numbers/Number";
import Coffes from "../../components/Coffes/Coffes";
import Photos from "../../components/Photos/Photos";
import Products from "../../components/Products/Products";
import Comment from "../../components/Comments/Comment";
import Fastfood from "../../components/Fastfood/Fastfood";
import SimpleMap from "../../components/Map/Map";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollTop/ScrollTop";
import MoonLoader from "react-spinners/MoonLoader";
import LoadingScreen from 'react-loading-screen';
function Home() {
  

  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)},900)},[])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://images.getbento.com/accounts/64b147bfe7cdcd17347051a0bc071733/media/images/61754Main_Logo.png"
        />
      </Helmet>
     
      {
        loading ?
  <LoadingScreen 
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#36d7b7'


  /> 
      :
  <><ScrollToTop/>
      <Header />
      <Info />
      <Story />
      <Advantages/>
      <Discover/>
      <Number/>
      <Coffes/>
      <Photos/>
      <Products/>
      <Comment/>
      <Fastfood/>
      <Map/>
      </>
      }
    
    </>
  );
}

export default Home;
