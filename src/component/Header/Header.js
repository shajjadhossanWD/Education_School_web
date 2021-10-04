import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle ={
        fontWeight: "bold",
        color: "rgb(212, 161, 31)"
        }
    return (
        <div className="navbars">
        {/* website name .............  */}
         <h3><i className="fas fa-graduation-cap"></i> WEB<span>EDU</span></h3>
         
         {/* menu section ............. */}
            <div>
                <NavLink className="nav-item" to = "/home" activeStyle ={navStyle} >Home</NavLink>
                <NavLink className="nav-item" to = "/services" activeStyle ={navStyle} >Services</NavLink>
                <NavLink className="nav-item" to = "/about" activeStyle ={navStyle} >About-Us</NavLink>
                <NavLink className="nav-item" to = "/contact" activeStyle ={navStyle} >Contact-Us</NavLink>
            </div>

        </div>
    );
};

export default Header;