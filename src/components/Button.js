import React from 'react';
import './Button.css'

const Button = ({children, active}) => {
  return (
    <div className={`nav-btn flat ${active && 'active'}`}>
      {children}
    </div>
  );
}

export default Button;
