import React, { useState } from 'react'
import cn from 'classnames'
import Contacts from './Contacts'
import './_mobile-menu.scss'


const MobileMenu = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('mobile-menu', className, open ? true : 'visible')}>
      <div className="icon_show-close-mobile-popup" onClick={() => { setOpen(!open) }}>
        {open ?
          <svg className="icon_close" height="34" width="34" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
          :
          <svg className="icon_bars"  height="30" width="30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z"/></svg>
          }
      </div>
      <div className="menu-content">
        <h4 className="label">Contacts</h4>
        <Contacts />
      </div>
    </div>
  );
}

export default MobileMenu;
