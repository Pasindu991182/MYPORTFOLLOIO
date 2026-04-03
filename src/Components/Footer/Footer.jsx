import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logos.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        
        {/* වම් පැත්ත - Logo සහ විස්තරය */}
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
          <p className="footer-description">
            I am a passionate full stack developer from Sri Lanka with experience in building dynamic, responsive, and stunning web applications.
          </p>
        </div>
        
        {/* දකුණු පැත්ත - Email Subscribe එක */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" className="footer-user-icon" />
            <input type="email" placeholder="Enter your email" className="footer-email-input-field" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>

      </div>

      {/* හරස් ඉර */}
      <hr className="footer-divider" />

      {/* යටම කොටස - Copyrights සහ Links */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2026 Iroshan Solution . All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer