import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
     

function Products() {
  const [left, setLeft] = useState(true);
  const [middle, setMiddle] = useState(false);
  const [middle2, setMiddle2] = useState(false);
  const [right, setRight] = useState(false);

  const handleClick1 = () => {
    setLeft(true);
    setMiddle(false);
    setMiddle2(false);
    setRight(false);
  };
  const handleClick2 = () => {
    setLeft(false);
    setMiddle(true);
    setMiddle2(false);
    setRight(false);
  };
  const handleClick3 = () => {
    setLeft(false);
    setMiddle(false);
    setMiddle2(true);

    setRight(false);
  };
  const handleClick4 = () => {
    setLeft(false);
    setMiddle(false);
    setMiddle2(false);
    setRight(true);
  };
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  return (
    <>
      <section id="productsection2">
         <div id="headname" data-aos="fade-up" data-aos-delay="100">
          <span>Discover</span>
          <h2>OUR PRODUCTS</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
      
      </div>
        <div className="buttons">
          <button
            onClick={handleClick1}
            id="dishbutton"
            style={{
              backgroundColor: left ? "rgb(196, 155, 99)" : "",
              color: left ? "black" : "",
            }}
          >
            <Link
              to="/shop"
              id="link"
              style={{
                color: left ? "black" : "",
              }}
            >
              {" "}
              Main Dish
            </Link>
          </button>
          <button
            id="drinksbutton"
            onClick={handleClick2}
            style={{
              backgroundColor: middle ? "rgb(196, 155, 99)" : "",
              color: middle ? "black" : "",
            }}
          >
            <Link
              to="shop/drinks"
              id="link"
              style={{
                color: middle ? "black" : "",
              }}
            >
              {" "}
              Drinks
            </Link>
          </button>
          <button
            id="dessertbutton"
            onClick={handleClick3}
            style={{
              backgroundColor: right ? "rgb(196, 155, 99)" : "",
              color: right ? "black" : "",
            }}
          >
            <Link
              to="shop/cake"
              id="link"
              style={{
                color: right ? "black" : "",
              }}
            >
              {" "}
              Desserts
            </Link>
          </button>
          <button
            id="dessertbutton"
            onClick={handleClick3}
            style={{
              backgroundColor: right ? "rgb(196, 155, 99)" : "",
              color: right ? "black" : "",
            }}
          >
            <Link
              to="shop/coffes"
              id="link"
              style={{
                color: right ? "black" : "",
              }}
            >
              {" "}
              Coffes
            </Link>
          </button>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default Products;
