import React from 'react'
import "./Extensions.scss"
import {Images} from "../../Constants"

function Extensions() {
  return (
    <div className='extensions-app'>

        <div className='extension-container'>

            <div className='extensions-text'>
              <h1>  Download the extension</h1>
              <p>We've got more browser in the pipeline. Please do let us know
                if you've got a favorite you'd like us tok prioritize.
              </p>
            </div>
            <div className='extensions'>
                <div className='chrome'>
                    <img src={Images.logoChrome} alt="Chrome" />
                    <h2>Add to Chrome</h2>
                    <p>Minimum version 62</p>
                    <img className='chrome-img' src={Images.bgDots} alt="dots" />
                    <button>Add & Install Extensions</button>
                </div>
                <div className='firefox'>
                <img src={Images.logoFireFox} alt="Firefox" />
                    <h2>Add to Firefox</h2>
                    <p>Minimum version 55</p>
                    <img className='firefox-img' src={Images.bgDots} alt="dots" />
                    <button>Add & Install Extension</button>
                </div>
                <div className='opera'>
                <img src={Images.logoOpera} alt="Opera" />
                    <h2>Add to Opera</h2>
                    <p>Minimum version 46</p>
                    <img className='opera-img' src={Images.bgDots} alt="dots" />
                    <button>Add & Install Extension</button>
                </div>
            </div>
        </div>
          </div>
  )
}

export default Extensions