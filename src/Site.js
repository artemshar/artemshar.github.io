import React from 'react'
import Logo from './parts/Logo.js'
import Contacts from './parts/Contacts.js'
import Button from './parts/Button.js'
import './Site.css'

function Site() {
  return (
    <div className="container">
      <header className="header">
        <span className="focus">focus</span>
        {/* <div className="h-card header-top">
          <div className="nav">

            <a href="./index.html" className="nav-btn active p-name">Artem Shar</a>
            <a href="./blog.html" className="nav-btn">blog</a>
          </div>
        </div> */}

      <Logo/>

      </header>
      <main>
        <div className="hello-text">
          <span>Hello! My name is Artem. <br/> I'm Web / Front-end developer, who helps create nice, clear and stable interfaces. </span>
          <a href="https://docs.google.com/document/d/1Jtz-lmaFES7IfLbaUEjr84oWEab9kuHve5m7a8o49-0/edit?usp=sharing" title="Google Docs | CV" target="_blanc">CV</a>
        </div>

        <Contacts/>
          {/* <div className="music">
            <h2>Music! My favorite radio stations</h2>
            <h3>Shoegaze / Dream Pop</h3>
            <ul>
              <li>
                <a href="https://decayfm.com/">decayfm.com</a>
              </li>
            </ul>
          </div> */}
    </main>

  </div>

  );
}

export default Site;
