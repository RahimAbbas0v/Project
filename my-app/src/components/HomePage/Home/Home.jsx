import React from "react";
import Header from "../Header.jsx/Header";
import Info from "../info/Info";
import { Helmet } from "react-helmet";
import Story from "../OurStory/Story";
import Advantages from "../Advantages/Advantages";
import Discover from "../discovermenu/Discover";
import Number from "../Numbers/Number";
import Coffes from "../Coffes/Coffes";
import Photos from "../Photos/Photos";
import Products from "../Products/Products";
import Comment from "../Comments/Comment";
import Fastfood from "../Fastfood/Fastfood";
import SimpleMap from "../Map/Map";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
function Home() {
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
      <Footer/>
    </>
  );
}

export default Home;
