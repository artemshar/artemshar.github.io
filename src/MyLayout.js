import React, { useState } from 'react'
import Header from './components/Header.js'

import './MyLayout.css'

function MyLayout() {
  return (
    <div className="container">
      <Header/>
      <main className="main">
        <div className="focus-time">
          <div className="msg"><span className="focus">
            I would like people to spend as little time as possible on fighting with interfaces
            <br/><br/>
            Everything should be easy to use
            </span></div>
        </div>
      </main>
    </div>
  );
}



export default MyLayout;
