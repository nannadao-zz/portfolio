import React from 'react'

import logo from '../../assets/logo.png'
import './Navbar.scss'

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__logo'>
      <img src={logo} alt='logo' />
    </div>
    <div className='navbar__pages'>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </div>
  </nav>
)

export default Navbar
