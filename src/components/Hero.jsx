import React from 'react';
import { FiArrowRight, FiArrowLeft, FiMail, FiUser, FiSmartphone, FiDatabase } from 'react-icons/fi';
import { SiFlutter } from 'react-icons/si';

const Hero = ({ content, personalInfo, lang }) => {
  const ArrowIcon = lang === 'ar' ? FiArrowLeft : FiArrowRight;

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>{content.hero.badge}</span>
          </div>

          <h1 className="hero-title">
            {content.hero.headingMain}{' '}
            <span className="hero-title-gradient">{content.hero.headingHighlight}</span>
          </h1>

          <p className="hero-subtitle">{content.hero.subtitle}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>{content.hero.viewProjectsBtn}</span>
              <ArrowIcon aria-hidden="true" />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <FiMail aria-hidden="true" />
              <span>{content.hero.contactMeBtn}</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame-wrapper">
            <div className="profile-glow-ring" aria-hidden="true" />

            <div className="floating-badge floating-badge-1">
              <span className="floating-badge-icon">
                <FiSmartphone aria-hidden="true" />
              </span>
              <span>{content.hero.floatingTag1}</span>
            </div>

            <div className="floating-badge floating-badge-2">
              <span className="floating-badge-icon">
                <FiDatabase aria-hidden="true" />
              </span>
              <span>{content.hero.floatingTag2}</span>
            </div>

            <div className="profile-card">
              <div
                className={`profile-image-container ${
                  personalInfo.profilePhoto ? 'has-photo' : ''
                }`}
              >
                {personalInfo.profilePhoto ? (
                  <img
                    src={personalInfo.profilePhoto}
                    alt={content.meta.name}
                    className="profile-photo-img"
                  />
                ) : (
                  <>
                    <div className="placeholder-avatar-circle" aria-hidden="true">
                      <FiUser />
                    </div>
                    <p className="placeholder-name">{content.hero.photoPlaceholderTitle}</p>
                    <p className="placeholder-label">{content.hero.photoPlaceholderSubtitle}</p>
                    <span className="placeholder-hint">{content.hero.photoPlaceholderHint}</span>
                  </>
                )}
              </div>

              <div className="profile-card-footer">
                <div>
                  <p className="profile-meta-title">{content.meta.name}</p>
                  <p className="profile-meta-sub">{content.meta.role}</p>
                </div>
                <div className="profile-flutter-badge" title="Flutter Developer">
                  <SiFlutter aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

