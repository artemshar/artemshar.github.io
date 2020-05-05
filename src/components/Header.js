import React from 'react'
import Logo from './Logo.js'
import Nav from './Nav.js'
import Contacts from './Contacts.js'
import MobileMenu from './MobileMenu.js'
import './_header.scss'


const Header = () => {
  return (
    <header className="header">
      <div className="h-card header-top">
        <span className="p-name">Artem Shar</span>
        <Logo />
        <Contacts className="mobile-hidden"/>
        <MobileMenu className="desktop-hidden"/>
      </div>
      {/* <Nav/> */}
    </header>
  );
}

export default Header;
