import React, { Component, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux/es/exports";
function Navbar({ history }) {
  const dispatch = useDispatch()
  const count = useSelector(state => state.basket.count)
  const [color, setColor] = useState(false);
  const [login, setLogin] = useState(false)
  const [active, setActive] = useState(1)
  const [color2, setColor2] = useState("red")
  const navigate=useNavigate()
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login"
  };
  useEffect(() => {

    setLogin(localStorage.getItem('loggedIn'))
  }, [])
  const bgchange = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", bgchange);
// const handleLogout=()=>{
//   window.localStorage.clear()
//   window.location.reload(true)
//   navigate('/login')
// }
  const { pathname } = useLocation();
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
            <li id="home" >
              <Link
                to="/"
                id="link"
                className={active===1 ? " active2": ""} onClick={()=>{setActive(1)}}
              >
                HOME
              </Link>
            </li>
            <li >
              <Link
                to="/menu"
                id="link"
                className={active===2 ? " active2": ""} onClick={()=>{setActive(2)}}
              >
                MENU
              </Link>
            </li>
            <li >
              <Link
                to="/services"
                id="link"
                className={active===3 ? " active2": ""} onClick={()=>{setActive(3)}}
              >
                SERVICES
              </Link>
            </li> 
            <li >
              <Link
                to="/blog"
                id="link"
                className={active===4 ? " active2": ""} onClick={()=>{setActive(4)}}
              >
                BLOG
              </Link>
            </li>

            <li >
              <Link
                to="/about"
                id="link"
                className={active===5 ? " active2": ""} onClick={()=>{setActive(5)}}
              >
                ABOUT
              </Link>
            </li >
            <li >
              <NavDropdown
                id="nav-dropdown-white-example"
                title="Shop"
                menuVariant="white"
                className={active===6 ? " active2": ""} onClick={()=>{setActive(6)}}
              >
                <NavDropdown.Item
                 
                  id='dropdownstyle'

                >
                  <Link to="shop" id="link2">Shop</Link>
                </NavDropdown.Item>
                <NavDropdown.Item  id='dropdownstyle'><Link to="/cart" id="link2">Cart</Link></NavDropdown.Item>
                <NavDropdown.Item   id='dropdownstyle'><Link to="/checkout" id="link2">Checkout</Link></NavDropdown.Item>
              </NavDropdown>
            </li>
            <li >
              <Link
                to="/contact"
                id="link"
                className={active===7 ? " active2": ""} onClick={()=>{setActive(7)}}
              >
                CONTACT
              </Link>
            </li>


            <div style={{ display: "flex", gap: "20px" }}>
              <span id="shopicon">
                <Link to="/cart" id="link" className={active===8 ? " active2": ""} onClick={()=>{setActive(8)}}>
                  <ShoppingCartIcon id="navicon" /><sup>{count}</sup></Link>
              </span>
              {
                login ?
                <NavDropdown
                id="nav-dropdown-white-example"
                title={<AccountCircleIcon id="navicon" />}
                menuVariant="white"
                onClick={()=>{setActive(true)}}
              >
                <NavDropdown.Item
                id='dropdownstyle'
                >
                   <Link to="/user" id="link2">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                id='dropdownstyle'
                onClick={logOut}
                >
                  <Link to="/login" id="link2">LogOut</Link>
                </NavDropdown.Item>
      
              </NavDropdown>: <span id="shopicon">
                    <Link to="/login" id="link">
                      <AccountCircleIcon className={active===9 ? " active2": ""} onClick={()=>{setActive(9)}}/></Link>
                  </span>
                  }
            </div>

          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
