import React from 'react'
import Logo from './Logo'
import Contacts from './Contacts'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <Logo />
        <div className="container">
            <Contacts />
        </div>    
    </footer>
  );
}

export default Footer;
