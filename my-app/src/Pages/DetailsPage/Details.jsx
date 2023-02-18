import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import ScrollToTop  from '../../components/ScrollTop/ScrollTop';
import LoadingScreen from 'react-loading-screen';
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader"
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Outlet } from 'react-router-dom';
function Details() {
  
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)},800)},[])
  return (
    <>
    <Helmet>
<meta charSet="utf-8" />
<title>Details</title>
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
  <>
  <DetailsHeader/>
  <ProductDetail/>
      </>
      }

    </>
  )
}

export default Details;
