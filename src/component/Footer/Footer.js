import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="row footer">
            {/* discribe section -------------- */}
            <div className="col-lg-4">
            <h3><i className="fas fa-graduation-cap"></i> WEB<span>EDU</span></h3>
            <p className='discribe'>Find Website For Learning near you. Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted.</p>
            <p><b>stay with us and buil your skills</b></p>
            <p><small>ewebedu11@gmail.com</small></p>
            </div>

            {/* menu bars link section ............ */}
            <div className="col-lg-4 links">
                <h3>Links</h3>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/home">Services</NavLink></li>
                    <li><NavLink to="/home">About-Us</NavLink></li>
                    <li><NavLink to="/home">Contact-Us</NavLink></li>
                </ul>
            </div>

            {/* social side section ------------- */}
            <div className="col-lg-4">
                <div className="apps">
                    <h3>WEBEDU APP</h3> <br />
                    <button className="btn btn-primary m-2"><i className="fab fa-google-play"></i> Download Now</button>
                    <button className="btn btn-primary m-2"><i className="fab fa-apple"></i> Download Now</button>
                </div>
                <div className="social">
                    <h3>Social Media</h3>
                    <div className="icons">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;