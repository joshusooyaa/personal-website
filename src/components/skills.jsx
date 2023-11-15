
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon from "./icon";

import '../styles/skills.css'

export default function Skills( {items, numToShow} ) {
  const skillsDict = {
    python: "devicon-python-plain-wordmark colored",
    cplusplus: "devicon-cplusplus-line-wordmark colored",
    c: "devicon-c-line-wordmark colored",
    csharp: "devicon-csharp-line-wordmark colored",
    django: "devicon-django-plain-wordmark colored",
    react: "devicon-react-original-wordmark colored",
    javascript: "devicon-javascript-plain colored",
    html5: "devicon-html5-plain-wordmark colored",
    css3: "devicon-css3-plain-wordmark colored",
    unity: "devicon-unity-original-wordmark colored",
    flask: "devicon-flask-original-wordmark colored",
    docker: "devicon-docker-plain-wordmark colored",
    ruby: "devicon-ruby-plain-wordmark colored",
    github: "devicon-github-original-wordmark colored",
    git: "devicon-git-plain-wordmark colored",
    linux: "devicon-linux-plain colored",
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: numToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    arrows: false,
  }

  items = Object.keys(skillsDict)
  console.log(skillsDict[items[0]])
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="skill" key={index}>
            <Icon icon={skillsDict[item]}/>
          </div>
        ))}
      </Slider>
    </div>
  )
}