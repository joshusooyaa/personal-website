import { Link } from 'react-router-dom'

import githubLogo from '../assets/github-mark-white.svg'

import '../styles/more-about.css'


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
        Coming soon
      </div>
    </div>
  )
}