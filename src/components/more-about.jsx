import { Link } from 'react-router-dom'
import SectionHeader from './section-header'

import debuggingImg from '../assets/about-images/debugging.jpg'
import teachingImg from '../assets/about-images/teaching.jpg'
import problemSolvingImg from '../assets/about-images/problem-solving.jpg'
import communicationImg from '../assets/about-images/communication.png'
import climbingImg from '../assets/about-images/climbing.jpeg'
import japaneseImg from '../assets/about-images/japanese.jpg'

import githubLogo from '../assets/github-mark-white.svg'
import backButton from '../assets/back-button.svg'

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
    text: "Something I learned almost right away was how important it is to break a problem into subproblems. I like to take a step back and figure out what problem needs to be solved before I start, then break that down. One project in particular, where this process made creating our app much smoother, was when I was working with a team of 4 to build a degree planner from scratch. We defined the problem, broke it down into many subproblems, and then solved each one building the app up as we did so. Seeing the process play out in a group setting, working as a team to solve each problem, and getting the finished product has only excited me to continue in this area to solve more complex problems.",
    image: problemSolvingImg
  },
  {
    text: "In the past I used to be self reliant when it came to figuring things out. However, I realized the importance of communication when overcoming a challenge through my struggles in a course I took where no matter what I did, I felt like I wasn't making any progress. However, as soon as I communicated this to the professor he gave me techniques I hadn't thought of to help me with my understanding. After putting them to use, I immediately found myself improving in my understanding, something I couldn't get by myself. With this, I've learned how important maintaining effective communication between team members is to not only ensuring progress, but making sure everyone is understanding.",
    image: communicationImg
  },
  {
    text: "I recently found out about bouldering, and have fallen in love with it. Climbing has been a way for me to not only grow stronger, but the problem solving aspect of it is just another way I can challenge myself. I've found myself spending hours on a single problem trying multiple ways to get to the top, questioning if a certain move I'm doing is wrong and running through other options I can take. It's also so much fun working with other climbers to solve a problem and I only wish I had started sooner.",
    image: climbingImg
  },
  {
    text: "Over the past few years I've been learning Japanese. Ever since I started, I've been captivated by the process of learning a language and have developed a passion for learning languages. Breaking a language down into its most fundamental level to see how each part works, and then slowly gaining comprehension over time, is a process unlike any other. Being able to understand a second language is so cool to me and it only inspires me to learn more languages after I've become fluent in Japanese.",
    image: japaneseImg
  },
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
        <Link to="/" className="back-button"><img src={backButton} alt="back" /></Link>
        </div>
      </div>
      <SectionHeader title="About Me"/>
      <div className="about-container">
        {aboutData.map((sectionInfo, index) => (
          <Section key={index} text={sectionInfo.text} image={sectionInfo.image}/>
        ))}
      </div>
      <div className='footer'>
        <Link to="/" className="bottom-back-button">Back</Link>
      </div>
    </div>
    
  )
}