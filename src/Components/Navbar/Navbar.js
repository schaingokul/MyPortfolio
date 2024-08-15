import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const [menu, setMenu] =  useState("home");
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='title-letter'>
        <h1 className='letter'>G</h1>
        <img src={theme_pattern} style={{width: "100px"}} />
      </div>
      <ul className="nav-menu">
        <li><AnchorLink className ='anchor-link'  href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt=''/>: <></> }</li>
        <li><AnchorLink className ='anchor-link' offset={50} href='#aboutme'><p onClick={()=> setMenu("aboutme")}>About Me</p></AnchorLink>{menu === "aboutme" ? <img src={underline}/>: <></> }</li>
        <li><AnchorLink className ='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("service")}>Services</p></AnchorLink>{menu === "service" ? <img src={underline}/>: <></> }</li>
        <li><AnchorLink className ='anchor-link' offset={50} href='#portfolio'><p onClick={()=> setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline}/>: <></> }</li>
        <li><AnchorLink className ='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact") }>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline}/>: <></> }</li>
      </ul>
      <div className="nav-connect"><AnchorLink className ='anchor-link' href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
};

export default Navbar
