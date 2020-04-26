import React from 'react';
import Logo from './atomic/Logo.js'
import Nav from './Nav.js'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="h-card header-top">
        <span className="p-name">Artem Shar</span>
        <Logo />
      </div>
      {/* <Nav/> */}
    </header>
  );
}

export default Header;
