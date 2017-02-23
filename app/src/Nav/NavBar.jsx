import React, { Component } from 'react';
import NavBarButton from './NavBarButton'
import Logo from './Logo.jsx'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <NavBarButton buttonName="Portfolio" link='notavail'/>
      <NavBarButton buttonName="About Henry" link='notavail'/>
      <NavBarButton buttonName="Get in Touch" link='notavail'/>
    </div>
  )
};


export default NavBar;