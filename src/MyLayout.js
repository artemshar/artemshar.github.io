import React, { useState } from 'react'
import Header from './components/Header.js'

import './MyLayout.css'

function MyLayout() {
  return (
    <div className="container">
      <Header/>
      <main className="main">
        <div className="focus-time">
          <div className="msg">
            <div className="focus focus-1">
              I would like people don't fight with interfaces and systems
            </div>
            <div className="focus focus-2">
              Everything should be easy to use
            </div>
            <div className="focus focus-3">
              Our time, attention, and mentality are very expensive things...
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



export default MyLayout;
