import { Link } from 'react-router-dom'

import githubLogo from '../assets/github-mark-white.svg'

import '../styles/more-about.css'

function Section() {
  return (
    <div className="info-section">
      <p className="text-area">This is where I will talk about myself</p>
      <img src={githubLogo} alt="Img here" />
    </div>
  )
}

export default function MoreAbout() {
  return (
    <div className="more-about-page">
      <div className="header blurred">
        <div className="contact-fields visible">
          <div className="name">Josh Sawyer</div>
          <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link to Github" /></a>
        </div>
        <div className="navigation-fields">
          <Link className="back-button" to="/">Back</Link>
        </div>
      </div>
      <div className="about-container">
        <Section/>
        <Section/>
      </div>
    </div>
  )
}