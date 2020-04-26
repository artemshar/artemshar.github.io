import React from 'react'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-wrap">
      <svg className="logo-svg" viewBox="0 0 200 200" width="50px" height="50px">
        <circle className="logo-circle-1" cx="100" cy="100" r="100" fill="#e8e8e8" />
        <circle className="logo-circle-2" cx="100" cy="100" r="75" fill="#c5c5c5" />
        <circle className="logo-circle-3" cx="100" cy="100" r="50" fill="#fff" />
      </svg>
    </div>
  )
}

export default Logo