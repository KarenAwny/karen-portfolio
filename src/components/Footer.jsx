import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = ({ content, personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#hero" className="navbar-logo">
              <span className="logo-mark" aria-hidden="true">
                KA
              </span>
              <span>
                {content.meta.name}
                <span className="logo-dot">.</span>
              </span>
            </a>
            <p className="footer-tagline">{content.footer.tagline}</p>
          </div>

          <nav className="footer-nav" aria-label={content.footer.quickLinks}>
            <a href="#about" className="footer-nav-link">
              {content.nav.about}
            </a>
            <a href="#skills" className="footer-nav-link">
              {content.nav.skills}
            </a>
            <a href="#projects" className="footer-nav-link">
              {content.nav.projects}
            </a>
            <a href="#certificates" className="footer-nav-link">
              {content.nav.certificates}
            </a>
            <a href="#contact" className="footer-nav-link">
              {content.nav.contact}
            </a>
          </nav>

          <div className="footer-socials">
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              aria-label={content.contact.emailLabel}
              title={personalInfo.email}
            >
              <FiMail />
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="WhatsApp"
              title={`WhatsApp: ${personalInfo.whatsapp}`}
            >
              <FaWhatsapp />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {content.meta.name}. {content.footer.rights}
          </p>
          <p>{content.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

