import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logos.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
        {/* Logo එක Clickable කළා */}
        <a href="#home" onClick={() => setMenu("home")}>
          <img src={logo} alt="Logo" className="logo" />
        </a>
        
        {/* Hamburger Icon for Mobile (Opens Menu) */}
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
        
        {/* Navigation Menu (Desktop & Mobile) */}
        <ul ref={menuRef} className="nav-menu">
            {/* Close Icon for Mobile */}
            <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
            
            <li onClick={() => { setMenu("home"); closeMenu(); }}>
              <a href="#home">Home</a>
            </li>
            
            <li onClick={() => { setMenu("about"); closeMenu(); }}>
              <a href="#about">About Me</a>
            </li>

            {/* 🌟 මෙන්න ඔයාගේ Real Time Projects වලට යන අලුත් Link එක */}
            <li onClick={() => { setMenu("projects"); closeMenu(); }}>
              <a href="#projects">Projects</a>
            </li>
            
            <li onClick={() => { setMenu("services"); closeMenu(); }}>
              <a href="#services">Services</a>
            </li>

            {/* 🌟 මේකෙන් ඔයාගේ My Work (Portfolio) section එකට යනවා */}
            <li onClick={() => { setMenu("work"); closeMenu(); }}>
              <a href="#work">Portfolio</a>
            </li>
            
            <li onClick={() => { setMenu("contact"); closeMenu(); }}>
              <a href="#contact">Contact</a>
            </li>
        </ul>

        {/* Connect Button */}
        <a href="#contact" className="nav-connect">
          Connect With Me
        </a>
    </div>
  )
}

export default Navbar