import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './Navbar.scss'

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__logo'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
    </div>
    <div className='navbar__pages'>
      <li>
        <Link to='/projects'> Projects </Link>
      </li>

      <li>
        <Link to='/about'> About </Link>
      </li>

      <li>
        <Link to='/contact'> Contact </Link>
      </li>
    </div>
  </nav>
)

export default Navbar
