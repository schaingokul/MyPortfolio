import React from 'react';
import './Footer.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <div className='footer-title'>
                <h1>G</h1>
                <img src={theme_pattern} alt=''/>
            </div>
            <p>I am a frontend developer from, India with 3 years of experience in companies like Microsoft, Tesla and Apple.</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} alt='' />
                <input type='email' placeholder='Enter your email'/>
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className='footer-bottom'>   
        <div className='footer-bottom-left'>
          <p>@2024 Gokul Easwaran. All rights reserved.</p>  
        </div>
        <div className='footer-bottom-right'>
          <p>Term of Services</p>  
          <p>Privacy Policy</p>  
          <p>Connect with me</p>  
        </div>
      </div>
    </div>
  )
}

export default Footer
