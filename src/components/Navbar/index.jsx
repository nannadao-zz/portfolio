import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import logo from '../../assets/logo.png'
import './Navbar.scss'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [smallScreen, setSmallScreen] = useState(false)
  const mql = window.matchMedia('(max-width: 500px)')
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    mql.addEventListener('change', () => {
      if (mql.matches === true) {
        setSmallScreen(true)
      } else {
        setSmallScreen(false)
      }
    })
  })

  return (
    <nav className={scroll ? 'navbar navbar--scroll' : 'navbar'}>
      <div className='navbar__logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar__pages'>
        <li>
          <Link
            activeClass='active'
            to='homepage'
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={smallScreen ? -120 : -70}
            duration={400}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={smallScreen ? -120 : -70}
            duration={400}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={smallScreen ? -120 : -70}
            duration={400}
          >
            Contact
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
