import SectionHeader from './section-header'

import Skills from './skills'
import projectData from './project-data'

import '../styles/projects.css'


function Project(props) {
  console.log(props.skills)
  
  return (
    <div className="project">
      <img className="project-image" src={props.image} alt="project image" />
      <div className="information-background"></div>
      <div className="information-details">
        <h3 className="project-title">
          {props.title}
          <hr></hr>
        </h3>
        <p className="project-description">
          {props.description}
        </p>
        <div className="project-skills-container">
          <div className="project-skills">
            <Skills items={props.skills} numToShow={props.numToShow}/>
          </div>
        </div>
        <div className="project-links">
          {props.links.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              <img src={link.imgSrc} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  
  return (
    <div name="projects" className="projects-section">
      <SectionHeader title="Projects"/>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  )
}