import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData, personalInfo } from './data/portfolioData';

function App() {
  const [lang, setLang] = useState('en');
  const content = portfolioData[lang];

  // Dynamically update document language and RTL/LTR direction
  useEffect(() => {
    document.documentElement.lang = content.lang;
    document.documentElement.dir = content.dir;
    document.title =
      lang === 'ar'
        ? 'كارين عوني | مطورة تطبيقات Flutter جونيور'
        : 'Karen Awny | Junior Flutter Developer';
  }, [lang, content.lang, content.dir]);

  // Lightweight IntersectionObserver for scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className="app-wrapper">
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>

      <Navbar
        content={content}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      <main>
        <Hero
          content={content}
          personalInfo={personalInfo}
          lang={lang}
        />
        <About content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <Certificates content={content} />
        <Contact
          content={content}
          personalInfo={personalInfo}
        />
      </main>

      <Footer
        content={content}
        personalInfo={personalInfo}
      />
    </div>
  );
}

export default App;

