import React from 'react'
import "./Navbar.scss"
import { Images } from '../../Constants'

function Navbar() {
  return (
<div className='navbar-app'>
    <div className='navbar'>

        <div className='logo'><img src={Images.bookmark} alt="logo" /></div>
<div className='hamburger-links'>
<img src={Images.iconHamburger} alt="hamburger" />
</div>
        <div className='links'>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            <button>Clikc</button>

            </ul>

        </div>
        

    </div>
</div>
    )
}

export default Navbar