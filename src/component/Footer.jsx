import React from 'react'
import '../css/Footer.css'
function Footer() {
  const contactDetails = [
    {
      icon: '🌐',
      name: 'Github',
      link: 'https://github.com/krishna-057'
    },
    {
      icon: '🌐',
      name: 'Linkedin',
      link: 'http://www.linkedin.com/in/krishna-sharma-a502aa234'
    },
    {
      icon: '🌐',
      name: 'Medium',
      link: 'krishnasharma214@gmail.com'
    },
    {
      icon: '🌐',
      name: 'Email',
      link: 'krishnasharma214@gmail.com'
    },
  ]
  return (
    <section className='footer-section' id='footer'>
      <div className='footer-content'>
        <div className='footer-socials'>
          {
            contactDetails.map((contact,index)=>
            (
              <span key={index} className='footer-social-link'><a href={contact.link} className='footer-social-link-text' target='_blank'>{contact.icon}{contact.name}</a></span>
            ))
          }
        </div>
        <div className='footer-note'>
          <p>© 2025 Krishna Sharma. Built with React and lots of Tea.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
