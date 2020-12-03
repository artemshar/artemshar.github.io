import React from 'react'
import Nav from './Nav'
import './Header.scss'


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="h-card header-top">
          <span className="p-name">Artem Shar</span>
        </div>
        <Nav/>
      </div>
    </header>
  );
}

export default Header;
