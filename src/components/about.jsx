import SectionHeader from './section-header'
import Skills from './skills' 
import { Link } from 'react-router-dom'         

import '../styles/about.css'

export default function About() {
  return (
    <div name="about" className="about-section">
      <SectionHeader title="About" />
      <div className="about-area">
        <div className="about-container">
          <div className="salutation">
            <h2>
              Hey there!👋
            </h2>
            <h2 className="name">
              I'm Josh
            </h2>
          </div>
          <div className="abouts">
            <p className="section intro">
            I'm currently a student at the University of Oregon, 
            seeking my Bachelors of Science in Computer Science. 
            I love the challenge this area provides and feel its perfect for me 
            due to the constant rise of new technologies allowing for an endless opportunity to learn new things.
            </p>
            <p className="section interests">
              I'm an avid climber, I love bouldering and most things outdoors. I have a passion for learning languages, and I'm currently
              learning Japanese. I also really enjoy helping people in these areas since I want help anyone who's interested in seeing why it I'm interested in the things 
              I do.
            </p>
          </div>
        </div>
        <div className="more-about-container">
          <Link to="about" className="more-about-link">Get to know me more<span>➔</span></Link>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills">
          <Skills items={"all"} numToShow={7}/>
        </div>
      </div>
    </div>
  )
}