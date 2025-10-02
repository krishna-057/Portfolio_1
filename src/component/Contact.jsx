import React from "react";
import "../css/Contact.css";
function Contact() {
  return (
    <div>
      <section className="section" id="contact">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <div className="contact-content glass-cd">
            <p>
              Have a project in mind? I'd love to hear from you. Let's create
              something amazing together!
            </p>
            {/* <form> */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" required />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
