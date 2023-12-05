import { Link } from 'react-router-dom'

import '../styles/resume.css'

import resumePDF from '../assets/resume/JoshSawyerResume.pdf'
import githubLogo from '../assets/github-mark-white.svg'
import downloadIcon from '../assets/download.svg'
import backButton from '../assets/back-button.svg'

const courseWorkList = [
  {
    title: "CS Degree Planner Web Application",
    bulletpoints: [
      "Created a Django-based user authentication system to allow for users to generate and save personalized degree guides",
      "Developed and integrated backend functionality in Django to connect with the frontend and database, allowing for an intuitive degree generation process",
      "Collaborated with a team of 4 using Discord to effectively communicate, avoid task overlap, and meet project milestones"
    ]
  },
  {
    title: "P-Thread Disk Driver Emulator",
    bulletpoints: [
      "Implemented multithreaded driver in C to handle concurrent read/write operations to disk",
      "Utilized a buffer to manage blocking calls to the disk, ensuring efficient task execution",
      "Employed a mutex lock to prevent race conditions during completion checks and status updates"
    ]
  },
]

const experienceList = [
  {
    title: "Willamette High School, Assistant Coach",
    date: "January 2020 - May 2022",
    bulletpoints: [
      "Coached 15 athletes on their running form to improve their personal bests",
      "Led workouts, encouraging athletes to reach their times to help them make the most of practice",
      "Communicated closely with the head coach to ensure smooth workouts that aligned with team goals"    
    ]
  },
  {
    title: "Putters Family Entertainment Center, Cook",
    date: "November 2019 - November 2020",
    bulletpoints: [
      "Coordinated with a team of 7 cooks in a fast paced environment to accurately fulfill customer orders on time",
      "Sought constant feedback from managers and peers to increase efficiency and quality of orders",
      "Effectively handled mistakes with composure to maintain workflow and uphold customer satisfaction"
    ]
  },
  {
    title: "Fred Meyer, Parcel",
    date: "June 2018 - November 2018",
    bulletpoints: [
      "Assisted around 5 customers per shift with attentive service to ensure a smooth shopping experience",
      "Organized workload between 2 co-workers to maximize productivity in a high demand environment",
      "Navigated a high-traffic parking lot to effectively retrieve carts for customers, maintaining customer satisfaction "
    ]
  },
]

function CourseWork( {title, bulletpoints}) {
  return (
    <div className="course-work">
      <p>{title}</p>
      <ul>
        {bulletpoints.map((bulletpoint, index) => (
          <li key={index}>{bulletpoint}</li>
        ))
        }
      </ul>
    </div>
  )
}

function Experience ( {title, date, bulletpoints} ) {
  return (
    <div className="work-experience">
      <div className="experience-header">
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <ul>
        {bulletpoints.map((bulletpoint, index) => (
          <li key={index}>{bulletpoint}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default function Resume() {
  return (
    <>
    <div className="header blurred">
      <div className="contact-fields visible">
        <div className="name">Josh Sawyer</div>
        <a className="github" href="https://github.com/joshusooyaa"><img src={githubLogo} alt="Link to Github" /></a>
        <a className="download" href={resumePDF} download><img src={downloadIcon} alt="Link to Github" /></a>
      </div>
      <div className="navigation-fields">
        <Link to="/" className="back-button"><img src={backButton} alt="back" /></Link>
      </div>
    </div>
    <header>
      <h1>Josh Sawyer</h1>
      <p className="contact-info"><a href="mailto:thejoshsawyer@gmail.com">thejoshsawyer@gmail.com</a> ∙ <a href="https://github.com/joshusooyaa">github.com/joshusooyaa</a></p>
    </header>
    <div className="info-container">
      <section className="resume-section education">
        <h2 className="section-title">EDUCATION</h2>
        <hr></hr>
        <div className="degree">
          <p>Bachelor of Science in Computer Science</p>
          <p>December 2023</p>
        </div>
        <p className="university">University of Oregon - 4.04 GPA</p>
      </section>
      <section className="resume-section coursework">
        <h2 className="section-title">RELEVANT COURSE WORK</h2>
        <hr></hr>
        {courseWorkList.map((project, index) => (
          <CourseWork key={index} title={project.title} bulletpoints={project.bulletpoints} />
        ))}
      </section>
      <section className="resume-section experience">
        <h2 className="section-title">EXPERIENCE</h2>
        <hr></hr>
        {experienceList.map((experience, index) => (
          <Experience key={index} title={experience.title} date={experience.date} bulletpoints={experience.bulletpoints} />
        ))}
      </section>
      <section className="resume-section">
        <h2 className="section-title">SKILLS</h2>
        <hr></hr>
        <div className="skills-list">
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul>
            <li>Data Structures</li>
            <li>Ruby</li>
            <li>React</li>
          </ul>
        </div>
      </section>
      <section className="languages">
        <h2 className="section-title">LANGUAGES</h2>
        <hr></hr>
        <div className="language-info">
          <p>Japanese</p>
          <p>Intermediate Comprehension</p>
        </div>
      </section>
    </div>
    <div className="download-resume">
      <a className="resume-download" href={resumePDF}>Download Resume</a>
    </div>
    </>
  )
}