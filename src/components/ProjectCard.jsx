
import { ArrowUpRight, Github, FolderCode } from 'lucide-react'

export default function ProjectCard({ project }) {
  if (!project) return null

  return (
    <article className={`project-card ${project.tone || ''}`}>

      <div className="project-top">
        <div className="project-icon" aria-hidden="true">
          {project.icon || <FolderCode size={24} />}
        </div>

        <span className="project-number">
          {project.number}
        </span>
      </div>

      <span className="project-category">
        {project.category || 'Full Stack Development'}
      </span>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-features">
        {(project.features || []).map((feature, index) => (
          <span key={index}>✓ {feature}</span>
        ))}
      </div>

      <div className="tag-list">
        {(project.tech || project.stack || []).map((item, index) => (
          <span className="tag" key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-actions">

        {project.github && project.github !== '#' ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github size={16} />
            GitHub
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="project-link project-link-muted">
            <Github size={16} />
            Add GitHub URL
          </span>
        )}

        {project.demo && project.demo !== '#' ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live demo
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="project-link project-link-muted">
            Demo not added
          </span>
        )}

      </div>
    </article>
  )
}
