import '../styles/header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="contact-fields">
        <div className="name">Josh Sawyer</div>
        <a className="github" href="https://github.com/joshusooyaa"><img src="../../public/github-mark-white.svg" alt="github" /></a>
      </div>
      <div className="navigation-fields">
        <div className="about">About</div>
        <div className="projects">Projects</div>
        <div className="contact">Contact</div>
        <div className="resume">Resume</div>
      </div>
    </div>
  )

}