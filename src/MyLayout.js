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
              <span>I would like people don't fight with interfaces and systems</span>
              <span className="focus focus-2">, because our time, attention and emotions are very expensive things</span>
            </div>
            <div className="focus focus-3">
              Every digital product can be clear and easy to use
            </div>
            <div className="focus focus-4">
              As <a href="https://www.linkedin.com/in/artemshar/" target="_blanc">Frontend-developer</a>, I want to save people resources for real life, communications, and something more interesting, than screens
            </div>
            <br/>
            <div className="focus focus-5">
              So...
            </div>
            <div className="focus focus-6">
              <p>
                How do you spend your time not at the screen? :) <br/> <a href="https://twitter.com/artem_shar" target="_blanc">Tweet me</a> or follow in <a href="https://www.instagram.com/artem.shar/">Instagram</a>
              </p>
              <img style={{width: '320px', marginTop: '20px', borderRadius: '10px'}} src="https://media.giphy.com/media/xFnAObsU5nMrUUC3HX/giphy-downsized-large.gif" alt="dooooog"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



export default MyLayout;
