import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item active">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Developer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Products</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
