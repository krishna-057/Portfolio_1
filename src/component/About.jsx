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
           I'm a passionate developer who loves bringing ideas to life through code. With a keen eye for design and a strong foundation in modern web technologies, I create digital solutions that are both beautiful and functional.</p>
           <p>
           My journey in web development started with curiosity and has evolved into a deep passion for creating user-centered experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
           </p>
          </div>
        </div>
        </div>
      </section>  
    </div>
  )
}

export default About
