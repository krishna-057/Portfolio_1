import React from 'react'
import '../css/navGation.css'
function Nav() {
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
      <button className='toggle'>Dark</button>
      </div>
    </nav>
    </>
  )
}

export default Nav