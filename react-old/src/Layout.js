import React, { useState } from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ReactDOMServer from "react-dom/server"

import Blog from './pages/Blog'
import Dev from './pages/Dev'

import http from "http"
import { StaticRouter } from "react-router"
import './Layout.css'
import Footer from './components/Footer'




function Layout() {
  return (
    // <Router>
      <div>
        <Header/>
        <div className="content">
          <div className="container">
            <main className="main">
              {/* <Switch>
                <Route path="/blog">
                  <Blog/>
                </Route>
                <Route path="/dev">
                  <Dev/>
                </Route>
              </Switch> */}
            </main>
            </div>
            <MobileMenu className="desktop-hidden"/>
          </div>
        <Footer/>
      </div>
    // </Router>
  );
}

export default Layout;
