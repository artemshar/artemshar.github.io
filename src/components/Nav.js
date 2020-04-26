import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item active">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
