import { Link } from 'react-router-dom'

import debuggingImg from '../assets/about-images/debugging.jpg'
import teachingImg from '../assets/about-images/teaching.jpg'
import githubLogo from '../assets/github-mark-white.svg'

import '../styles/more-about.css'


const aboutData = [
  {
    text: "When I first stepped into the door of software development as a student, I quickly found out that with coding comes bugs, lots of them. As a result, I've been constantly developing my ability to troubleshoot and resolve code that isn't working. Learning both C and C++ has helped me tremendously while working with memory, and ultimately it helped my overall understanding of how code is working in the first place. I remember a time my freshman year when I felt completely lost working with C++, struggling to understand how pointers work, but now it's one of my favorite languages to work with. I'm excited to see what projects and problems I can work on as I start my career as a software developer.",
    image: debuggingImg
  },
  {
    text: "As someone who loves learning, I'm always happy to help people learn new things and overcome their challenges. This is one of the reasons why I enjoy Computer Science so much, because not only do I get to challenge myself but I also get to help others who are struggling with what I've been able to learn. In one of my more complicated courses, I was able to lead a study group where I got to teach concepts to my peers to help them understand the course material. This opportunity has only strengthened my desire to continue in this field, and I'm looking forward to being able to contribute to projects, developing these skills, and helping others grow in the process.",
    image: teachingImg
  },
  {
    text: "When I first stepped into the door of software development as a student, I quickly found out that with coding comes bugs, lots of them. As a result, I've been constantly developing my ability to troubleshoot and resolve code that isn't working. Learning both C and C++ has helped me tremendously while working with memory, and ultimately it helped my overall understanding of how code is working in the first place. I remember a time my freshman year when I felt completely lost working with C++, struggling to understand how pointers work, but now it's one of my favorite languages to work with. I'm excited to see what projects and problems I can work on as I start my career as a software developer.",
    image: debuggingImg
  },
  {
    text: "As someone who loves learning, I'm always happy to help people learn new things and overcome their challenges. This is one of the reasons why I enjoy Computer Science so much, because not only do I get to challenge myself but I also get to help others who are struggling with what I've been able to learn. In one of my more complicated courses, I was able to lead a study group where I got to teach concepts to my peers to help them understand the course material. This opportunity has only strengthened my desire to continue in this field, and I'm looking forward to being able to contribute to projects, developing these skills, and helping others grow in the process.",
    image: teachingImg
  }
]

function Section( {text, image} ) {
  return (
    <div className="info-section">
      <p className="text-area">{text}</p>
      <img src={image} alt="Img here" />
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
        {aboutData.map((sectionInfo, index) => (
          <Section key={index} text={sectionInfo.text} image={sectionInfo.image}/>
        ))}
      </div>
    </div>
  )
}