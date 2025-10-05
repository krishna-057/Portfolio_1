import React, {useState, useEffect} from 'react'
import './navGation.css'
const Nav=({dMode, toggleTheme})=> {
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-content container'>
        {/* div ul links and button for navbar */}
      <div className='logo-portfolio'>Portfolio</div>
      <ul className='nav-links'>
        <li><a href="#home" className='nav-link'>Home</a></li>
        <li><a href="#about" className='nav-link'>About</a></li>
        <li><a href="#skills" className='nav-link'>Skills</a></li>
        <li><a href="#projects" className='nav-link'>Projects</a></li>
        <li><a href="#contact" className='nav-link'>Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className='toggle' aria-label='Toggle Theme'>{dMode ? '🌙Dark':'☀️Light'}</button>
      </div>
    </nav>
    </>
  )
}

export default Nav