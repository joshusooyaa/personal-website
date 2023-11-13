import SectionHeader from './section-header'

import '../styles/projects.css'

import etchProjectImage from '../assets/etch-a-sketch.png'

function Project( {image, description } ) {
  return (
    <div className="project">
      <img className="project-image" src={image} alt="project image" />
      <div className="information">
        <div className="project-title"></div>
        <div className="description">{description}</div>
        <div className="project-links"></div>
        <div className="project-skills-container">
          <div className="project-skills">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  
  return (
    <div className="projects-section">
      <SectionHeader title="Projects"/>
      <div className="projects-container">
        <Project image={etchProjectImage} description=""/>
        <Project image={etchProjectImage} description="Hi there"/>
      </div>
    </div>
  )
}