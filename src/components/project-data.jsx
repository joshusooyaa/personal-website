
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
    description: 'A web app built with 4 other members that allows for UO CS students to build a degree guide. Allows students to create an account, input classes already taken, and get a list of the remaining courses they need to take. Also includes the ability to generate a degree plan based on their remaining courses.',
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
    description: 'A fun app that allows the user to draw anything they like, with whatever color they\'d like. Features a rainbow drawing mode, different background colors, and the ability to change the grid size to draw on.',
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
    description: 'As you may have guessed, the classic calculator app. Does most operations found in a basic calculator. Some additional features include the ability to chain the previous operation and the ability to undo the current input.',
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