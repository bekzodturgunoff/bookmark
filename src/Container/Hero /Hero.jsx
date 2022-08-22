import React from 'react'
import "./Hero.scss"
import {Images} from "../../Constants"

function Hero() {
  return (
    <div className='hero-app'>

        <div className='hero-container'> 
        <div className='hero-text'>
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favorite websites.
                Open a new browser tab and see your site load instantly.
                Try it for free. 
            </p>
            <div className='hero-btns'>
            <button className='hero-btn-chrome'>Get it on Chrome</button>
            <button className='hero-btn-firefox'>Get it on Firefox</button>
            </div>
        </div>

        <div className='hero-img'>
            <img src={Images.featuresTabHero} alt="hero-img" />
        </div>
        </div>
    </div>
  )
}

export default Hero