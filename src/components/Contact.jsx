export default function Contact() {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h2>GET IN TOUCH</h2>
          <h3>Let's discuss your next project or just say hello! 👋</h3>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>bilalfarid.zakaria@gmail.com</p>
                <a href="mailto:bilalfarid.zakaria@gmail.com">Send Email</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+1 (615) 521-0571</p>
                <a href="tel:+16155210571">Call Now</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Nashville, Tennessee</p>
                <span>Available for remote work</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="contact-details">
                <h4>Response Time</h4>
                <p>Usually within 24 hours</p>
                <span>Monday - Friday</span>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <div className="cta-content">
              <h3>Ready to work together?</h3>
              <p>I'm always excited to discuss new opportunities, whether it's a full-time position, freelance project, or just a friendly chat about technology.</p>
              <div className="cta-buttons">
                <a href="mailto:bilalfarid.zakaria@gmail.com" className="cta-button primary">
                  <i className="fa-solid fa-envelope"></i>
                  Send Email
                </a>
                <a href="/resume/BilalZakariaResume.pdf" download className="cta-button secondary">
                  <i className="fa-solid fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="social-contact">
          <p>Or connect with me on social media:</p>
          <div className="social-links-contact">
            <a href="https://github.com/Bilalzakaria" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/bilalfzakaria" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:bilalfarid.zakaria@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
