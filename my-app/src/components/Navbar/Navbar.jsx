import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useSelector,useDispatch} from "react-redux/es/exports";
function Navbar({history}) {
  const dispatch=useDispatch()
  const count=useSelector(state=>state.basket.count)
  const [color, setColor] = useState(false);
  const bgchange = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", bgchange);

  const {pathname} = useLocation();
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
              <Link
                to="/"
                id="link"
              >
                HOME
              </Link>
            </li>
            <li >
              <Link  
                to="/menu"
                id="link"
                
              >
                MENU
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                id="link"
                
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                id="link"
                
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                id="link"
              
              >
                ABOUT
              </Link>
            </li>
            <li>
              <NavDropdown
                id="nav-dropdown-white-example"
                title="Shop"
                menuVariant="white"
              >
                <NavDropdown.Item
                  href="#action/3.1"
 
                >
                 <Link to="shop" id="link2">Shop</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Single Product
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><Link to="/cart" id="link2">Cart</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Checkout</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <Link
                to="/contact"
                id="link"
               
              >
                CONTACT
              </Link>
            </li>
            <div style={{display:"flex",gap:"20px"}}>
              <span id="shopicon">
              <Link to="/cart" id="link">
                <ShoppingCartIcon  id="navicon" /><sup>{count}</sup></Link> 
              </span>
              <span id="shopicon">
                <Link to="/login" id="link">
               <AccountCircleIcon id="navicon"/></Link>
              </span>
            </div>
          </ul>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
