import { ArrowUpRight, BadgeCheck } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-${project.slug} reveal`} style={{ '--delay': `${index * 90}ms` }}>
      <div className="project-visual">
        {project.watermark && <img className="project-watermark" src={project.watermark} alt="" />}
        <span className="real-badge"><BadgeCheck size={15} /> Projeto real</span>
        {project.logo ? <img className="project-logo" src={project.logo} alt={`Logo ${project.title}`} /> : <div className="project-logo project-monogram" aria-label="CapPRO">CP</div>}
        {project.symbol && <img className="project-symbol" src={project.symbol} alt="" />}
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.technologies.length > 0 && <div className="tags">
          {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
        </div>}
        {project.githubLink ? <div className="project-links">
          <a className="project-primary-link" href={project.link} target="_blank" rel="noreferrer">
            {project.action} <ArrowUpRight size={18} />
          </a>
          <a className="project-secondary-link" href={project.githubLink} target="_blank" rel="noreferrer">
            {project.githubAction} <ArrowUpRight size={16} />
          </a>
        </div> : <a href={project.link} target="_blank" rel="noreferrer">
          {project.action} <ArrowUpRight size={18} />
        </a>}
      </div>
    </article>
  )
}
