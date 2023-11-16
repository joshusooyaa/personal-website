
import etchImage from '../assets/etch-a-sketch.png'
import calcImage from '../assets/calculator.png'
import degreeImage from '../assets/degree.png'

import githubLogo from '../assets/github-mark-white.svg'
import websiteLink from '../assets/live-preview.png'

const projectData = [
  {
    title: 'Degree Planner',
    image: degreeImage,
    skills: ["python","django","javascript", "html5", "css3"],
    description: 'Hello there this is a description',
    links: [
      {
        href: "https://github.com/AmonDestroyer/cs422-proj2",
        imgSrc: githubLogo,
        alt: "Github Link"
      }
    ],
    numToShow: null,
  },
  {
    title: 'Etch A Sketch',
    image: etchImage,
    skills: ["javascript", "html5", "css3"],
    description: 'Hello there this is a description',
    links: [
      {
        href: "https://github.com/joshusooyaa/etch-a-sketch",
        imgSrc: githubLogo,
        alt: "Github Link"
      },
      {
        href: "https://joshusooyaa.github.io/etch-a-sketch/",
        imgSrc: websiteLink,
        alt: "Live Preview Link"
      }
    ],
    numToShow: null,
  },
  {
    title: 'Calculator',
    image: calcImage,
    skills: ["javascript", "html5", "css3"],
    description: 'Hello there this is a description',
    links: [
      {
        href: "https://github.com/joshusooyaa/calculator",
        imgSrc: githubLogo,
        alt: "Github Link"
      },
      {
        href: "https://joshusooyaa.github.io/calculator/",
        imgSrc: websiteLink,
        alt: "Live Preview Link"
      }
    ],
    numToShow: null,
  }
]

projectData.forEach(project => {
  project.numToShow = project.skills.length > 4 ? 4 : project.skills.length;
})

export default projectData