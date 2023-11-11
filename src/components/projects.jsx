import SectionHeader from './section-header'

import '../styles/projects.css'

export default function Projects() {
  return (
    <div className="projects-section">
      <SectionHeader title="Projects"/>
      <div className="projects-container">
        <div className="project1 wrapper">
          <div className="display"></div>
          <div className="information">
            <p>Description here</p>
            <div className="links">
              a
            </div>
          </div>
          <div className="technologies">
            Tech used...
          </div>
        </div>
      </div>
    </div>
  )
}