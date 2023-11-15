
import etchImage from '../assets/etch-a-sketch.png'


const projectData = [
  {
    title: 'Etch A Sketch',
    image: etchImage,
    skills: ["javascript", "html5", "css3"],
    description: 'Hello there this is a description',
    numToShow: null,
  },
  {
    title: 'Etch A Sketch',
    image: etchImage,
    skills: ["javascript", "html5", "css3"],
    description: 'Hello there this is a description',
    numToShow: null,
  }
]

projectData.forEach(project => {
  project.numToShow = project.skills.length > 4 ? 4 : project.skills.length;
})

export default projectData