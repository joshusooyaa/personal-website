import SectionHeader from './section-header'

import Skills from './skills'
import projectData from './project-data'

import '../styles/projects.css'

import githubLogo from '../assets/github-mark-white.svg'
import websiteLink from '../assets/live-preview.png'


function Project( {image, skills, description, numToShow } ) {
  console.log(skills)
  
  return (
    <div className="project">
      <img className="project-image" src={image} alt="project image" />
      <div className="information-background"></div>
      <div className="information-details">
        <h3 className="project-title">
          Etch A Sketch
          <hr></hr>
        </h3>
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="project-skills-container">
          <div className="project-skills">
            <Skills items={skills} numToShow={numToShow}/>
          </div>
        </div>
        <div className="project-links">
          <a href=""><img src={githubLogo} alt="github link" /></a>
          <a href=""><img src={websiteLink} alt="live link" /></a>
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