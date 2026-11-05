import React from 'react';
import { FiBookOpen, FiSmartphone, FiGlobe, FiUserCheck } from 'react-icons/fi';

const About = ({ content }) => {
  const { about } = content;

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <FiUserCheck aria-hidden="true" />
            <span>{about.sectionTag}</span>
          </span>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-subtitle">{about.subtitle}</p>
        </div>

        <div className="about-grid">
          <div className="about-story-card reveal">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-info-column">
            <div className="about-info-card reveal">
              <div className="info-card-icon" aria-hidden="true">
                <FiBookOpen />
              </div>
              <div>
                <p className="info-card-label">{about.infoCards.educationTitle}</p>
                <h3 className="info-card-value">{about.infoCards.educationValue}</h3>
                <p className="info-card-sub">{about.infoCards.educationSub}</p>
              </div>
            </div>

            <div className="about-info-card reveal">
              <div className="info-card-icon" aria-hidden="true">
                <FiSmartphone />
              </div>
              <div>
                <p className="info-card-label">{about.infoCards.roleTitle}</p>
                <h3 className="info-card-value">{about.infoCards.roleValue}</h3>
                <p className="info-card-sub">{about.infoCards.roleSub}</p>
              </div>
            </div>

            <div className="about-info-card reveal">
              <div className="info-card-icon" aria-hidden="true">
                <FiGlobe />
              </div>
              <div>
                <p className="info-card-label">{about.infoCards.languagesTitle}</p>
                <div className="language-pills">
                  {about.infoCards.languagesList.map((langItem) => (
                    <span key={langItem.name} className="language-pill">
                      <span>{langItem.name}</span>
                      <span className="language-level-badge">{langItem.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

