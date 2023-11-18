import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'

import '../styles/header.css'
import githubLogo from '../assets/github-mark-white'

export default function Header() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showName, setShowName] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsBlurred(scrollY > 1); // If greater than 1, set to blur, otherwise don't blur
    setShowName(scrollY > 1);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  
  return (
    <div className={isBlurred ? 'header blurred' : 'header'}>
      <div className={showName ? 'contact-fields visible' : 'contact-fields'}>
        <div className="name">Josh Sawyer</div>
        <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link to Github" /></a>
      </div>
      <div className="navigation-fields">
        <Link to="about" spy={true} smooth={true} duration={800} offset={-150}>About</Link>
        <Link to="projects" spy={true} smooth={true} duration={800} offset={-150}>Projects</Link>
        <Link to="contact" spy={true} smooth={true} duration={800} offset={-150}>Contact</Link>
        {/* <div className="resume-link">Resume</div> */}
        <RouterLink to="resume">Resume</RouterLink>
      </div>
    </div>
  )

}