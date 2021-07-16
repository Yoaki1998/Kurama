import React from 'react'
import * as headerStyle from '../styles/header.module.scss'

const Header = () => {
  return (
    <div className={headerStyle.imagezone}>
      <div className={headerStyle.container}>
        <div className={headerStyle.title} >We sell Air since 1998 in the whole World</div>
        <button className={headerStyle.bigbutton}>Get Started</button>
      </div>
    </div>
  )
}

export default Header
