import React from "react";
import "../css/Footer.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mediumIcon from "../assets/medium.png";
import emailIcon from "../assets/gmail.png";
function Footer() {
  // const logo = require('../assets/github-mark.png');
  const contactDetails = [
    {
      icon: githubIcon,
      name: "Github",
      link: "https://github.com/krishna-057",
    },
    {
      icon: linkedinIcon,
      name: "Linkedin",
      link: "http://www.linkedin.com/in/krishna-sharma-a502aa234",
    },
    {
      icon: mediumIcon,
      name: "Medium",
      link: "https://medium.com/@krishnasharmacit",
    },
    {
      icon: emailIcon,
      name: "Email",
      link: "https://mail.google.com/mail/?view=cm&to=krishnasharmacit@gmail.com",
    },
  ];
  return (
    <section className="footer-section" id="footer">
      <div className="footer-content">
        <div className="footer-socials">
          {contactDetails.map((contact, index) => (
            <span key={index} className="footer-social-link">
              <a
                href={contact.link}
                className="footer-social-link-text"
                target="_blank"
              >
                <img
                  src={contact.icon}
                  alt="logo"
                  className="footer-social-link-icon"
                ></img>
                {contact.name}
              </a>
            </span>
          ))}
        </div>
        <div className="footer-note">
          <p>© 2025 Krishna Sharma. Built with React and lots of Tea.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
