import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
function Navbar() {
  const [color, setColor] = useState(false);
  const bgchange = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", bgchange);
  return (
    <>
      <nav className={color ? "navbar active" : "navbar"}>
        <div className="companyName">
          <h2>COFFEE</h2>
          <p>BLEND</p>
        </div>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <MenuIcon />
          MENU
        </label>
        <div className="menu">
          <ul className="list">
            <li id="home">
              <Link to="/" id="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/" id="link">
                MENU
              </Link>
            </li>
            <li>
              <Link to="/" id="link">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/" id="link">
                BLOG
              </Link>
            </li>

            <li>
              <Link to="/" id="link">
                ABOUT
              </Link>
            </li>
            <li>
              <NavDropdown
                id="nav-dropdown-white-example"
                title="Shop"
                menuVariant="white"
              >
                <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Single Product
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Checkout</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <Link to="/" id="link">
                CONTACT
              </Link>
            </li>
            <div>
              <span id="shopicon">
                <ShoppingCartIcon />
                <sup id="compsup">5</sup>
              </span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
