import React, { useState } from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Developer from './pages/Developer'


import './MyLayout.css'
import Footer from './components/Footer'

function MyLayout() {
  return (
    <>
      <Header/>
      <div className="content">
        <div className="container">
          <main className="main">
            <Developer/>
          </main>
        </div>
        <MobileMenu className="desktop-hidden"/>
      </div>
      <Footer/>
    </>
  );
}



export default MyLayout;
