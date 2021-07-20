import React from 'react'
import * as footerStyle from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyle.footerzone}>
      <div className={footerStyle.column}>
        <h1>Company</h1>
        <ul>
          <li>About Us</li>
          <li>Carreer</li>
          <li>Inquieres</li>
          <li>Inquieres - Supplier</li>
        </ul>
      </div>

      <div className={footerStyle.column}>
        <h1>Account</h1>
        <ul>
          <li>About</li>
          <li>Mission</li>
          <li>Service</li>
          <li>Social</li>
          <li>Get in touch</li>
        </ul>
      </div>


      <div className={footerStyle.column}>
        <h1>Support</h1>
        <ul>
          <li>FAQ</li>
          <li>Contact us</li>
          <li>Web Chat</li>
          <li>Open ticket</li>
        </ul>
      </div>

      <div className={footerStyle.column}>
        <h1>Social Media</h1>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>


  )
}

export default Footer
