import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
  const [width, setWidth] = useState(undefined)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (width > 560 && menuOpen) {
      setMenuOpen(false)
    }
  }, [width, menuOpen])

  const nav = (
    <nav>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Support</a>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className={classes.header}>
      <h1>Company</h1>
      <div className={classes.navbar}>
        {nav}
        <img src={logo} alt='logo' />
      </div>

      <div className={classes.hamburger__menu}>
        {!menuOpen ? (
          <BiMenuAltRight size={27} onClick={() => setMenuOpen(true)} />
        ) : (
          <AiOutlineClose size={27} onClick={() => setMenuOpen(false)} />
        )}
        {menuOpen && (
          <div className={classes.hamburger__menu_mobile}>
            {nav}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
