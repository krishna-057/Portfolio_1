import React from 'react'
import '../css/About.css'
function About() {
  return (
    <div>
      <section className='section' id='about'>
        <div className='container'>
        <h1 className='section-title'>About Me</h1>
        <div className='about-content'>
          <div className='profile-cd glass-cd'> 
            <div className='profile-pic'></div>
            <h2 className='about-content-title'>Hello World!</h2>
            <p className='about-content-text'>Creating digital experiences with passion and precision.</p>
          </div>
          <div className='about-text'> 
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tenetur quo quasi voluptatum blanditiis error quisquam, soluta hic animi sint dignissimos! Provident, ex non. Nostrum, tempora? Accusantium eaque facere veniam!
           </p>
           <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
           </p>
          </div>
        </div>
        </div>
      </section>  
    </div>
  )
}

export default About
