import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import ScrollToTop  from '../../components/ScrollTop/ScrollTop';
import LoadingScreen from 'react-loading-screen';
import CardHeader from '../../components/CardPageHeader/CardHeader'
import Basket from '../../components/ProductBasket/Basket';
function Shop() {
  
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)},800)},[])
  return (
    <>
    <Helmet>
<meta charSet="utf-8" />
<title>Cart</title>
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
  <CardHeader/>
  <Basket/>

      </>
      }

    </>
  )
}

export default Shop