import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
class RevealExample extends React.Component {
  render() {
    return (
      <div id="headname">
        <Reveal bottom>
          <span>Discover</span>
          <h2>OUR PRODUCTS</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Reveal>
      </div>
    );
  }
}
function Products() {
  const [left, setLeft] = useState(true);
  const [middle, setMiddle] = useState(false);
  const [right, setRight] = useState(false);

  const handleClick1 = () => {
    // 👇️ toggle
    setLeft(true);
    setMiddle(false);
    setRight(false);
  };
  const handleClick2 = () => {
    // 👇️ toggle
    setLeft(false);
    setMiddle(true);
    setRight(false);
  };
  const handleClick3 = () => {
    // 👇️ toggle
    setLeft(false);
    setMiddle(false);
    setRight(true);
  };
  return (
    <>
      <section id="productsection">
        <RevealExample />
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
              to="/"
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
              to="/drinks"
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
              to="/cake"
              id="link"
              style={{
                color: right ? "black" : "",
              }}
            >
              {" "}
              Desserts
            </Link>
          </button>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default Products;
