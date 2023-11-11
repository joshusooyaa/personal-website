import SectionHeader from './section-header'

import '../styles/projects.css'

function Project() {
  return (
    <div className="projects-container">
          <div className="project1 wrapper">
            <div className="display"></div>
            <div className="information">
              <p>Description here</p>
              <div className="links">
              <a className="github" href="https://github.com/joshusooyaa"><img src="../../public/github-mark-white.svg" alt="github" /></a>
              <a className="live-preview" href="https://joshusooyaa.github.io/etch-a-sketch/"><img src="../../public/live-preview.png" alt="live preview" /></a>
              </div>
            </div>
            <div className="technologies">
              Tech used...
            </div>
          </div>
    </div>
  )
}


export default function Projects() {
  return (
    <div className="projects-section">
      <SectionHeader title="Projects"/>
      <Project />
      <Project />
      <Project />
  
    </div>
  )
}