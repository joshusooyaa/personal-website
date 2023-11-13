import SectionHeader from './section-header'

import '../styles/projects.css'

import etchProjectImage from '../assets/etch-a-sketch.png'

// function Project( {image, description } ) {
//   return (
//         <div className="project1 wrapper">
//           <div className="display" style={{backgroundImage: `url(${image}`}}></div>
//           <div className="information">
//             <p>{description}</p>
//             <div className="links">
//             <a className="github" href="https://github.com/joshusooyaa"><img src="../../public/github-mark-white.svg" alt="github" /></a>
//             <a className="live-preview" href="https://joshusooyaa.github.io/etch-a-sketch/"><img src="../../public/live-preview.png" alt="live preview" /></a>
//             </div>
//           </div>
//           <div className="technologies">
//             Tech used...
//           </div>
//         </div>
//   )
// }

function Project( {image, description } ) {
  return (
    <div className="project">
      <img className="project-image" src={image} alt="project image" />
      <div className="information">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  
  return (
    <div className="projects-section">
      <SectionHeader title="Projects"/>
      <div className="projects-container">
        <Project image={etchProjectImage} description="Hi there"/>
      </div>
    </div>
  )
}