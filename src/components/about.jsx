import SectionHeader from './section-header'
import Skills from './skills' 
import { Link } from 'react-router-dom'        

import { useState, useEffect } from 'react';

import selfImg from '../assets/josh.jpg'

import '../styles/about.css'

export default function About() {
  const [numToShow, setNumToShow] = useState(getNumToShow(window.innerWidth));

  function getNumToShow(width) {
    if (width < 600) {
      return 3;
    }
    else if (width < 1200) {
      return 5;
    }
    else {
      return 7;
    }
  }

  useEffect(() => {
    function handleResize() {
      setNumToShow(getNumToShow(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div name="about" className="about-section">
      <SectionHeader title="About" />
      <div className="about-area">
        <div className="about-container">
          <div className="salutation img-of-me">
            {/* <h2>
              Hey there!👋
            </h2>
            <h2 className="name">
              I'm Josh
            </h2> */}
            <img className="image-of-me" src={selfImg} alt="Image of me" />
          </div>
          <div className="abouts">
            <p className="section intro">
            Hi, I'm Josh Sawyer! I'm currently a student at the University of Oregon, seeking my Bachelors of Science in Computer Science. 
            I love the challenge this area provides and feel it's perfect for me due to the constant rise of new technologies allowing 
            for an endless opportunity to learn new things. 
            </p>
            <p className="section interests">
            I'm an avid climber, I love bouldering and most things outdoors, and I have a passion for learning languages as I'm currently learning Japanese. 
            I also really enjoy helping people in these areas because I like helping others grow as well.
            </p>
            <p className="section interests">
            Throughout my time in college I've learned the importance of communication and the ability to work as a team. 
            I used to like only solving things on my own, but being able to work with others and communicate my problems has been an 
            eye opener at how helpful it is to solve a problem - it's also way more enjoyable creating something as a team. I want to apply what I've learned to 
            the field of software development and build software that makes the lives of those who use it easier.
            </p>
          </div>
        </div>
        <div className="more-about-container">
          <Link to="personal-website/about" className="more-about-link">Get to know me more<span>➔</span></Link>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills">
          <Skills items={"all"} numToShow={numToShow}/>
        </div>
      </div>
    </div>
  )
}