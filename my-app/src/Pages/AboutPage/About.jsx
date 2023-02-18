import React, { useEffect, useState } from 'react'
import AboutHeader from '../../components/AboutHeader/AboutHeader'
import Story from "../../components//OurStory/Story"
import Comments from "../../components/Comments/Comment"
import Coffes from "../../components/Coffes/Coffes"
import Numbers from "../../components/Numbers/Number"
import { Helmet } from "react-helmet";
import LoadingScreen from 'react-loading-screen';
import ScrollToTop from '../../components/ScrollTop/ScrollTop'


function About() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)},800)},[])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
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
  <><AboutHeader/>
    <Story/>
    <Comments/>
    <Coffes/>
    <Numbers/>
      </>
      }
   
    </>
  )
}

export default About
