import React, { useState, useEffect } from 'react';

import '../styles/header.css'

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