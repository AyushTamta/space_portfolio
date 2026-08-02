import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-stars" aria-hidden="true">
        {[...Array(28)].map((_, i) => (
          <span key={i} style={{ top: `${(i * 47) % 100}%`, left: `${(i * 71) % 100}%`, animationDelay: `${(i % 8) * .6}s` }}></span>
        ))}
      </div>

      <div className="footer-glow" aria-hidden="true"></div>

      <div className="footer-container">
        <section className="contact-strip" aria-labelledby="contact-title">
          <div className="contact-intro">
            <div className="availability-pill"><span></span> Available for opportunities</div>
            <h2 id="contact-title">Let’s build something <span>meaningful.</span></h2>
            <p>Open to data, AI, and product engineering conversations.</p>
          </div>

          <div className="contact-actions">
            <a href="mailto:ayush.tamta111@gmail.com" className="email-action">
              <FontAwesomeIcon icon={faEnvelope} />
              <span><small>Send an email</small><strong>ayush.tamta111@gmail.com</strong></span>
              <FontAwesomeIcon icon={faArrowRight} className="email-arrow" />
            </a>

            <div className="quick-links" aria-label="Additional contact links">
              <a href="tel:+919990833893" aria-label="Call Ayush"><FontAwesomeIcon icon={faPhone} /><span>Phone</span></a>
              <a href="https://www.linkedin.com/in/ayushtamta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /><span>LinkedIn</span></a>
              <a href="https://github.com/AyushTamta" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /><span>GitHub</span></a>
            </div>
          </div>
        </section>

        <div className="footer-bottom">
          <p>© 2026 Ayush Tamta</p>
          <span>Gurugram, India · IST</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
