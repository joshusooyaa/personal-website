
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon from "./icon";
import skillsDict from "./skills-dict";

import '../styles/skills.css'

export default function Skills( {items="all", numToShow=7} ) {
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

  items = (items == 'all') ? Object.keys(skillsDict) : items;

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