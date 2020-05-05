import React from 'react'
import './_button.scss'

const Button = ({children, active}) => {
  return (
    <div className={`nav-btn flat ${active && 'active'}`}>
      {children}
    </div>
  );
}

export default Button;
