import '../styles/footer.css'
import { Link } from 'react-scroll'

import githubLogo from '../assets/github-mark-white.svg'

export default function Footer() {

  return (
    <div className="footer-container">
      <p>Built by Josh Sawyer with React.js</p>
      <div className='links'>
        <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link To Github" /></a>
        <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link To Github" /></a>
        <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link To Github" /></a>
      </div>
      <Link to="top" className="to-top" spy={true} smooth={true} duration={1500}>To Top</Link>
    </div>
  )
}