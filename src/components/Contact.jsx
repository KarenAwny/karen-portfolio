import React, { useState } from 'react';
import {
  FiMail,
  FiLinkedin,
  FiSend,
  FiCopy,
  FiCheck,
  FiExternalLink,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = ({ content, personalInfo }) => {
  const { contact } = content;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <FiMail aria-hidden="true" />
            <span>{contact.sectionTag}</span>
          </span>
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
        </div>

        <div className="contact-card-wrapper reveal">
          <div className="contact-methods-grid">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-method-card"
              aria-label={`${contact.emailLabel}: ${personalInfo.email}`}
            >
              <div className="contact-method-icon" aria-hidden="true">
                <FiMail />
              </div>
              <div>
                <p className="contact-method-label">{contact.emailLabel}</p>
                <p className="contact-method-value">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card"
              aria-label={`${contact.whatsappLabel}: ${personalInfo.whatsapp}`}
            >
              <div className="contact-method-icon" aria-hidden="true">
                <FaWhatsapp />
              </div>
              <div>
                <p className="contact-method-label">{contact.whatsappLabel}</p>
                <p className="contact-method-value" dir="ltr">
                  {personalInfo.whatsapp}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card"
              aria-label={contact.linkedinValue}
            >
              <div className="contact-method-icon" aria-hidden="true">
                <FiLinkedin />
              </div>
              <div>
                <p className="contact-method-label">{contact.linkedinLabel}</p>
                <p className="contact-method-value">
                  {contact.linkedinValue}{' '}
                  <FiExternalLink
                    style={{ display: 'inline', verticalAlign: 'middle', fontSize: '0.85rem' }}
                    aria-hidden="true"
                  />
                </p>
              </div>
            </a>
          </div>

          <div className="contact-actions-row">
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
              <FiSend aria-hidden="true" />
              <span>{contact.sendEmailBtn}</span>
            </a>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>{contact.whatsappBtn}</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCopyEmail}
            >
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span>{copied ? contact.copiedText : contact.copyEmailBtn}</span>
            </button>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FiLinkedin aria-hidden="true" />
              <span>{contact.connectLinkedinBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

