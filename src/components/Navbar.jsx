import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';

const Navbar = ({ content, lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: content.nav.about },
    { id: 'skills', label: content.nav.skills },
    { id: 'projects', label: content.nav.projects },
    { id: 'certificates', label: content.nav.certificates },
    { id: 'contact', label: content.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sectionIds = ['about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a
            href="#hero"
            className="navbar-logo"
            aria-label={content.meta.name}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="logo-mark" aria-hidden="true">
              KA
            </span>
            <span>
              {content.meta.name}
              <span className="logo-dot">.</span>
            </span>
          </a>

          <nav className="navbar-links" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <button
              type="button"
              className="lang-toggle-btn"
              onClick={onToggleLang}
              aria-label={content.nav.langLabel}
              title={content.nav.langLabel}
            >
              <FiGlobe aria-hidden="true" />
              <span>{content.nav.langToggle}</span>
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen
                  ? lang === 'ar'
                    ? 'إغلاق القائمة'
                    : 'Close navigation menu'
                  : lang === 'ar'
                  ? 'فتح القائمة'
                  : 'Open navigation menu'
              }
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-list" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

