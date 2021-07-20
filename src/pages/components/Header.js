import React from 'react'
import * as headerStyle from '../styles/header.module.scss'

const Header = ({ handleClick }) => {
  return (
    <div className={headerStyle.imagezone}>
      <div className={headerStyle.container}>
        <div className={headerStyle.title} >We promoting investment Worldwide since 1998</div>
        <button onClick={handleClick} className={headerStyle.bigbutton}>Get Started</button>
      </div>
    </div>
  )
}

export default Header
