import React from 'react'
import "./Navbar.css"
import { Images } from '../../Constants'

function Navbar() {
  return (
<div className='navbar-app'>
    <div className='navbar'>
        <div className='logo'><img src={Images.bookmark} alt="logo" /></div>
    </div>
</div>
    )
}

export default Navbar