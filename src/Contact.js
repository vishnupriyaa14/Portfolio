import React from 'react';
import './Contact.css'; // 👈 Link to external CSS file

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">📬 Get In Touch</h2>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>📞 Contact Information</h3>
          <p><strong>Email:</strong> vishnupriya14kp@gmail.com</p>
          <p><strong>Phone:</strong> +91 7539920407</p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/vishnupriya14" target="_blank" rel="noreferrer">
              github.com/vishnupriya14
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/vishnu-priya14" target="_blank" rel="noreferrer">
              linkedin.com/in/vishnu-priya14
            </a>
          </p>
        </div>
        <a>
        <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
        </a>
        <a
  href="/Vishnupriya-Resume.pdf"
  download
  target="_blank"
  rel="noreferrer"
  className="resume-btn"
>
  📄 Download My Resume
</a>


      </div>
    </section>
  );
}

export default Contact;
