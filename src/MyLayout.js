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
          <div className="msg">Focusing and time <span className="focus">are very important in our life</span></div>
          <div className="msg care">I want to care about these human resources in products witch I creating.</div>
          <div className="msg write-me">
            
            <span>Write me to <a href="https://t.me/artemshar" rel="me" target="_blanc" title="t.me/artemshar">telegram</a> </span>
            <span>if you are looking Frontend / Product developer, like me: <a target="_blanc" href="https://docs.google.com/document/d/1Jtz-lmaFES7IfLbaUEjr84oWEab9kuHve5m7a8o49-0/edit?usp=sharing">CV</a></span>
          </div>
          <div className="msg amazing">You're amazing! <br/> Dont lose your time {new Date().toLocaleTimeString()}</div>
        </div>
      </main>
    </div>
  );
}



export default MyLayout;
