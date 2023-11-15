import SectionHeader from './section-header'

import '../styles/projects.css'

import etchProjectImage from '../assets/etch-a-sketch.png'
import githubLogo from '../assets/github-mark-white.svg'
import websiteLink from '../assets/live-preview.png'


function Project( {image, description } ) {
  return (
    <div className="project">
      <img className="project-image" src={image} alt="project image" />
      <div className="information-background"></div>
      <div className="information-details">
        <h3 className="project-title">
          Etch A Sketch
        </h3>
        <hr></hr>
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="project-links">
          <a href=""><img src={githubLogo} alt="github link" /></a>
          <a href=""><img src={websiteLink} alt="live link" /></a>
        </div>
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
        <Project image={etchProjectImage} />
        <Project image={etchProjectImage} />
      </div>
    </div>
  )
}