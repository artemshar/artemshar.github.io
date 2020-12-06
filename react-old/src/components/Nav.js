import React from 'react'
import './Nav.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Blog from '../pages/Blog'

const Nav = () => {
  return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item active">
            <a className="nav-link" href="/blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dev">Developer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;
