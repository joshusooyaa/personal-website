import '../styles/footer.css'
import { Link } from 'react-scroll'

export default function Footer() {

  return (
    <div className="footer-container">
      <p>Built by Josh Sawyer with React.js</p>
      <div className='links'>
        <a className="github" href="https://github.com/joshusooyaa"><img src="../../public/github-mark-white.svg" alt="github" /></a>
        <a className="github" href="https://github.com/joshusooyaa"><img src="../../public/github-mark-white.svg" alt="github" /></a>
        <a className="github" href="https://github.com/joshusooyaa"><img src="../../public/github-mark-white.svg" alt="github" /></a>
      </div>
      <Link to="top" className="to-top" spy={true} smooth={true} duration={1500}>To Top</Link>
    </div>
  )
}