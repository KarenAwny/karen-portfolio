import React from 'react';
import {
  FiSmartphone,
  FiDatabase,
  FiGlobe,
  FiTool,
  FiCpu,
  FiCode,
  FiLayers,
} from 'react-icons/fi';
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const categoryIconMap = {
  mobile: FiSmartphone,
  database: FiDatabase,
  web: FiGlobe,
  tools: FiTool,
};

const skillIconMap = {
  flutter: SiFlutter,
  dart: SiDart,
  firebase: SiFirebase,
  firestore: FiDatabase,
  html: SiHtml5,
  css: FaCss3Alt,
  javascript: SiJavascript,
  vscode: FiCode,
  antigravity: FiCpu,
};

const Skills = ({ content }) => {
  const { skills } = content;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <FiLayers aria-hidden="true" />
            <span>{skills.sectionTag}</span>
          </span>
          <h2 className="section-title">{skills.title}</h2>
          <p className="section-subtitle">{skills.subtitle}</p>
        </div>

        <div className="skills-legend-bar reveal">
          <span className="skills-legend-note">{skills.levelNote}</span>
          <div className="skills-legend-items">
            {skills.legend.map((item) => (
              <span key={item.type} className={`skill-level-badge ${item.type}`}>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-categories-grid">
          {skills.categories.map((category) => {
            const CategoryIcon = categoryIconMap[category.icon] || FiCode;
            return (
              <div key={category.id} className="skill-category-card reveal">
                <div className="skill-category-header">
                  <div className="skill-category-icon" aria-hidden="true">
                    <CategoryIcon />
                  </div>
                  <div>
                    <h3 className="skill-category-title">{category.title}</h3>
                    <p className="skill-category-desc">{category.description}</p>
                  </div>
                </div>

                <div className="skill-items-list">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIconMap[skill.icon] || FiCode;
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-item-top">
                          <div className="skill-name-group">
                            <span className="skill-item-icon" aria-hidden="true">
                              <SkillIcon />
                            </span>
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <span className={`skill-level-badge ${skill.levelType}`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.detail && <p className="skill-detail">{skill.detail}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
