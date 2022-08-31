import React from 'react'
import "./Footer.scss"
import {Images} from '../../Constants'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-color-container'>
        <div className='footer-text'>
            <p>35,000+ already joined</p>
            <h1>Stay up-to-date with what we’re doing</h1>
        </div>

        <div className='footer-form'>
            <input type="email" required placeholder='Enter your email adress' />
            <button>Contact us</button>
        </div>
        </div>
        <div className='footer-nav'>
            <div className='links_logo'>
                <img src={Images.bookmark} alt="logo" />
                <ul>
                    <li> <a href="#">Features</a> </li>
                    <li> <a href="#">Pricing</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
            </div>
            <div className='social_icons'>
                <a href="#">
                    <img src={Images.iconFaceBook} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={Images.iconTwitter} alt="Twitter" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer