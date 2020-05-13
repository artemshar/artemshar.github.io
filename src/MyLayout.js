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
              Every digital product should be easy to use
            </div>
            <div className="focus focus-3">
              Our time, attention and emotions are very expensive things
            </div>
            <div className="focus focus-4">
              As <a href="https://www.linkedin.com/in/artemshar/" target="_blanc">Frontend-developer</a>, I spend these resources so that users save them for real life, communication, and something really interesting
            </div>
            <br/>
            <div className="focus focus-5">
              <p>
                I also think about how to find a balance between "automate everything" and "give people valuable work". Charity? Pay for brand loyalty and some activity?
                I want to find an answer. I want to find an answer. You can say, that sociologists or governments should answer this question, but I think that in 2020 this is an important question for the founders of companies and managers. 
              </p>
              <span>
                <a href="https://twitter.com/artem_shar" target="_blanc">Tweet me</a> to start a dialog about this topic.
              </span>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}



export default MyLayout;
