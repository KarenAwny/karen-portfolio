import React from 'react';
import {
  FiAward,
  FiCode,
  FiShield,
  FiGlobe,
  FiCalendar,
  FiSmartphone,
} from 'react-icons/fi';
import { SiFlutter } from 'react-icons/si';

const certIconMap = {
  flutter: SiFlutter,
  code: FiCode,
  web: FiGlobe,
  shield: FiShield,
  award: FiAward,
};

const Certificates = ({ content }) => {
  const { certificates } = content;

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <FiAward aria-hidden="true" />
            <span>{certificates.sectionTag}</span>
          </span>
          <h2 className="section-title">{certificates.title}</h2>
          <p className="section-subtitle">{certificates.subtitle}</p>
        </div>

        <div className="certificates-grid">
          {certificates.items.map((cert) => {
            const CertIcon = certIconMap[cert.icon] || FiSmartphone;
            return (
              <article key={cert.id} className="certificate-card reveal">
                <div className="certificate-top">
                  <div className="certificate-icon-box" aria-hidden="true">
                    <CertIcon />
                  </div>
                  <span className="certificate-category-tag">{cert.category}</span>
                </div>

                <div>
                  <p className="certificate-org">{cert.organization}</p>
                  <h3 className="certificate-title">{cert.title}</h3>
                  {cert.date && (
                    <p className="certificate-date">
                      <FiCalendar aria-hidden="true" />
                      <span>{cert.date}</span>
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

