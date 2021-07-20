import React from 'react'

import * as navbarStyle from '../styles/navbar.module.scss'

const Navbar = ({ handleClick }) => {



  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.container}>
        <div className={navbarStyle.title}>Kurama</div>
        <div className={navbarStyle.login}>LOGIN</div>
      </div>

      <button onClick={handleClick} className={navbarStyle.button} >Get Started</button>
    </div>
  )
}

export default Navbar
