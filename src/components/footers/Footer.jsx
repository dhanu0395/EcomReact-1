import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import insta from '../assets/instagram_icon.png'
import pintrest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPIFY</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintrest} alt="" />
        </div>
      </div>
      <div className="footer-copyrights">
        <hr />
        <p>Copyrights @ 2024 - ALl Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer