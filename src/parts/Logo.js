import React from 'react'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-wrap">
      <svg className="logo-svg" viewBox="0 0 200 200" width="50px" height="50px">
        <circle cx="100" cy="100" r="100" fill="#313131" />
        <circle cx="100" cy="100" r="75" fill="#ccc" />
        <circle cx="100" cy="100" r="50" fill="#fff" />
      </svg>
    </div>
  )
}

export default Logo