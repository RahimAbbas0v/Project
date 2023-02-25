
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./AdminSideBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { PanelMenu } from 'primereact/panelmenu';
import 'primeicons/primeicons.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from '@carbon/react';
export default function BasicDemo() {
    const [visible, setVisible] = useState(false);
    const logOut = () => {
        window.location.href = "./"
      };
    return (

        <div className="card flex justify-content-center"  id='sidebardiv'>
            <Sidebar visible={visible} onHide={() => setVisible(false)} id="sidebar">
                <h2>Admin Panel</h2>
                <ul className='list'>
                    <li>
                       <Link to='/' id="link3">Dashboard</Link> 
                    </li>
                    <li>
                    <Link to='/'  id="link3" >Orders</Link> 
                    </li>
                    <li>
                    <Link to='/'  id="link3" >Products</Link> 
                    </li>
                    <li>
                    <Link to='/'  id="link3" >Users</Link> 
                    </li>
                </ul>
            </Sidebar>
            <div id='navbar2'>
            <Button style={{background:"black"}} onClick={() => setVisible(true)} id="sidebarbtn" ><MenuIcon/></Button>
            <NavDropdown
                id="nav-dropdown-white-example"
                title={<AccountCircleIcon id="navicon" />}
                menuVariant="white"
              >
                <NavDropdown.Item
                id='dropdownstyle'
                onClick={logOut}
                >
                  <Link to="/login" id="link2">LogOut</Link>
                </NavDropdown.Item>
      
              </NavDropdown></div>
        </div>
    )
}
