import React, { useState } from 'react'
import cn from 'classnames'
import Contacts from './Contacts'
import './_mobile-menu.scss'


const MobileMenu = ({className}) => {
  const [open, setOpen] = useState(false);

  return (
      <div className={cn('mobile-menu', className, open ? true : 'visible')}>
        <div className="icon_burger" onClick={() => {setOpen(!open)}}>
          <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"/></svg>
        </div>
        <div className="menu-content">
          <h4 className="label">Contacts</h4>
          <Contacts/>
        </div>
      </div>
  );
}

export default MobileMenu;
