import React, { useState } from 'react'
import cn from 'classnames'
import './_logo.scss'

const Logo = () => {
  const [ lightClass, setLightClass ] = useState('')
  const [ count, setCount ] = useState(1)

  const handleClick = () => {
    if (count <= 3 ) {
      setCount(count + 1)
    } else {
      setCount(1)
    }

    setLightClass(`more-light-${count}`)
  }
  
  return (
    <div className={cn("logo-wrap", lightClass)} onClick={() => handleClick()}>
      <svg className="logo-svg" viewBox="0 0 200 200" width="50px" height="50px">
        <circle className="logo-circle-1" cx="100" cy="100" r="100" fill="#e8e8e8" />
        <circle className="logo-circle-2" cx="100" cy="100" r="75" fill="#c5c5c5" />
        <circle className="logo-circle-3" cx="100" cy="100" r="50" fill="#fff" />
      </svg>
    </div>
  )
}

export default Logo