import React, { useState } from 'react'
import Contacts from './components/Contacts.js'
import Header from './components/Header.js'

import './MyLayout.css'

function MyLayout() {
  return (
    <div className="container">
      <Header/>
      <main className="main">
        <Contacts/>
        <div className="focus-time">
          <div className="msg"><span className="focus">focusing and time</span></div>
        </div>
      </main>
    </div>
  );
}



export default MyLayout;
