import '../styles/footer.css'
import { Link } from 'react-scroll'

import githubLogo from '../assets/github-mark-white.svg'
import linkedinLogo from '../assets/linkedin.svg'

export default function Footer() {

  return (
    <div className="footer-container">
      <p>Built by Josh Sawyer with React.js</p>
      <div className='links'>
        <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link To Github" /></a>
        <a className="linkedin" href="https://www.linkedin.com/in/josh-sawyer-3b4457263/"><img src={linkedinLogo} alt="Link To LinkedIn profile" /></a>
      </div>
      <Link to="top" className="to-top" spy={true} smooth={true} duration={1500}>To Top</Link>
    </div>
  )
}