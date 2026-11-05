import React, { useState, useEffect } from 'react';
import {
  FiFolder,
  FiCheckCircle,
  FiImage,
  FiExternalLink,
  FiEye,
  FiX,
  FiUser,
  FiCode,
} from 'react-icons/fi';

const ProjectCard = ({ project, labels, onOpenPreview }) => {
  const handleViewProject = () => {
    if (project.projectUrl) {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenPreview(project);
    }
  };

  return (
    <article className="project-card reveal">
      <div className="project-header">
        <div>
          <span className="project-type-badge">
            <FiFolder aria-hidden="true" />
            <span>{project.type}</span>
          </span>
          <h3 className="project-title">{project.name}</h3>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleViewProject}
        >
          {project.projectUrl ? (
            <FiExternalLink aria-hidden="true" />
          ) : (
            <FiEye aria-hidden="true" />
          )}
          <span>{labels.viewProjectBtn}</span>
        </button>
      </div>

      <div className="project-body-grid">
        <div>
          <p className="project-description">{project.description}</p>

          <div className="project-role-box">
            <h4 className="project-sub-heading">
              <FiUser aria-hidden="true" />
              <span>{labels.roleLabel}</span>
            </h4>
            <p className="project-role-text">{project.role}</p>
          </div>

          <h4 className="project-sub-heading">{labels.featuresLabel}</h4>
          <ul className="project-features-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="project-feature-item">
                <FiCheckCircle className="feature-check-icon" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h4 className="project-sub-heading">
            <FiCode aria-hidden="true" />
            <span>{labels.techLabel}</span>
          </h4>
          <div className="project-tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-screenshots-column">
          <h4 className="project-sub-heading">
            <FiImage aria-hidden="true" />
            <span>{labels.screenshotsLabel}</span>
          </h4>

          <div className="project-screenshots-grid">
            {project.screenshots.map((shot) => (
              <div key={shot.id} className="screenshot-card">
                {shot.src ? (
                  <img
                    src={shot.src}
                    alt={`${project.name} - ${shot.title}`}
                    className="screenshot-img"
                  />
                ) : (
                  <div className="screenshot-placeholder">
                    <div className="screenshot-icon-box" aria-hidden="true">
                      <FiImage />
                    </div>
                    <p className="screenshot-title">{shot.title}</p>
                    <p className="screenshot-subtitle">{shot.subtitle}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ content }) => {
  const { projects } = content;
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <FiFolder aria-hidden="true" />
            <span>{projects.sectionTag}</span>
          </span>
          <h2 className="section-title">{projects.title}</h2>
          <p className="section-subtitle">{projects.subtitle}</p>
        </div>

        <div className="projects-list">
          {projects.items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={projects}
              onOpenPreview={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="project-type-badge">{selectedProject.type}</span>
                <h3 id="modal-project-title" className="project-title">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label={projects.closeModalBtn}
              >
                <FiX />
              </button>
            </div>

            <div className="modal-note-banner">{projects.modalStatusNote}</div>

            <p className="project-description">{selectedProject.description}</p>

            <div className="project-role-box">
              <h4 className="project-sub-heading">{projects.roleLabel}</h4>
              <p className="project-role-text">{selectedProject.role}</p>
            </div>

            <h4 className="project-sub-heading">{projects.featuresLabel}</h4>
            <ul className="project-features-list">
              {selectedProject.features.map((feat, i) => (
                <li key={i} className="project-feature-item">
                  <FiCheckCircle className="feature-check-icon" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h4 className="project-sub-heading">{projects.techLabel}</h4>
            <div className="project-tech-tags" style={{ marginBottom: '1.5rem' }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setSelectedProject(null)}
            >
              {projects.closeModalBtn}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

